package util

import "math/big"

func NewBigIntFromString(s string) *big.Int {
	bigInt := new(big.Int)
	if _, ok := bigInt.SetString(s, 10); !ok {
		return big.NewInt(0)
	}
	return bigInt
}
