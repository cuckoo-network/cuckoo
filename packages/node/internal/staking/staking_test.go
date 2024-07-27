package staking_test

import (
	"github.com/cuckoo-network/cuckoo/packages/node/internal/staking"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/stellar/go/support/log"
	"github.com/stretchr/testify/require"
	"math/big"
	"testing"
)

// TestStakes is a basic test to ensure the functionality of Stakes function
func TestStakes(t *testing.T) {
	t.Skipf("remote dependency")

	// Expected results
	numberStr := "1000000000000000000000000"

	// Create a new big.Int from the string
	expectedStake := new(big.Int)
	expectedStake.SetString(numberStr, 10)

	// Setting up
	stakerAddress := "0xFc4d0EBB074F2d664aEF0bbcc8Ea770253661908"

	// Test the Stakes function
	ethC, err := ethclient.Dial("rpcURL")
	s, err := staking.NewStaking(log.New(), ethC)
	stake, err := s.Stakes(stakerAddress)
	require.NoError(t, err)
	require.NotNil(t, stake)
	require.Equal(t, expectedStake.String(), stake.String())

	votes, err := s.VotersForStaker(stakerAddress)
	require.NoError(t, err)
	require.Equal(t, []string{
		"0xFc4d0EBB074F2d664aEF0bbcc8Ea770253661908",
		"0xfD1cC1b315458B112D7Fab7eF1bFeeADe47ED74c",
	}, votes)

	number2Str := "1020000000000000000000000"
	expected2Stake := new(big.Int)
	expected2Stake.SetString(number2Str, 10)
	total, err := s.TotalVotedStakes(stakerAddress)
	require.NoError(t, err)
	require.Equal(t, expected2Stake.String(), total.String())
}
