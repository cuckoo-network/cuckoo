/*
Copyright 2026.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// Package gatewaytest holds the shared test fakes for the sshgateway feature
// packages (root native SSH, webshell) so the fakes cannot drift between the
// suites. It deliberately avoids importing the sshgateway packages themselves
// — the fakes satisfy their interfaces structurally.
package gatewaytest

import (
	"context"
	"io"
	"sync"
	"time"

	"k8s.io/client-go/tools/remotecommand"

	"github.com/bex-co/bex/lego/backend/internal/apps"
	"github.com/bex-co/bex/lego/backend/internal/core"
	"github.com/bex-co/bex/lego/backend/internal/store"
)

// FakeStore implements the gateway's Store and NonceStore surfaces. Its nonce
// map mirrors the shared shell_ticket_nonces claim (w1/042 L7); share ONE
// FakeStore between two servers to model two gateway replicas.
type FakeStore struct {
	Key      store.SSHKey
	Missing  bool
	ClaimErr error

	mu             sync.Mutex
	failKeyLookups bool
	started        []store.SSHSessionAudit
	ended          []string
	nonces         map[string]bool
}

// SetFailKeyLookups flips subsequent SSHKeyByFingerprint calls to not-found —
// the mid-connection key-deletion case (codex round-8 #5's per-channel
// re-read). Safe to call while the server goroutines are serving.
func (f *FakeStore) SetFailKeyLookups(v bool) {
	f.mu.Lock()
	defer f.mu.Unlock()
	f.failKeyLookups = v
}

func (f *FakeStore) SSHKeyByFingerprint(context.Context, string) (store.SSHKey, error) {
	f.mu.Lock()
	fail := f.failKeyLookups
	f.mu.Unlock()
	if fail || f.Missing {
		return store.SSHKey{}, store.ErrNotFound
	}
	return f.Key, nil
}

func (f *FakeStore) StartSSHSession(_ context.Context, audit store.SSHSessionAudit) error {
	f.mu.Lock()
	defer f.mu.Unlock()
	f.started = append(f.started, audit)
	return nil
}

func (f *FakeStore) EndSSHSession(_ context.Context, id, result string, _ time.Time) error {
	f.mu.Lock()
	defer f.mu.Unlock()
	f.ended = append(f.ended, id+":"+result)
	return nil
}

func (f *FakeStore) ClaimShellNonce(_ context.Context, nonce string, _ time.Time) (bool, error) {
	f.mu.Lock()
	defer f.mu.Unlock()
	if f.ClaimErr != nil {
		return false, f.ClaimErr
	}
	if f.nonces == nil {
		f.nonces = map[string]bool{}
	}
	if f.nonces[nonce] {
		return false, nil
	}
	f.nonces[nonce] = true
	return true, nil
}

// StartedSessions returns a copy of the recorded session-start audit rows.
func (f *FakeStore) StartedSessions() []store.SSHSessionAudit {
	f.mu.Lock()
	defer f.mu.Unlock()
	return append([]store.SSHSessionAudit(nil), f.started...)
}

// EndedSessions returns a copy of the recorded "<id>:<result>" session ends.
func (f *FakeStore) EndedSessions() []string {
	f.mu.Lock()
	defer f.mu.Unlock()
	return append([]string(nil), f.ended...)
}

// FakeResolver implements TargetResolver, recording the identity subject and
// username it resolved for.
type FakeResolver struct {
	Err      error
	Target   apps.SSHInstanceTarget
	Subject  string
	Username string

	mu   sync.Mutex
	flip error // when set, overrides Err — the mid-connection revocation case
}

// SetFlip makes subsequent ResolveSSHSession calls fail with err — the
// membership-revoked-after-transport-auth case (codex round-8 #5). Safe to call
// while the server goroutines are serving.
func (f *FakeResolver) SetFlip(err error) {
	f.mu.Lock()
	defer f.mu.Unlock()
	f.flip = err
}

func (f *FakeResolver) ResolveSSHSession(ctx context.Context, username string) (apps.SSHInstanceTarget, error) {
	identity, _ := core.IdentityFrom(ctx)
	f.Subject, f.Username = identity.Subject, username
	f.mu.Lock()
	flip := f.flip
	f.mu.Unlock()
	if flip != nil {
		return apps.SSHInstanceTarget{}, flip
	}
	if f.Err != nil {
		return apps.SSHInstanceTarget{}, f.Err
	}
	if f.Target.ID != "" {
		return f.Target, nil
	}
	return apps.SSHInstanceTarget{
		ID: "srv-abcdeabcdeabcdeabcde-pod01", ServiceID: "srv-abcdeabcdeabcdeabcde",
		OwnerID: "tea-workspace", Namespace: "default", PodName: "web-rs-pod01", Container: core.AppContainer,
	}, nil
}

// FakeExecutor implements Executor. In TTY mode it reads two terminal sizes
// before writing output — both the native SSH and webshell suites depend on
// that contract to observe resize propagation.
//
// Execute runs on the gateway's connection goroutine, so what it records is
// read from a different goroutine than the one that writes it. The recorded
// state is therefore private behind mu, like FakeStore's above, and reached
// through Args/UsedTTY/TerminalSizes. A test that asserts on it must first
// wait for the exec to arrive: serveSession replies to the pty/exec/subsystem
// request BEFORE runExec calls the executor, so a client call returning is not
// evidence that Execute has run.
type FakeExecutor struct {
	Code    int
	Err     error
	Block   bool
	Started chan struct{}
	Stopped chan error

	mu      sync.Mutex
	invoked chan struct{}
	command []string
	tty     bool
	sizes   []remotecommand.TerminalSize
}

func (f *FakeExecutor) Execute(ctx context.Context, _ apps.SSHInstanceTarget, command []string, tty bool, queue remotecommand.TerminalSizeQueue, _ io.Reader, stdout, _ io.Writer) (int, error) {
	f.mu.Lock()
	f.command = append([]string(nil), command...)
	f.tty = tty
	f.mu.Unlock()
	f.markInvoked()
	if f.Started != nil {
		select {
		case f.Started <- struct{}{}:
		default:
		}
	}
	if f.Block {
		<-ctx.Done()
		if f.Stopped != nil {
			f.Stopped <- ctx.Err()
		}
		return 126, ctx.Err()
	}
	if tty {
		for range 2 {
			if size := queue.Next(); size != nil {
				f.mu.Lock()
				f.sizes = append(f.sizes, *size)
				f.mu.Unlock()
			}
		}
	}
	if f.Err == nil {
		_, _ = io.WriteString(stdout, "inside-app\n")
	}
	return f.Code, f.Err
}

// Args returns a copy of the argv the gateway last handed the executor, or nil
// when Execute has not been reached.
func (f *FakeExecutor) Args() []string {
	f.mu.Lock()
	defer f.mu.Unlock()
	return append([]string(nil), f.command...)
}

// UsedTTY reports whether the last exec asked for a TTY.
func (f *FakeExecutor) UsedTTY() bool {
	f.mu.Lock()
	defer f.mu.Unlock()
	return f.tty
}

// TerminalSizes returns a copy of the sizes the exec stream pulled off the
// resize queue.
func (f *FakeExecutor) TerminalSizes() []remotecommand.TerminalSize {
	f.mu.Lock()
	defer f.mu.Unlock()
	return append([]remotecommand.TerminalSize(nil), f.sizes...)
}

// WaitInvoked blocks until Execute has recorded an invocation, and reports
// whether it arrived within timeout. It is the happens-before edge an assertion
// on Args/UsedTTY needs when the client call it followed only proves the
// request was ACKNOWLEDGED — the subsystem and pty paths both reply first and
// exec after.
func (f *FakeExecutor) WaitInvoked(timeout time.Duration) bool {
	timer := time.NewTimer(timeout)
	defer timer.Stop()
	select {
	case <-f.invokedChan():
		return true
	case <-timer.C:
		return false
	}
}

// invokedChan returns the channel closed by the first Execute call, creating it
// on demand so a zero-value FakeExecutor stays usable.
func (f *FakeExecutor) invokedChan() chan struct{} {
	f.mu.Lock()
	defer f.mu.Unlock()
	if f.invoked == nil {
		f.invoked = make(chan struct{})
	}
	return f.invoked
}

func (f *FakeExecutor) markInvoked() {
	f.mu.Lock()
	defer f.mu.Unlock()
	if f.invoked == nil {
		f.invoked = make(chan struct{})
	}
	select {
	case <-f.invoked:
	default:
		close(f.invoked)
	}
}
