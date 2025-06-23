# Cuckoo Node

This Go service powers the Cuckoo AI network. It exposes a JSON-RPC API and interacts with the coordinator node.

## Requirements

- Go 1.22 or later

## Setup

Copy the example environment file and adjust values before running:

```sh
cp .env.example .env
```

## Development

Run the node locally:

```sh
go run .
```

### Build

```sh
go build -tags netgo -ldflags '-s -w' -o app
```

### Testing

```sh
go test ./...
```
