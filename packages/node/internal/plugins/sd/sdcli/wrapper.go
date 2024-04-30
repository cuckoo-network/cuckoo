package sdcli

import (
	"context"
	"encoding/json"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins/sd/sdcli/gen"
	"github.com/stellar/go/support/errors"
	"io"
	"time"
)

type ClientWrapper struct {
	inner *gen.Client
}

func New(url string) (*ClientWrapper, error) {
	w := &ClientWrapper{}
	cli, err := gen.NewClient(url)
	if err != nil {
		return nil, err
	}
	w.inner = cli
	return w, nil
}

func (c ClientWrapper) Text2Image(ctx context.Context, req *gen.Text2imgapiSdapiV1Txt2imgPostJSONRequestBody) (*Text2imgapiSdapiV1Txt2imgPostResponse, error) {
	res, err := c.inner.Text2imgapiSdapiV1Txt2imgPost(ctx, *req)
	if err != nil {
		return nil, errors.Wrap(err, "failed to Text2imgapiSdapiV1Txt2imgPost")
	}

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, errors.Wrap(err, "failed to ReadAll for Text2imgapiSdapiV1Txt2imgPost response")
	}
	defer res.Body.Close() // Always remember to close the body
	var data Text2imgapiSdapiV1Txt2imgPostResponse
	if err := json.Unmarshal(body, &data); err != nil {
		return nil, errors.Wrap(err, "failed to unmarshal Text2imgapiSdapiV1Txt2imgPostResponse")
	}

	return &data, nil
}

func (c ClientWrapper) SysInfo(ctx context.Context) (*SystemInfo, error) {
	res, err := c.inner.DownloadSysinfoInternalSysinfoGet(ctx, &gen.DownloadSysinfoInternalSysinfoGetParams{})
	if err != nil {
		return nil, errors.Wrap(err, "failed to DownloadSysinfoInternalSysinfoGet")
	}

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, errors.Wrap(err, "failed to ReadAll for DownloadSysinfoInternalSysinfoGet response")
	}
	defer res.Body.Close()
	var data SystemInfo
	if err := json.Unmarshal(body, &data); err != nil {
		return nil, errors.Wrap(err, "failed to unmarshal SystemInfo")
	}

	return &data, nil
}

func (c ClientWrapper) Ping(ctx context.Context) error {
	// Create a context that automatically cancels after 1 second
	ctxWithTimeout, cancel := context.WithTimeout(ctx, 1*time.Second)
	defer cancel() // Ensure the context cancellation is called to free resources

	// Use ctxWithTimeout instead of ctx for the request to enforce the timeout
	_, err := c.inner.LambdaInternalPingGet(ctxWithTimeout)
	if err != nil {
		return errors.Wrap(err, "failed to Ping")
	}
	return nil
}

func (c ClientWrapper) QueueStatus(ctx context.Context) (*EstimationData, error) {
	res, err := c.inner.GetQueueStatusQueueStatusGet(ctx)
	if err != nil {
		return nil, errors.Wrap(err, "failed to GetQueueStatusQueueStatusGet")
	}

	body, err := io.ReadAll(res.Body)
	if err != nil {
		return nil, errors.Wrap(err, "failed to ReadAll for GetQueueStatusQueueStatusGet response")
	}
	defer res.Body.Close()
	var data EstimationData
	if err := json.Unmarshal(body, &data); err != nil {
		return nil, errors.Wrap(err, "failed to unmarshal EstimationData")
	}

	return &data, nil
}
