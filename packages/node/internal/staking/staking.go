package staking

import (
	"github.com/ethereum/go-ethereum/accounts/abi/bind"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/stellar/go/support/log"
	"math/big"
	"sync"
	"time"
)

type cacheEntry struct {
	value     *big.Int
	expiresAt time.Time
}

type Staking struct {
	client          *ethclient.Client
	stakingContract *bind.BoundContract
	votingContract  *bind.BoundContract
	logger          *log.Entry
	cache           map[string]cacheEntry
	cacheLock       sync.Mutex
}

func NewStaking(logger *log.Entry, client *ethclient.Client) (*Staking, error) {
	stakingContract, err := stakingContract(client)
	if err != nil {
		return nil, err
	}

	votingContract, err := votingContract(client)
	if err != nil {
		return nil, err
	}

	return &Staking{
		client:          client,
		stakingContract: stakingContract,
		votingContract:  votingContract,
		logger:          logger,
		cache:           make(map[string]cacheEntry),
	}, nil
}

func (s *Staking) TotalVotedStakes(votee string) (big.Int, error) {
	sum := *big.NewInt(0)
	voters, err := s.VotersForStaker(votee)

	if err != nil {
		s.logger.WithError(err).Error("failed to get stakes for " + votee)
		return sum, err
	}

	for _, it := range voters {
		stakes, err := s.Stakes(it)
		if err != nil {
			s.logger.WithError(err).Error("failed to get stakes for " + it)

		}
		sum.Add(&sum, &stakes)
	}

	return sum, nil
}

var votesTTL = 30 * time.Minute

func (s *Staking) TotalVotedStakesCached(votee string) (*big.Int, error) {
	s.cacheLock.Lock()
	defer s.cacheLock.Unlock()

	// Check if the cache contains the value and it's not expired
	if entry, found := s.cache[votee]; found && time.Now().Before(entry.expiresAt) {
		s.logger.Debugf("Cache hit for votee: %s", votee)
		return entry.value, nil
	}

	// Cache miss or entry expired, fetch the fresh value
	value, err := s.TotalVotedStakes(votee)
	if err != nil {
		return big.NewInt(0), err
	}

	// Update the cache with the new value and set the expiration time
	s.cache[votee] = cacheEntry{
		value:     &value,
		expiresAt: time.Now().Add(votesTTL),
	}

	s.logger.Infof("Cache updated for votee: %s", votee)
	return &value, nil
}
