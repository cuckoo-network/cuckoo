https://docs.arbitrum.io/node-running/how-tos/running-an-orbit-node

```json nodeConfig.json
{
  "info-json": "[{\"chain-id\":58407462918,\"parent-chain-id\":421614,\"parent-chain-is-arbitrum\":true,\"chain-name\":\"My Arbitrum L3 Chain\",\"chain-config\":{\"homesteadBlock\":0,\"daoForkBlock\":null,\"daoForkSupport\":true,\"eip150Block\":0,\"eip150Hash\":\"0x0000000000000000000000000000000000000000000000000000000000000000\",\"eip155Block\":0,\"eip158Block\":0,\"byzantiumBlock\":0,\"constantinopleBlock\":0,\"petersburgBlock\":0,\"istanbulBlock\":0,\"muirGlacierBlock\":0,\"berlinBlock\":0,\"londonBlock\":0,\"clique\":{\"period\":0,\"epoch\":0},\"arbitrum\":{\"EnableArbOS\":true,\"AllowDebugPrecompiles\":false,\"DataAvailabilityCommittee\":true,\"InitialArbOSVersion\":11,\"GenesisBlockNum\":0,\"MaxCodeSize\":24576,\"MaxInitCodeSize\":49152,\"InitialChainOwner\":\"0xFc4d0EBB074F2d664aEF0bbcc8Ea770253661908\"},\"chainId\":58407462918},\"rollup\":{\"bridge\":\"0x60C96dC98743806797E2A09c7Cfb257245E93C6E\",\"inbox\":\"0x53053a9Cc4eF4dDBAb05E8dF6bF7d24711033938\",\"sequencer-inbox\":\"0x2010C02e7329C8A97674017d60d3DB67bcC2C453\",\"rollup\":\"0xe5E82481E8b2AA614dA409A822639945EF21F931\",\"validator-utils\":\"0xB11EB62DD2B352886A4530A9106fE427844D515f\",\"validator-wallet-creator\":\"0xEb9885B6c0e117D339F47585cC06a2765AaE2E0b\",\"deployed-at\":41651298}}]",
  "name": "My Arbitrum L3 Chain"
}
```


```bash

--parent-chain.connection.url=https://sepolia-rollup.arbitrum.io/rpc

child rpc: http://localhost:8449
--node.feed.input.url=wss://relay-[your_conduit_slug_here].t.conduit.xyz



docker run --rm -it -v \
  /Users/tp-mini/projects/arbitrum-home:/home/user/.arbitrum \
  -p 0.0.0.0:8547:8547 \
  -p 0.0.0.0:8548:8548 \
  offchainlabs/nitro-node:v2.3.3-6a1c1a7 \
  --parent-chain.connection.url=https://rpc.ankr.com/arbitrum_sepolia/TODO \
  --chain.id=58407462918 \
  --chain.name="My Arbitrum L3 Chain" \
  --node.data-availability.enable \
  --node.data-availability.rest-aggregator.enable=true \
  --node.data-availability.rest-aggregator.urls=http://localhost:9876 \
  --http.api=net,web3,eth \
  --http.addr=0.0.0.0 \
  --execution.forwarding-target=http://localhost:8449 \
  --chain.info-json="[{\"chain-id\":58407462918,\"parent-chain-id\":421614,\"parent-chain-is-arbitrum\":true,\"chain-name\":\"My Arbitrum L3 Chain\",\"chain-config\":{\"homesteadBlock\":0,\"daoForkBlock\":null,\"daoForkSupport\":true,\"eip150Block\":0,\"eip150Hash\":\"0x0000000000000000000000000000000000000000000000000000000000000000\",\"eip155Block\":0,\"eip158Block\":0,\"byzantiumBlock\":0,\"constantinopleBlock\":0,\"petersburgBlock\":0,\"istanbulBlock\":0,\"muirGlacierBlock\":0,\"berlinBlock\":0,\"londonBlock\":0,\"clique\":{\"period\":0,\"epoch\":0},\"arbitrum\":{\"EnableArbOS\":true,\"AllowDebugPrecompiles\":false,\"DataAvailabilityCommittee\":true,\"InitialArbOSVersion\":11,\"GenesisBlockNum\":0,\"MaxCodeSize\":24576,\"MaxInitCodeSize\":49152,\"InitialChainOwner\":\"0xFc4d0EBB074F2d664aEF0bbcc8Ea770253661908\"},\"chainId\":58407462918},\"rollup\":{\"bridge\":\"0x60C96dC98743806797E2A09c7Cfb257245E93C6E\",\"inbox\":\"0x53053a9Cc4eF4dDBAb05E8dF6bF7d24711033938\",\"sequencer-inbox\":\"0x2010C02e7329C8A97674017d60d3DB67bcC2C453\",\"rollup\":\"0xe5E82481E8b2AA614dA409A822639945EF21F931\",\"validator-utils\":\"0xB11EB62DD2B352886A4530A9106fE427844D515f\",\"validator-wallet-creator\":\"0xEb9885B6c0e117D339F47585cC06a2765AaE2E0b\",\"deployed-at\":41651298}}]"


--http.corsdomain=*
--http.vhosts=*

```

das server http://localhost:9876
