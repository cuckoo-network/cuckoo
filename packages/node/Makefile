.PHONY: dev
dev:
	go run *.go

.PHONY: test
test:
	go test -v ./...

.PHONY: codegen
codegen:
	# oapi-codegen --generate types,client -package gen internal/plugins/sd/sdcli/gen/sd-openapi.json > internal/plugins/sd/sdcli/gen/sdcli.gen.go
	oapi-codegen --generate types,client -package gen internal/nodecli/gen/node-openapi.json > internal/nodecli/gen/nodecli.gen.go

