package store

// ByWeightDesc implements sort.Interface to sort by Weight in descending order
type ByWeightDesc []WalletWeight

// Len returns the number of elements in the collection
func (w ByWeightDesc) Len() int {
	return len(w)
}

// Less compares two elements to determine their order. In this case, descending by Weight
func (w ByWeightDesc) Less(i, j int) bool {
	// Comparing in descending order by Weight field
	return w[i].Weight.Cmp(w[j].Weight) > 0
}

// Swap swaps the positions of two elements
func (w ByWeightDesc) Swap(i, j int) {
	w[i], w[j] = w[j], w[i]
}
