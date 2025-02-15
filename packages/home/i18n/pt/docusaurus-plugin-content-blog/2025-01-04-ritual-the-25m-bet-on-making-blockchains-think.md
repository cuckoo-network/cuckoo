---
title: "Ritual: A Aposta de $25M para Fazer Blockchains Pensarem"
tags: [blockchain, IA, computação descentralizada, contratos inteligentes]
keywords: [Ritual, IA blockchain, IA descentralizada, contratos inteligentes, infraestrutura Web3]
authors: [lark]
description: Ritual, uma startup fundada pelo ex-investidor da Polychain Niraj Pant e Akilesh Potti, está liderando a integração de capacidades de IA em ambientes de blockchain, apoiada por uma Série A de $25M. A empresa visa revolucionar contratos inteligentes e aplicativos descentralizados com funcionalidades impulsionadas por IA.
image: https://opengraph-image.blockeden.xyz/api/og-cuckoo-network?title=Ritual:%20A%20Aposta%20de%20$25M%20para%20Fazer%20Blockchains%20Pensarem
---

# Ritual: A Aposta de $25M para Fazer Blockchains Pensarem

Ritual, fundada em 2023 pelo ex-investidor da Polychain Niraj Pant e Akilesh Potti, é um projeto ambicioso na interseção de blockchain e IA. Apoiada por uma Série A de $25M liderada pela Archetype e investimento estratégico da Polychain Capital, a empresa visa abordar lacunas críticas de infraestrutura para permitir interações complexas on-chain e off-chain. Com uma equipe de 30 especialistas de instituições e empresas líderes, a Ritual está construindo um protocolo que integra capacidades de IA diretamente em ambientes de blockchain, visando casos de uso como contratos inteligentes gerados por linguagem natural e protocolos de empréstimo dinâmicos orientados pelo mercado.

![Ritual: A Aposta de $25M para Fazer Blockchains Pensarem](https://opengraph-image.blockeden.xyz/api/og-cuckoo-network?title=Ritual:%20A%20Aposta%20de%20$25M%20para%20Fazer%20Blockchains%20Pensarem)

## Por Que os Clientes Precisam de Web3 para IA

A integração de Web3 e IA pode aliviar muitas limitações vistas em sistemas de IA tradicionais e centralizados.

1. **Infraestrutura descentralizada ajuda a reduzir o risco de manipulação**: quando cálculos de IA e saídas de modelos são executados por múltiplos nós operados de forma independente, torna-se muito mais difícil para qualquer entidade única—seja o desenvolvedor ou um intermediário corporativo—manipular os resultados. Isso aumenta a confiança do usuário e a transparência em aplicativos impulsionados por IA.

2. **IA nativa de Web3 expande o escopo dos contratos inteligentes on-chain além da lógica financeira básica**. Com IA no circuito, os contratos podem responder a dados de mercado em tempo real, prompts gerados por usuários e até mesmo tarefas de inferência complexas. Isso possibilita casos de uso como negociação algorítmica, decisões de empréstimo automatizadas e interações em chat (por exemplo, FrenRug) que seriam impossíveis sob APIs de IA existentes e isoladas. Como as saídas de IA são verificáveis e integradas com ativos on-chain, essas decisões de alto valor ou alto risco podem ser executadas com maior confiança e menos intermediários.

3. **Distribuir a carga de trabalho de IA por uma rede pode potencialmente reduzir custos e aumentar a escalabilidade**. Embora os cálculos de IA possam ser caros, um ambiente Web3 bem projetado aproveita um pool global de recursos de computação em vez de um único provedor centralizado. Isso abre mais flexibilidade de preços, melhora a confiabilidade e a possibilidade de fluxos de trabalho de IA contínuos e on-chain—tudo sustentado por incentivos compartilhados para operadores de nós oferecerem seu poder de computação.

## Abordagem da Ritual

O sistema possui três camadas principais—**Infernet Oracle**, **Ritual Chain** (infraestrutura e protocolo) e **Aplicações Nativas**—cada uma projetada para abordar diferentes desafios no espaço Web3 x IA.

### 1. **Infernet Oracle**

- **O Que Faz**
  Infernet é o primeiro produto da Ritual, atuando como uma ponte entre contratos inteligentes on-chain e computação de IA off-chain. Em vez de apenas buscar dados externos, coordena tarefas de inferência de modelos de IA, coleta resultados e os retorna on-chain de maneira verificável.
- **Componentes Principais**
  - **Containers**: Ambientes seguros para hospedar qualquer carga de trabalho de IA/ML (por exemplo, modelos ONNX, Torch, Hugging Face, GPT-4).
  - **infernet-ml**: Uma biblioteca otimizada para implantar fluxos de trabalho de IA/ML, oferecendo integrações prontas para uso com frameworks de modelos populares.
  - **Infernet SDK**: Fornece uma interface padronizada para que os desenvolvedores possam facilmente escrever contratos inteligentes que solicitem e consumam resultados de inferência de IA.
  - **Infernet Nodes**: Implantados em serviços como GCP ou AWS, esses nós escutam por solicitações de inferência on-chain, executam tarefas em containers e entregam resultados de volta on-chain.
  - **Pagamento & Verificação**: Gerencia a distribuição de taxas (entre nós de computação e verificação) e suporta vários métodos de verificação para garantir que as tarefas sejam executadas honestamente.
- **Por Que Importa**
  Infernet vai além de um oráculo tradicional ao verificar cálculos de IA off-chain, não apenas feeds de dados. Também suporta o agendamento de trabalhos de inferência repetidos ou sensíveis ao tempo, reduzindo a complexidade de vincular tarefas impulsionadas por IA a aplicativos on-chain.

### 2. **Ritual Chain**

Ritual Chain integra recursos amigáveis à IA tanto nas camadas de infraestrutura quanto de protocolo. É projetada para lidar com interações frequentes, automatizadas e complexas entre contratos inteligentes e computação off-chain, estendendo-se muito além do que L1s típicos podem gerenciar.

#### 2.1 **Camada de Infraestrutura**

- **O Que Faz**
  A infraestrutura da Ritual Chain suporta fluxos de trabalho de IA mais complexos do que blockchains padrão. Através de módulos pré-compilados, um agendador e uma extensão EVM chamada EVM++, visa facilitar tarefas de IA frequentes ou em streaming, abstrações robustas de contas e interações automatizadas de contratos.

- **Componentes Principais**

  - Módulos Pré-compilados

    :

    - **Extensões EIP (por exemplo, EIP-665, EIP-5027)** removem limites de comprimento de código, reduzem gás para assinaturas e permitem confiança entre tarefas de IA on-chain e off-chain.
    - **Pré-compilações Computacionais** padronizam frameworks para inferência de IA, provas de conhecimento zero e ajuste fino de modelos dentro de contratos inteligentes.

  - **Agendador**: Elimina a dependência de contratos "Keeper" externos, permitindo que tarefas sejam executadas em um cronograma fixo (por exemplo, a cada 10 minutos). Crucial para atividades contínuas impulsionadas por IA.

  - **EVM++**: Melhora o EVM com abstração nativa de contas (EIP-7702), permitindo que contratos aprovem automaticamente transações por um período definido. Isso suporta decisões contínuas impulsionadas por IA (por exemplo, negociação automática) sem intervenção humana.

- **Por Que Importa**
  Ao incorporar recursos focados em IA diretamente em sua infraestrutura, a Ritual Chain simplifica cálculos de IA complexos, repetitivos ou sensíveis ao tempo. Os desenvolvedores ganham um ambiente mais robusto e automatizado para construir dApps verdadeiramente "inteligentes".

#### 2.2 **Camada de Protocolo de Consenso**

- **O Que Faz**
  A camada de protocolo da Ritual Chain aborda a necessidade de gerenciar tarefas de IA diversificadas de forma eficiente. Grandes trabalhos de inferência e nós de computação heterogêneos requerem lógica especial de mercado de taxas e uma abordagem de consenso inovadora para garantir execução e verificação suaves.
- **Componentes Principais**
  - Resonance (Mercado de Taxas):
    - Introduz funções de "leiloeiro" e "corretor" para combinar tarefas de IA de complexidade variada com nós de computação adequados.
    - Emprega alocação de tarefas quase exaustiva ou "agregada" para maximizar o throughput da rede, garantindo que nós poderosos lidem com tarefas complexas sem travar.
  - Symphony (Consenso):
    - Divide cálculos de IA em subtarefas paralelas para verificação. Múltiplos nós validam etapas de processo e saídas separadamente.
    - Impede que grandes tarefas de IA sobrecarreguem a rede distribuindo cargas de trabalho de verificação entre múltiplos nós.
  - vTune:
    - Demonstra como verificar ajuste fino de modelos realizado por nós on-chain usando verificações de dados "backdoor".
    - Ilustra a capacidade mais ampla da Ritual Chain de lidar com tarefas de IA mais longas e intrincadas com mínimas suposições de confiança.
- **Por Que Importa**
  Mercados de taxas e modelos de consenso tradicionais lutam com cargas de trabalho de IA pesadas ou diversificadas. Ao redesenhar ambos, a Ritual Chain pode alocar dinamicamente tarefas e verificar resultados, expandindo as possibilidades on-chain muito além da lógica básica de token ou contrato.

### 3. **Aplicações Nativas**

- **O Que Fazem**
  Com base no Infernet e na Ritual Chain, as aplicações nativas incluem um mercado de modelos e uma rede de validação, mostrando como funcionalidades impulsionadas por IA podem ser nativamente integradas e monetizadas on-chain.
- **Componentes Principais**
  - Mercado de Modelos:
    - Tokeniza modelos de IA (e possivelmente variantes ajustadas) como ativos on-chain.
    - Permite que desenvolvedores comprem, vendam ou licenciem modelos de IA, com os lucros recompensando criadores de modelos e provedores de computação/dados.
  - Rede de Validação & "Rollup-as-a-Service":
    - Oferece a protocolos externos (por exemplo, L2s) um ambiente confiável para computar e verificar tarefas complexas como provas de conhecimento zero ou consultas impulsionadas por IA.
    - Fornece soluções de rollup personalizadas aproveitando o EVM++, recursos de agendamento e design de mercado de taxas da Ritual.
- **Por Que Importa**
  Ao tornar modelos de IA diretamente negociáveis e verificáveis on-chain, a Ritual estende a funcionalidade do blockchain para um mercado de serviços e conjuntos de dados de IA. A rede mais ampla também pode aproveitar a infraestrutura da Ritual para computação especializada, formando um ecossistema unificado onde tarefas e provas de IA são mais baratas e transparentes.

### Desenvolvimento do Ecossistema da Ritual

A visão da Ritual de uma "rede de infraestrutura de IA aberta" anda de mãos dadas com a criação de um ecossistema robusto. Além do design do produto principal, a equipe construiu parcerias em armazenamento de modelos, computação, sistemas de prova e aplicativos de IA para garantir que cada camada da rede receba suporte especializado. Ao mesmo tempo, a Ritual investe fortemente em recursos para desenvolvedores e crescimento da comunidade para fomentar casos de uso no mundo real em sua cadeia.

1. **Colaborações do Ecossistema**
  - **Armazenamento & Integridade de Modelos**: Armazenar modelos de IA com Arweave garante que permaneçam à prova de adulteração.
  - **Parcerias de Computação**: IO.net fornece computação descentralizada que corresponde às necessidades de escalabilidade da Ritual.
  - **Sistemas de Prova & Camada-2**: Colaborações com Starkware e Arbitrum estendem capacidades de geração de provas para tarefas baseadas em EVM.
  - **Apps Consumidores de IA**: Parcerias com Myshell e Story Protocol trazem mais serviços impulsionados por IA on-chain.
  - **Camada de Ativos de Modelos**: Pond, Allora e 0xScope fornecem recursos adicionais de IA e ampliam os limites de IA on-chain.
  - **Melhorias de Privacidade**: Nillion fortalece a camada de privacidade da Ritual Chain.
  - **Segurança & Staking**: EigenLayer ajuda a garantir e fazer staking na rede.
  - **Disponibilidade de Dados**: Módulos EigenLayer e Celestia melhoram a disponibilidade de dados, vital para cargas de trabalho de IA.
2. **Expansão de Aplicações**
  - **Recursos para Desenvolvedores**: Guias abrangentes detalham como iniciar containers de IA, executar PyTorch e integrar GPT-4 ou Mistral-7B em tarefas on-chain. Exemplos práticos—como gerar NFTs via Infernet—reduzem barreiras para iniciantes.
  - **Financiamento & Aceleração**: O acelerador Ritual Altar e o projeto Ritual Realm fornecem capital e mentoria para equipes construindo dApps na Ritual Chain.
  - Projetos Notáveis:
    - **Anima**: Assistente DeFi multiagente que processa solicitações em linguagem natural em empréstimos, swaps e estratégias de rendimento.
    - **Opus**: Tokens de memes gerados por IA com fluxos de negociação programados.
    - **Relic**: Incorpora modelos preditivos impulsionados por IA em AMMs, visando uma negociação on-chain mais flexível e eficiente.
    - **Tithe**: Aproveita ML para ajustar dinamicamente protocolos de empréstimo, melhorando o rendimento enquanto reduz o risco.

Ao alinhar design de produto, parcerias e um conjunto diversificado de dApps impulsionados por IA, a Ritual se posiciona como um hub multifacetado para Web3 x IA. Sua abordagem centrada no ecossistema—complementada por amplo suporte a desenvolvedores e oportunidades reais de financiamento—prepara o terreno para uma adoção mais ampla de IA on-chain.

## Perspectiva da Ritual

Os planos de produtos e o ecossistema da Ritual parecem promissores, mas muitas lacunas técnicas permanecem. Os desenvolvedores ainda precisam resolver problemas fundamentais como configurar endpoints de inferência de modelos, acelerar tarefas de IA e coordenar múltiplos nós para computações em larga escala. Por enquanto, a arquitetura central pode lidar com casos de uso mais simples; o verdadeiro desafio é inspirar desenvolvedores a construir aplicativos impulsionados por IA mais imaginativos on-chain.

No futuro, a Ritual pode se concentrar menos em finanças e mais em tornar ativos de computação ou modelos negociáveis. Isso atrairia participantes e fortaleceria a segurança da rede ao vincular o token da cadeia a cargas de trabalho práticas de IA. Embora os detalhes sobre o design do token ainda não estejam claros, é evidente que a visão da Ritual é inspirar uma nova geração de aplicativos complexos, descentralizados e impulsionados por IA—levando o Web3 a territórios mais profundos e criativos.
