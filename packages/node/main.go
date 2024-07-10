package main

import (
	"fmt"
	"github.com/cuckoo-network/cuckoo/packages/node/internal"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/methods"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/util"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/worker"
	"github.com/go-errors/errors"
	"github.com/joho/godotenv"
	"github.com/sirupsen/logrus"
	supporthttp "github.com/stellar/go/support/http"
	supportlog "github.com/stellar/go/support/log"
	"net/http"
	"os"
	"time"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
	}

	logger := supportlog.New()
	logger.SetLevel(logrus.InfoLevel)

	util.KeyGenIfNeeded(logger)

	onIngestionRetry := func(err error, dur time.Duration) {
		logger.WithError(err).Debug("could not run ingestion. Retrying")
	}

	wks := worker.NewService(worker.Config{
		Logger:         logger,
		OnRunTaskRetry: onIngestionRetry,
	})
	nodeType := os.Getenv("NODE_TYPE")
	if nodeType != "COORDINATOR" {
		if err != nil {
			logger.WithError(err).Error("failed to new sd client")
		}
		wks.StartPolling()
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "6387"
	}
	addr := "0.0.0.0:" + port
	walletAddress, _ := util.WalletAddress()
	logger.WithFields(supportlog.F{
		"version": "config.Version",
		"commit":  "config.CommitHash",
		"addr":    addr,
	}).Info("starting JSON RPC server with " + walletAddress)
	taskStore := store.NewInMemoryTaskStore()
	jsonRPCHandler := internal.NewJSONRPCHandler(internal.HandlerParams{
		Logger:    logger,
		TaskStore: taskStore,
		Worker:    wks.Worker,
	})
	httpHandler := supporthttp.NewAPIMux(logger)
	httpHandler.Handle("/task/*", methods.OfferTaskHandler(taskStore))
	httpHandler.Handle("/", jsonRPCHandler)
	server := &http.Server{
		Addr:        addr,
		Handler:     httpHandler,
		ReadTimeout: 25 * time.Second,
	}
	if err := server.ListenAndServe(); !errors.Is(err, http.ErrServerClosed) {
		// Error starting or closing listener:
		logger.WithError(err).Fatal("Cuckoo AI JSON RPC server encountered fatal error")
	}
}
