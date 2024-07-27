package util

func StringArrayFilter(slice []string, predicate func(string) bool) []string {
	var result []string
	for _, v := range slice {
		if predicate(v) {
			result = append(result, v)
		}
	}
	return result
}

func StringArrayContains(slice []string, item string) bool {
	for _, v := range slice {
		if v == item {
			return true
		}
	}
	return false
}
