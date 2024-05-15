.PHONY: dev
dev:
	go run *.go

.PHONY: build
build:
	go build -tags netgo -ldflags '-s -w' -o app

.PHONY: test
test:
ifdef f
	go test -v -run $(f) ./...
else
	go test -v ./...
endif


.PHONY: codegen
codegen:
	# oapi-codegen --generate types,client -package gen internal/plugins/sd/sdcli/gen/sd-openapi.json > internal/plugins/sd/sdcli/gen/sdcli.gen.go
	oapi-codegen --generate types,client -package gen internal/nodecli/gen/node-openapi.json > internal/nodecli/gen/nodecli.gen.go

