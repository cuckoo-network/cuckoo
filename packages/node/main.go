package main

import (
	"fmt"
	"github.com/cuckoo-network/cuckoo/packages/node/internal"
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

	onIngestionRetry := func(err error, dur time.Duration) {
		logger.WithError(err).Debug("could not run ingestion. Retrying")
	}

	nodeType := os.Getenv("NODE_TYPE")
	if nodeType != "COORDINATOR" {
		if err != nil {
			logger.WithError(err).Error("failed to new sd client")
		}
		worker.NewService(worker.Config{
			Logger:         logger,
			OnRunTaskRetry: onIngestionRetry,
		})
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "6387"
	}
	Addr := "0.0.0.0:" + port
	logger.WithFields(supportlog.F{
		"version": "config.Version",
		"commit":  "config.CommitHash",
		"addr":    Addr,
	}).Info("starting JSON RPC server")
	jsonRPCHandler := internal.NewJSONRPCHandler(internal.HandlerParams{
		Logger: logger,
	})
	httpHandler := supporthttp.NewAPIMux(logger)
	httpHandler.Handle("/", jsonRPCHandler)
	server := &http.Server{
		Addr:        Addr,
		Handler:     httpHandler,
		ReadTimeout: 25 * time.Second,
	}
	if err := server.ListenAndServe(); !errors.Is(err, http.ErrServerClosed) {
		// Error starting or closing listener:
		logger.WithError(err).Fatal("Cuckoo AI JSON RPC server encountered fatal error")
	}
}
