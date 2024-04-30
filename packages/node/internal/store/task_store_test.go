package store_test

import (
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/stretchr/testify/require"
	"math/big"
	"testing"
	"time"

	"github.com/cuckoo-network/cuckoo/packages/node/internal/store"
)

func TestGetPendingTasksByWeights(t *testing.T) {
	// Setup in-memory store with mock data
	s := store.NewInMemoryTaskStore() // Ensure this constructor is available and public

	// Adding mock task offers
	task1 := &store.TaskOffer{Id: "task1", Status: store.Pending, CoinSymbol: plugins.SD, MaxOfferPrice: big.NewInt(100), CreatedAt: time.Now()}
	task2 := &store.TaskOffer{Id: "task2", Status: store.Pending, CoinSymbol: plugins.SD, MaxOfferPrice: big.NewInt(200), CreatedAt: time.Now()}
	task3 := &store.TaskOffer{Id: "task3", Status: store.Pending, CoinSymbol: plugins.SD, MaxOfferPrice: big.NewInt(300), CreatedAt: time.Now()}
	task4 := &store.TaskOffer{Id: "task4", Status: store.Pending, CoinSymbol: plugins.SD, MaxOfferPrice: big.NewInt(400), CreatedAt: time.Now()}

	s.Create(task1)
	s.Create(task2)
	s.Create(task3)
	s.Create(task4)
	walletAddress1 := "wallet1"
	walletAddress2 := "wallet2"

	// Define weights and wallet address
	weights := []store.WalletWeight{
		{WalletAddress: walletAddress1, Weight: big.NewInt(1)},
		{WalletAddress: walletAddress2, Weight: big.NewInt(3)},
	}

	// Run the method
	resultTasks1 := s.GetPendingTasksByWeights(weights, walletAddress1)
	resultTasks2 := s.GetPendingTasksByWeights(weights, walletAddress2)

	require.Equal(t, true, len(resultTasks1)+len(resultTasks2) >= 4)

	uniqueTasks := make(map[string]bool)
	for _, task := range resultTasks1 {
		uniqueTasks[task.Id] = true
	}
	for _, task := range resultTasks2 {
		uniqueTasks[task.Id] = true
	}

	// Assert that the number of unique tasks equals 3
	require.Equal(t, 4, len(uniqueTasks), "The number of total unique tasks should be 4")
}

func TestGetPendingTasksByWeightsOneTaskTwoWorkers(t *testing.T) {
	// Setup in-memory store with mock data
	s := store.NewInMemoryTaskStore() // Ensure this constructor is available and public

	// Adding mock task offers
	task1 := &store.TaskOffer{Id: "VHn9nAvmHastotANYdJ8kiF6VBR2", Status: store.Pending, CoinSymbol: plugins.SD, MaxOfferPrice: big.NewInt(100), CreatedAt: time.Now()}

	s.Create(task1)
	walletAddress1 := "wallet1"
	walletAddress2 := "wallet2"

	// Define weights and wallet address
	weights := []store.WalletWeight{
		{WalletAddress: walletAddress1, Weight: big.NewInt(1)},
		{WalletAddress: walletAddress2, Weight: big.NewInt(3)},
	}

	// Run the method
	resultTasks1 := s.GetPendingTasksByWeights(weights, walletAddress1)
	resultTasks2 := s.GetPendingTasksByWeights(weights, walletAddress2)

	require.Equal(t, true, len(resultTasks1)+len(resultTasks2) >= 1)

	uniqueTasks := make(map[string]bool)
	for _, task := range resultTasks1 {
		uniqueTasks[task.Id] = true
	}
	for _, task := range resultTasks2 {
		uniqueTasks[task.Id] = true
	}

	// Assert that the number of unique tasks equals 3
	require.Equal(t, 1, len(uniqueTasks), "The number of total unique tasks should be 1")
}
