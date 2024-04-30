package network

import (
	"context"
	"github.com/go-errors/errors"
	"github.com/stellar/go/support/log"
	"net/http"
	"sync/atomic"

	"github.com/creachadair/jrpc2"
)

const RequestBacklogQueueNoLimit = maxUint

// The gauge is a subset of prometheus.Gauge, and it allows us to mock the
// gauge usage for testing purposes without requiring the implementation of the true
// prometheus.Gauge.
type gauge interface {
	Inc()
	Dec()
}

type backlogQLimiter struct {
	limit        uint64
	pending      uint64
	gauge        gauge
	limitReached uint64
	logger       *log.Entry
}

type backlogHTTPQLimiter struct {
	httpDownstreamHandler http.Handler
	backlogQLimiter
}

func MakeHTTPBacklogQueueLimiter(downstream http.Handler, gauge gauge, limit uint64, logger *log.Entry) *backlogHTTPQLimiter {
	return &backlogHTTPQLimiter{
		httpDownstreamHandler: downstream,
		backlogQLimiter: backlogQLimiter{
			limit:  limit,
			gauge:  gauge,
			logger: logger,
		},
	}
}

type backlogJrpcQLimiter struct {
	jrpcDownstreamHandler jrpc2.Handler
	backlogQLimiter
}

func MakeJrpcBacklogQueueLimiter(downstream jrpc2.Handler, gauge gauge, limit uint64, logger *log.Entry) *backlogJrpcQLimiter {
	return &backlogJrpcQLimiter{
		jrpcDownstreamHandler: downstream,
		backlogQLimiter: backlogQLimiter{
			limit:  limit,
			gauge:  gauge,
			logger: logger,
		},
	}
}

func (q *backlogHTTPQLimiter) ServeHTTP(res http.ResponseWriter, req *http.Request) {
	if q.limit == RequestBacklogQueueNoLimit {
		// if specified max duration, pass-through
		q.httpDownstreamHandler.ServeHTTP(res, req)
		return
	}
	if newPending := atomic.AddUint64(&q.pending, 1); newPending > q.limit {
		// we've reached our queue limit - let the caller know we're too busy.
		atomic.AddUint64(&q.pending, ^uint64(0))
		res.WriteHeader(http.StatusServiceUnavailable)
		if atomic.CompareAndSwapUint64(&q.limitReached, 0, 1) {
			// if the limit was reached, log a message.
			if q.logger != nil {
				q.logger.Infof("Backlog queue limiter reached the queue limit of %d executing concurrent http requests.", q.limit)
			}
		}
		return
	} else {
		if q.gauge != nil {
			q.gauge.Inc()
		}
	}
	defer func() {

		atomic.AddUint64(&q.pending, ^uint64(0))
		if q.gauge != nil {
			q.gauge.Dec()
		}
		atomic.StoreUint64(&q.limitReached, 0)
	}()

	q.httpDownstreamHandler.ServeHTTP(res, req)
}

func (q *backlogJrpcQLimiter) Handle(ctx context.Context, req *jrpc2.Request) (interface{}, error) {
	if q.limit == RequestBacklogQueueNoLimit {
		// if specified max duration, pass-through
		return q.jrpcDownstreamHandler(ctx, req)
	}

	if newPending := atomic.AddUint64(&q.pending, 1); newPending > q.limit {
		// we've reached our queue limit - let the caller know we're too busy.
		atomic.AddUint64(&q.pending, ^uint64(0))
		if atomic.CompareAndSwapUint64(&q.limitReached, 0, 1) {
			// if the limit was reached, log a message.
			if q.logger != nil {
				q.logger.Infof("Backlog queue limiter reached the queue limit of %d executing concurrent rpc %s requests.", q.limit, req.Method())
			}
		}
		return nil, errors.Errorf("rpc queue for %s surpassed queue limit of %d requests", req.Method(), q.limit)
	} else {
		if q.gauge != nil {
			q.gauge.Inc()
		}
	}

	defer func() {
		atomic.AddUint64(&q.pending, ^uint64(0))
		if q.gauge != nil {
			q.gauge.Dec()
		}
		atomic.StoreUint64(&q.limitReached, 0)
	}()

	return q.jrpcDownstreamHandler(ctx, req)
}
