---
title: "Introdução à Arquitetura do Arbitrum Nitro"
authors: [lark]
tags: [engenharia, pesquisa]
image: https://cuckoo-portal-frontend.onrender.com/api/og?title=Introdução%20à%20Arquitetura%20do%20Arbitrum%20Nitro
---

Arbitrum Nitro, desenvolvido pela Offchain Labs, é um protocolo blockchain de segunda geração Layer 2 projetado para melhorar a capacidade de processamento, a finalização e a resolução de disputas. Ele se baseia no protocolo Arbitrum original, trazendo melhorias significativas que atendem às necessidades modernas de blockchain.

![](https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp)

### Principais Propriedades do Arbitrum Nitro

O Arbitrum Nitro opera como uma solução Layer 2 sobre o Ethereum, suportando a execução de contratos inteligentes usando o código da Máquina Virtual Ethereum (EVM). Isso garante compatibilidade com as aplicações e ferramentas existentes no Ethereum. O protocolo garante tanto segurança quanto progresso, assumindo que a cadeia Ethereum subjacente permaneça segura e ativa, e que pelo menos um participante no protocolo Nitro se comporte de maneira honesta.

### Abordagem de Design

A arquitetura do Nitro é construída sobre quatro princípios fundamentais:

- **Sequenciamento Seguido por Execução Determinística:** As transações são primeiro sequenciadas e depois processadas de forma determinística. Essa abordagem em duas fases garante um ambiente de execução consistente e confiável.
- **Geth no Núcleo:** O Nitro utiliza o pacote go-ethereum (geth) para execução central e manutenção de estado, garantindo alta compatibilidade com o Ethereum.
- **Separação de Execução e Prova:** A função de transição de estado é compilada tanto para execução nativa quanto para web assembly (wasm) para facilitar a execução eficiente e a prova estruturada e independente de máquina.
- **Rollup Otimista com Provas de Fraude Interativas:** Baseando-se no design original do Arbitrum, o Nitro emprega um protocolo de rollup otimista aprimorado com um sofisticado mecanismo de prova de fraude.

### Sequenciamento e Execução

O processamento de transações no Nitro envolve dois componentes principais: o Sequenciador e a Função de Transição de Estado (STF).

![Arquitetura do Arbitrum Nitro](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro.webp "Arquitetura do Arbitrum Nitro")

- **O Sequenciador**: Ordena as transações recebidas e compromete-se com essa ordem. Ele garante que a sequência de transações seja conhecida e confiável, postando-a tanto como um feed em tempo real quanto como lotes de dados compactados na cadeia Ethereum Layer 1. Essa abordagem dupla aumenta a confiabilidade e previne a censura.
- **Execução Determinística**: A STF processa as transações sequenciadas, atualizando o estado da cadeia e produzindo novos blocos. Esse processo é determinístico, o que significa que o resultado depende apenas dos dados da transação e do estado anterior, garantindo consistência em toda a rede.

### Arquitetura de Software: Geth no Núcleo

![Arquitetura do Arbitrum Nitro, Estratificada](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro-architecture-layered.webp "Arquitetura do Arbitrum Nitro, Estratificada")

A arquitetura de software do Nitro é estruturada em três camadas:

- **Camada Base (Núcleo Geth)**: Esta camada lida com a execução de contratos EVM e mantém as estruturas de dados de estado do Ethereum.
- **Camada Intermediária (ArbOS)**: Software personalizado que fornece funcionalidade Layer 2, incluindo descompressão de lotes do sequenciador, gerenciamento de custos de gás e suporte a funcionalidades cross-chain.
- **Camada Superior**: Derivada do geth, esta camada lida com conexões, solicitações RPC recebidas e outras funções de nó de alto nível.

### Interação Cross-Chain

O Arbitrum Nitro suporta interações cross-chain seguras por meio de mecanismos como o Outbox, Inbox e Tickets Repetíveis.

- **O Outbox**: Permite chamadas de contrato do Layer 2 para o Layer 1, garantindo que as mensagens sejam transferidas e executadas com segurança no Ethereum.
- **O Inbox**: Gerencia transações enviadas para o Nitro a partir do Ethereum, garantindo que sejam incluídas na ordem correta.
- **Tickets Repetíveis**: Permitem a reenvio de transações falhadas, garantindo confiabilidade e reduzindo o risco de transações perdidas.

### Gás e Taxas

O Nitro emprega um sofisticado mecanismo de medição e precificação de gás para gerenciar os custos das transações:

- **Medição e Precificação de Gás L2**: Acompanha o uso de gás e ajusta a taxa base de forma algorítmica para equilibrar demanda e capacidade.
- **Medição e Precificação de Dados L1**: Garante que os custos associados às interações Layer 1 sejam cobertos, utilizando um algoritmo de precificação adaptativo para repartir esses custos com precisão entre as transações.

### Conclusão

A Cuckoo Network está confiante em investir no desenvolvimento do Arbitrum. As soluções avançadas Layer 2 do Arbitrum Nitro oferecem escalabilidade incomparável, finalização mais rápida e resolução eficiente de disputas. Sua compatibilidade com o Ethereum garante um ambiente seguro e eficiente para nossas aplicações descentralizadas, alinhando-se com nosso compromisso com a inovação e o desempenho.


- source: https://cuckoo.network/blog/2024/06/06/introduction-to-arbitrum-nitro
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
