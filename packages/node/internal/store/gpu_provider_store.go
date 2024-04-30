package store

import (
	"errors"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/plugins"
	"sync"
	"time"
)

const (
	providerTTL = 1 * time.Minute
)

type GPUProviderStore struct {
	sync.RWMutex
	store map[string]*plugins.GPUProvider
}

func NewGPUProviderStore() *GPUProviderStore {
	return &GPUProviderStore{
		store: make(map[string]*plugins.GPUProvider),
	}
}

// Create adds a new GPUProvider to the store
func (s *GPUProviderStore) Create(provider *plugins.GPUProvider) error {
	s.Lock()
	defer s.Unlock()

	if _, exists := s.store[provider.WalletAddress]; exists {
		return errors.New("provider already exists")
	}

	provider.CreatedAt = time.Now()
	provider.UpdatedAt = provider.CreatedAt
	s.store[provider.WalletAddress] = provider
	return nil
}

// Read retrieves a GPUProvider by walletAddress
func (s *GPUProviderStore) Read(walletAddress string) (*plugins.GPUProvider, error) {
	s.RLock()
	defer s.RUnlock()

	if provider, exists := s.store[walletAddress]; exists {
		return provider, nil
	}
	return nil, errors.New("provider not found")
}

// Update modifies an existing GPUProvider in the store
func (s *GPUProviderStore) Update(walletAddress string, provider *plugins.GPUProvider) error {
	s.Lock()
	defer s.Unlock()

	if _, exists := s.store[walletAddress]; !exists {
		return errors.New("provider not found")
	}

	provider.UpdatedAt = time.Now()
	s.store[walletAddress] = provider
	return nil
}

// Delete removes a GPUProvider from the store
func (s *GPUProviderStore) Delete(walletAddress string) error {
	s.Lock()
	defer s.Unlock()

	if _, exists := s.store[walletAddress]; !exists {
		return errors.New("provider not found")
	}

	delete(s.store, walletAddress)
	return nil
}

func (s *GPUProviderStore) CleanupOutdatedProviders() {
	s.Lock() // Ensure exclusive access to the store
	defer s.Unlock()

	now := time.Now()
	for walletAddress, provider := range s.store {
		// If the provider's UpdatedAt time plus the TTL is before the current time, it's outdated
		if now.Sub(provider.UpdatedAt) > providerTTL {
			delete(s.store, walletAddress)
		}
	}
}

func (s *GPUProviderStore) ListAllProviders() []*plugins.GPUProvider {
	s.CleanupOutdatedProviders()

	s.RLock() // Use RLock to allow concurrent reads
	defer s.RUnlock()

	var providers []*plugins.GPUProvider
	for _, provider := range s.store {
		providers = append(providers, provider)
	}

	return providers
}
func (s *GPUProviderStore) Upsert(provider *plugins.GPUProvider) error {
	s.Lock()
	defer s.Unlock()

	existingProvider, exists := s.store[provider.WalletAddress]
	if exists {
		// If the provider exists, update existing fields but preserve the CreatedAt timestamp
		provider.CreatedAt = existingProvider.CreatedAt
		provider.UpdatedAt = time.Now()
	} else {
		// If the provider does not exist, set both CreatedAt and UpdatedAt to now
		now := time.Now()
		provider.CreatedAt = now
		provider.UpdatedAt = now
	}

	s.store[provider.WalletAddress] = provider
	return nil
}
