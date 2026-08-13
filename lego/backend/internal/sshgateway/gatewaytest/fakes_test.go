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

package gatewaytest

import (
	"context"
	"io"
	"testing"
	"time"

	"k8s.io/client-go/tools/remotecommand"

	"github.com/bex-co/bex/lego/backend/internal/apps"
)

// sizeQueue serves a fixed list of terminal sizes and then blocks forever, the
// contract remotecommand expects of a resize queue.
type sizeQueue struct {
	sizes []remotecommand.TerminalSize
	done  chan struct{}
}

func (q *sizeQueue) Next() *remotecommand.TerminalSize {
	if len(q.sizes) == 0 {
		<-q.done
		return nil
	}
	size := q.sizes[0]
	q.sizes = q.sizes[1:]
	return &size
}

// execAsGateway calls Execute the way the gateway does: on another goroutine,
// after the request that triggered it has already been acknowledged.
func execAsGateway(t *testing.T, exec *FakeExecutor, command []string, tty bool, queue remotecommand.TerminalSizeQueue) {
	t.Helper()
	go func() {
		_, _ = exec.Execute(context.Background(), apps.SSHInstanceTarget{}, command, tty, queue, nil, io.Discard, io.Discard)
	}()
}

// The gateway ACKs a pty/exec/subsystem request before runExec reaches the
// executor, so a test that asserts on the recorded argv has to wait for the
// exec itself. WaitInvoked is that edge: after it returns true the argv is
// fully recorded, never a partially written or nil slice.
func TestFakeExecutorWaitInvokedPrecedesRecordedArgs(t *testing.T) {
	exec := &FakeExecutor{}
	want := []string{"/bin/sh", "-c", `cd "${HOME:-/home/bex}" && exec /usr/lib/openssh/sftp-server`}
	execAsGateway(t, exec, want, false, nil)

	if !exec.WaitInvoked(2 * time.Second) {
		t.Fatal("WaitInvoked did not observe the exec")
	}
	argv := exec.Args()
	if len(argv) != len(want) {
		t.Fatalf("argv = %#v, want %#v", argv, want)
	}
	for i := range want {
		if argv[i] != want[i] {
			t.Fatalf("argv = %#v, want %#v", argv, want)
		}
	}
}

// The null case: with no exec at all, WaitInvoked reports the miss instead of
// letting an assertion run against unrecorded state.
func TestFakeExecutorWaitInvokedReportsNoExec(t *testing.T) {
	exec := &FakeExecutor{}
	if exec.WaitInvoked(50 * time.Millisecond) {
		t.Fatal("WaitInvoked reported an exec that never happened")
	}
	if argv := exec.Args(); argv != nil {
		t.Fatalf("argv = %#v, want nil before any exec", argv)
	}
	if exec.UsedTTY() {
		t.Fatal("UsedTTY reported a TTY before any exec")
	}
}

// A second exec over the same connection must not re-arm or block WaitInvoked.
func TestFakeExecutorWaitInvokedStaysSatisfiedAcrossExecs(t *testing.T) {
	exec := &FakeExecutor{}
	execAsGateway(t, exec, []string{"/bin/sh", "-lc", "first"}, false, nil)
	if !exec.WaitInvoked(2 * time.Second) {
		t.Fatal("WaitInvoked did not observe the first exec")
	}
	execAsGateway(t, exec, []string{"/bin/sh", "-lc", "second"}, false, nil)
	if !exec.WaitInvoked(2 * time.Second) {
		t.Fatal("WaitInvoked stopped reporting after a second exec")
	}
}

// TTY mode records the sizes it pulled off the resize queue, and the accessors
// hand back copies so a caller cannot mutate the fake's state.
func TestFakeExecutorRecordsTTYSizesAndReturnsCopies(t *testing.T) {
	exec := &FakeExecutor{}
	queue := &sizeQueue{sizes: []remotecommand.TerminalSize{{Width: 80, Height: 24}, {Width: 120, Height: 40}}}
	execAsGateway(t, exec, []string{"/bin/sh"}, true, queue)
	if !exec.WaitInvoked(2 * time.Second) {
		t.Fatal("WaitInvoked did not observe the exec")
	}
	deadline := time.Now().Add(2 * time.Second)
	var sizes []remotecommand.TerminalSize
	for time.Now().Before(deadline) {
		if sizes = exec.TerminalSizes(); len(sizes) == 2 {
			break
		}
		time.Sleep(5 * time.Millisecond)
	}
	if len(sizes) != 2 || sizes[0].Width != 80 || sizes[1].Width != 120 {
		t.Fatalf("terminal sizes = %+v, want widths 80 then 120", sizes)
	}
	if !exec.UsedTTY() {
		t.Fatal("UsedTTY = false, want true for a pty exec")
	}

	sizes[0].Width = 1
	if again := exec.TerminalSizes(); again[0].Width != 80 {
		t.Fatalf("TerminalSizes handed out its own slice: width now %d", again[0].Width)
	}
	argv := exec.Args()
	argv[0] = "tampered"
	if again := exec.Args(); again[0] != "/bin/sh" {
		t.Fatalf("Args handed out its own slice: argv now %#v", again)
	}
}
