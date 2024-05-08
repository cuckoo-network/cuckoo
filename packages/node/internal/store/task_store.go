package store

import (
	"crypto/sha256"
	"encoding/binary"
	"encoding/json"
	"fmt"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"github.com/stellar/go/support/errors"
	"math/big"
	"sort"
	"sync"
	"time"
)

// TaskStatus represents the status of an image generation task.
type TaskStatus int

const (
	// Define task statuses using iota for auto-incrementing.
	Unknown TaskStatus = iota
	Pending
	InProgress
	Completed
	Failed
)

const (
	TaskTTL = 5 * time.Minute
)

// String returns the string representation of the TaskStatus.
func (ts TaskStatus) String() string {
	switch ts {
	case Pending:
		return "Pending"
	case InProgress:
		return "InProgress"
	case Completed:
		return "Completed"
	case Failed:
		return "Failed"
	default:
		return "Unknown"
	}
}

// TaskStatusFromString converts a string to a TaskStatus.
func TaskStatusFromString(s string) (TaskStatus, error) {
	switch s {
	case "Pending":
		return Pending, nil
	case "InProgress":
		return InProgress, nil
	case "Completed":
		return Completed, nil
	case "Failed":
		return Failed, nil
	default:
		// Return a default value and an error if the string does not match.
		// You might choose to return a zero value of TaskStatus instead of TaskStatus(0), depending on your use case.
		return TaskStatus(0), fmt.Errorf("invalid TaskStatus: %s", s)
	}
}

type TaskResult struct {
	Id      string          `json:"id"`
	Payload json.RawMessage `json:"payload"`
	Status  TaskStatus      `json:"status"`
}

func (result TaskResult) MarshalJSON() ([]byte, error) {
	type Alias TaskResult // Create an alias to avoid recursion
	return json.Marshal(&struct {
		Status string `json:"status"`
		*Alias
	}{
		Status: result.Status.String(), // Convert TaskStatus to its string representation
		Alias:  (*Alias)(&result),
	})
}

func (result *TaskResult) UnmarshalJSON(data []byte) error {
	type Alias TaskResult // Avoid recursion
	aux := &struct {
		Status string `json:"status"`
		*Alias
	}{
		Alias: (*Alias)(result),
	}
	if err := json.Unmarshal(data, aux); err != nil {
		return err
	}

	// Convert the status from string back to TaskStatus
	status, err := TaskStatusFromString(aux.Status)
	if err != nil {
		return err
	}
	result.Status = status

	return nil
}

type TaskOffer struct {
	Id                string               `json:"id"`
	Status            TaskStatus           `json:"status"` // Custom marshaling to be implemented
	CoinSymbol        plugins.CoinSymbol   `json:"coinSymbol"`
	MaxOfferPrice     *big.Int             `json:"maxOfferPrice"` // Custom marshaling to be implemented
	CreatedAt         time.Time            `json:"createdAt"`
	ResultPayloadChan chan json.RawMessage `json:"-"` // Omitted from JSON

	Payload json.RawMessage `json:"payload"`
}

// Custom JSON marshaling for TaskOffer
func (t TaskOffer) MarshalJSON() ([]byte, error) {
	type Alias TaskOffer // Create an alias to avoid recursion
	return json.Marshal(&struct {
		Status        string `json:"status"`
		CoinSymbol    string `json:"coinSymbol"`
		MaxOfferPrice string `json:"maxOfferPrice"`
		*Alias
	}{
		Status:        t.Status.String(),
		CoinSymbol:    t.CoinSymbol.String(), // Convert CoinSymbol to string
		MaxOfferPrice: t.MaxOfferPrice.String(),
		Alias:         (*Alias)(&t),
	})
}

// Custom JSON unmarshaling for TaskOffer
func (t *TaskOffer) UnmarshalJSON(data []byte) error {
	type Alias TaskOffer
	aux := &struct {
		Status        string `json:"status"`
		CoinSymbol    string `json:"coinSymbol"`
		MaxOfferPrice string `json:"maxOfferPrice"`
		*Alias
	}{
		Alias: (*Alias)(t),
	}
	if err := json.Unmarshal(data, aux); err != nil {
		return err
	}

	// Convert MaxOfferPrice from string to *big.Int
	var ok bool
	t.MaxOfferPrice, ok = big.NewInt(0).SetString(aux.MaxOfferPrice, 10)
	if !ok {
		return errors.New("invalid MaxOfferPrice format")
	}

	// Convert Status from string to TaskStatus
	var err error
	t.Status, err = TaskStatusFromString(aux.Status)
	if err != nil {
		return errors.Errorf("invalid TaskStatus format: %s", aux.Status)
	}

	// Convert CoinSymbol from string to CoinSymbol
	t.CoinSymbol = plugins.CoinSymbolFromString(aux.CoinSymbol)

	return nil
}

type InMemoryTaskStore struct {
	sync.RWMutex
	tasks map[string]*TaskOffer
}

func NewInMemoryTaskStore() *InMemoryTaskStore {
	return &InMemoryTaskStore{
		tasks: make(map[string]*TaskOffer),
	}
}

// Create adds a new task to the store
func (store *InMemoryTaskStore) Create(task *TaskOffer) {
	store.Lock()
	defer store.Unlock()
	store.tasks[task.Id] = task
}

// Read retrieves a task by id
func (store *InMemoryTaskStore) Read(id string) (*TaskOffer, error) {
	store.RLock()
	defer store.RUnlock()
	if task, exists := store.tasks[id]; exists {
		return task, nil
	}
	return nil, errors.New("task not found")
}

// Update modifies an existing task in the store
func (store *InMemoryTaskStore) Update(task *TaskOffer) error {
	store.Lock()
	defer store.Unlock()
	if _, exists := store.tasks[task.Id]; exists {
		store.tasks[task.Id] = task
		return nil
	}
	return errors.New("task not found for update")
}

// Delete removes a task from the store
func (store *InMemoryTaskStore) Delete(id string) error {
	store.Lock()
	defer store.Unlock()
	if _, exists := store.tasks[id]; exists {
		delete(store.tasks, id)
		return nil
	}
	return errors.New("task not found for deletion")
}

// GetAllPendingTasks returns all tasks that have a status of Pending.
func (store *InMemoryTaskStore) GetAllPendingTasks() []*TaskOffer {
	store.CleanupOutdatedTasks()

	store.RLock() // Use RLock() to allow concurrent reads
	defer store.RUnlock()

	var pendingTasks []*TaskOffer
	for _, task := range store.tasks {
		if task.Status == Pending {
			pendingTasks = append(pendingTasks, task)
		}
	}

	return pendingTasks
}

func (store *InMemoryTaskStore) GetPendingTasksByWeights(weights []WalletWeight, walletAddress string) []*TaskOffer {
	// sort weights
	sort.Sort(ByWeightDesc(weights))

	// get offers from store
	offers := store.GetAllPendingTasks()
	total := totalWeight(weights)
	// TODO: what if no weight at all? just return all tasks for now
	if total.Cmp(big.NewInt(0)) == 0 {
		return offers
	}

	// Sort offers deterministically based on hash of (walletAddress + offer ID)
	sort.SliceStable(offers, func(i, j int) bool {
		hashI := sha256.Sum256([]byte(offers[i].Id))
		hashJ := sha256.Sum256([]byte(offers[j].Id))
		return binary.BigEndian.Uint64(hashI[:]) < binary.BigEndian.Uint64(hashJ[:])
	})

	accumulatedWeight, walletWeight := findWeight(walletAddress, weights)

	// Calculate the number of tasks to assign based on the total number of offers
	numTasks := new(big.Int).Mul(big.NewInt(int64(len(offers))), walletWeight)
	remainder := new(big.Int).Mod(numTasks, total)
	numTasks.Div(numTasks, total)
	if remainder.Cmp(big.NewInt(0)) > 0 {
		numTasks.Add(numTasks, big.NewInt(1))
	}

	startingIndex := new(big.Int).Mul(big.NewInt(int64(len(offers))), accumulatedWeight)
	remainder2 := new(big.Int).Mod(startingIndex, total)
	startingIndex.Div(startingIndex, total)
	if remainder2.Cmp(big.NewInt(0)) > 0 {
		startingIndex.Add(startingIndex, big.NewInt(1))
	}

	// Assign the computed number of tasks to the wallet address
	taskCount := numTasks.Int64()
	if taskCount > int64(len(offers)) {
		taskCount = int64(len(offers))
	}

	startingIndexInt := startingIndex.Int64()
	if startingIndexInt > int64(len(offers)) {
		startingIndexInt = int64(len(offers))
	}
	endingIndex := startingIndexInt + taskCount
	if endingIndex > int64(len(offers)) {
		endingIndex = int64(len(offers))
	}

	return offers[startingIndexInt:endingIndex]
}

// CleanupOutdatedTasks removes tasks that are older than the TTL.
func (store *InMemoryTaskStore) CleanupOutdatedTasks() {
	store.Lock()
	defer store.Unlock()

	now := time.Now()
	for id, task := range store.tasks {
		if now.Sub(task.CreatedAt) > TaskTTL {
			delete(store.tasks, id)
		}
	}
}

// Helper function to compute the total weight of all wallets
func totalWeight(weights []WalletWeight) *big.Int {
	total := big.NewInt(0)
	for _, w := range weights {
		total.Add(total, w.Weight)
	}
	return total
}

// returns accumulated weights and found item's weight
func findWeight(walletAddress string, weights []WalletWeight) (*big.Int, *big.Int) {
	accu := big.NewInt(0)
	for _, w := range weights {
		if w.WalletAddress == walletAddress {
			return accu, w.Weight
		}
		accu.Add(accu, w.Weight)
	}
	return accu, big.NewInt(0) // Return 0 if the wallet address is not found
}

type WalletWeight struct {
	WalletAddress string
	Weight        *big.Int
}
