---
title: Staking e mineração de tokens com GPU
authors: [lark]
tags: [empresa, roteiro]
image: https://cuckoo-portal-frontend.onrender.com/api/og?title=Staking%20e%20minera%C3%A7%C3%A3o%20de%20tokens%20com%20GPU
---

Cuckoo Network é o primeiro Marketplace Descentralizado de Serviço de Modelos de IA que recompensa entusiastas de IA, desenvolvedores e mineradores de GPU com tokens de criptomoeda. Em nossa plataforma, os mineradores compartilham suas GPUs com construtores de aplicativos de IA generativa, também conhecidos como coordenadores, para executar inferências para clientes finais, permitindo que todos os contribuintes ganhem tokens de criptomoeda.

![Staking e mineração de tokens com GPU](https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp "Staking e mineração de tokens com GPU")

> Atualização de 2024-07-09: Este post é para a testnet. Confira [este post](/blog/2024/07/15/cuckoo-network-mining-gpu-july-2024) para a mainnet.

Quando os mineradores compartilham suas GPUs, como garantir que eles não estão falsificando resultados? A Cuckoo Network estabelece confiança e integridade através de staking, recompensas e penalizações. Hoje estamos felizes em anunciar que os stakers podem se juntar à nossa testnet e garantir confiança para esta rede de IA descentralizada.

## **Junte-se à testnet hoje**

Para stakers

1. Obtenha tokens CAI do [faucet da testnet](https://cuckoo.network/portal/faucet)
2. Faça o staking de tokens no [portal de staking / staking da testnet](https://cuckoo.network/portal/staking/testnet)
3. Vote em coordenadores ou mineradores

![Cuckoo Portal - Staking](https://cuckoo-network.b-cdn.net/staking-portal-screenshot.webp "Cuckoo Portal - Staking")

Para mineradores de GPU

1. Obtenha tokens CAI entrando em contato com administradores em https://cuckoo.network/tg ou https://cuckoo.network/dc
2. Faça o staking de > 20K tokens no portal de staking
3. Registre minerAddress e informações de introdução. Recomenda-se que o minerAddress seja diferente do seu endereço de staker.
4. Execute o nó do minerador com a chave privada do minerAddress

Para Coordenadores

1. Obtenha tokens CAI entrando em contato com administradores em https://cuckoo.network/tg ou https://cuckoo.network/dc
2. Faça o staking de > 2M tokens no portal de staking
3. Registre coordinatorAddress e informações de introdução. Recomenda-se que o coordinatorAddress seja diferente do seu endereço de staker.
4. Execute o nó do coordenador com a chave privada do minerAddress

## **Como funciona?**

Todo o sistema assume alguns papéis para trabalhar juntos:

- **Staker de Minerador de GPU:** Indivíduos ou entidades que executam recursos computacionais para realizar tarefas de IA. Eles possuem tokens CAI com uma carteira para fazer staking na rede. Quanto mais eles fazem staking, maiores são as chances de serem designados para tarefas de GPU.
- **Construtores de Apps (Staker Coordenador):** Desenvolvedores que criam aplicativos de IA na Cuckoo Network, supervisionando a distribuição de tarefas e o controle de qualidade. Eles possuem tokens CAI com uma carteira para fazer staking na rede. Quanto mais eles fazem staking, maiores são as chances de obterem mineradores de GPU dispostos a trabalhar com eles.
- **Stakers:** Participantes que fazem staking de tokens para votar em Mineradores e coordenadores confiáveis. Eles serão recompensados por seus stakes.
- **Contrato de Staking:** Um contrato inteligente onde Mineradores e coordenadores se registram e stakers votam neles.
- **Nó Coordenador:** Aplicativos de IA generativa chamam APIs deste nó para oferecer tarefas de GPU, como prompt para gerar imagens na rede.
- **Nó do Minerador:** Provedores de GPU executam o nó do minerador para realizar a execução de tarefas com GPUs.

![img](https://cuckoo-network.b-cdn.net/cuckoo-staking@2x.webp)

A atribuição de tarefas e o agendador são funções críticas dentro do ecossistema Cuckoo AI, garantindo uma distribuição eficiente e justa de tarefas dos coordenadores para os Mineradores.

No entanto, os nós devem estabelecer confiança antes de entrar no sistema. Assim, todos os participantes devem fazer staking de tokens antes de assumirem qualquer papel.

Em seguida, os construtores de aplicativos de IA generativa, também conhecidos como coordenadores, executam o nó do coordenador com uma chave privada cujo endereço foi registrado nos contratos de staking. Este nó lê o registro de mineradores dos contratos de staking e então escuta as solicitações vindas dos nós dos mineradores.

Os provedores de GPU executam o nó do minerador que também buscará informações dos contratos de staking e consultará os coordenadores para tarefas pendentes.

Quando o aplicativo de IA generativa oferece uma tarefa ao coordenador, o coordenador designará a tarefa para os endereços de mineradores ativos de acordo com seus stakes como pesos. Em seguida, os mineradores correspondentes trabalham na tarefa e finalmente submetem os resultados ao coordenador.

## **Resumo**

A Cuckoo Network introduz uma plataforma única de AI-to-Earn descentralizada, enfatizando colaboração e confiança. Ao empregar mecanismos de staking e incentivos, garante a autenticidade e o engajamento de todos os participantes, incluindo desenvolvedores, mineradores de GPU e stakers. Esta abordagem garante uma distribuição confiável de tarefas e promove um ambiente sustentável para o avanço das tecnologias de IA descentralizadas. A Cuckoo convida mais usuários a explorar sua rede, oferecendo-lhes a oportunidade de contribuir para o desenvolvimento de IA enquanto ganham criptomoeda.

- fonte: https://cuckoo.network/blog/2024/04/20/staking-and-mining-tokens-with-gpu
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
