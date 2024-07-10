package rewards

import (
	"encoding/json"
	"github.com/cuckoo-network/cuckoo/packages/node/internal/util"
	"io/ioutil"
	"log"
	"net/http"
	"time"
)

type Transaction struct {
	Timestamp string `json:"timestamp"`
	To        struct {
		Hash string `json:"hash"`
	} `json:"to"`
	Value string `json:"value"`
}

type Response struct {
	Items []Transaction `json:"items"`
}

func DistributedAddresses() map[string]bool {
	walletAddress, _ := util.WalletAddress()

	// URL to fetch transactions from
	url := "https://scan.cuckoo.network/api/v2/addresses/" + walletAddress + "/transactions?filter=from"

	// Make the GET request
	resp, err := http.Get(url)
	if err != nil {
		log.Fatalf("Failed to make GET request: %v", err)
	}
	defer resp.Body.Close()

	// Read the response body
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalf("Failed to read response body: %v", err)
	}

	// Parse the JSON response
	var response Response
	if err := json.Unmarshal(body, &response); err != nil {
		log.Fatalf("Failed to unmarshal JSON response: %v", err)
	}

	// Get the current time
	now := time.Now()
	// Define the time 24 hours ago with 10-min grace window
	twentyFourHoursAgo := now.Add(-24 * time.Hour).Add(10 * time.Minute)

	// Create a map to store the recipient addresses
	recipientAddresses := make(map[string]bool)

	// Filter transactions within the last 24 hours
	for _, item := range response.Items {
		// Parse the timestamp
		timestamp, err := time.Parse(time.RFC3339, item.Timestamp)
		if err != nil {
			log.Printf("Failed to parse timestamp: %v", err)
			continue
		}

		// Check if the transaction is within the last 24 hours
		if timestamp.After(twentyFourHoursAgo) {
			// Add the recipient address to the map
			recipientAddresses[item.To.Hash] = true
		}
	}

	return recipientAddresses
}
