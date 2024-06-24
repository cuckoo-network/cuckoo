package util

import (
	nanoid "github.com/matoous/go-nanoid/v2"
)

func NID() string {
	id, _ := nanoid.Generate("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz", 21)
	return id
}

func TaskID() string {
	return "task_" + NID()
}
