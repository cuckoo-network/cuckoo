---
title: "Protocolo de Prova de Amostragem: Incentivando a Honestidade e Penalizando a Desonestidade na Inferência de IA Descentralizada"
authors: [lark]
tags: [research]
image: https://cuckoo-portal-frontend.onrender.com/api/og?title=Protocolo%20de%20Prova%20de%20Amostragem%3A%20Incentivando%20a%20Honestidade%20e%20Penalizando%20a%20Desonestidade%20na%20Infer%C3%AAncia%20de%20IA%20Descentralizada
description: Aprenda sobre a abordagem única do protocolo de Prova de Amostragem (PoSP) para incentivar o comportamento honesto e penalizar a desonestidade entre os provedores de GPU, garantindo a segurança e a confiabilidade dos sistemas de inferência de IA descentralizada.
---

Na IA descentralizada, garantir a integridade e a confiabilidade dos provedores de GPU é crucial. O protocolo de Prova de Amostragem (PoSP), conforme delineado em pesquisa recente da Holistic AI, fornece um mecanismo sofisticado para incentivar bons atores enquanto penaliza os maus. Vamos ver como esse protocolo funciona, seus incentivos econômicos, penalidades e sua aplicação na inferência de IA descentralizada.

## Incentivos para Comportamento Honesto

### Recompensas Econômicas

No coração do protocolo PoSP estão os incentivos econômicos projetados para encorajar a participação honesta. Nós, atuando como assertadores e validadores, são recompensados com base em suas contribuições:

- **Assertadores:** Recebem uma recompensa (RA) se sua saída computada estiver correta e não for contestada.
- **Validadores:** Compartilham a recompensa (RV/n) se seus resultados estiverem alinhados com os do assertador e forem verificados como corretos.

### Equilíbrio de Nash Único

O protocolo PoSP é projetado para alcançar um equilíbrio de Nash único em estratégias puras, onde todos os nós são motivados a agir honestamente. Ao alinhar o lucro individual com a segurança do sistema, o protocolo garante que a honestidade seja a estratégia mais lucrativa para os participantes.

## Penalidades para Comportamento Desonesto

### Mecanismo de Penalização

Para dissuadir o comportamento desonesto, o protocolo PoSP emprega um mecanismo de penalização. Se um assertador ou validador for pego sendo desonesto, eles enfrentam penalidades econômicas significativas (S). Isso garante que o custo da desonestidade supere em muito quaisquer ganhos potenciais de curto prazo.

### Mecanismo de Desafio

Desafios aleatórios garantem ainda mais o sistema. Com uma probabilidade predeterminada (p), o protocolo aciona um desafio onde múltiplos validadores recalculam a saída do assertador. Se forem encontradas discrepâncias, atores desonestos são penalizados. Este processo de seleção aleatória dificulta que maus atores coludam e trapaceiem sem serem detectados.

## Etapas do Protocolo PoSP

1. **Seleção de Assertador:** Um nó é selecionado aleatoriamente para atuar como assertador, computando e emitindo um valor.

2. Probabilidade de Desafio:

    O sistema pode acionar um desafio com base em uma probabilidade predeterminada.

   - **Sem Desafio:** O assertador é recompensado se nenhum desafio for acionado.
   - **Desafio Acionado:** Um número definido (n) de validadores é selecionado aleatoriamente para verificar a saída do assertador.

3. Validação:

    Cada validador computa independentemente o resultado e o compara com a saída do assertador.

   - **Correspondência:** Se todos os resultados corresponderem, tanto o assertador quanto os validadores são recompensados.
   - **Desacordo:** Um processo de arbitragem determina a honestidade do assertador e dos validadores.

4. **Penalidades:** Nós desonestos são penalizados, enquanto validadores honestos recebem sua parte da recompensa.

## spML

O protocolo spML (Machine Learning baseado em amostragem) é uma implementação do protocolo de Prova de Amostragem (PoSP) dentro de uma rede de inferência de IA descentralizada.

### Etapas Principais

1. **Entrada do Usuário**: O usuário envia sua entrada para um servidor selecionado aleatoriamente (assertador) junto com sua assinatura digital.
2. **Saída do Servidor**: O servidor computa a saída e a envia de volta ao usuário junto com um hash do resultado.
3. **Mecanismo de Desafio**:
   - Com uma probabilidade predeterminada (p), o sistema aciona um desafio onde outro servidor (validador) é selecionado aleatoriamente para verificar o resultado.
   - Se nenhum desafio for acionado, o assertador recebe uma recompensa (R) e o processo é concluído.
4. **Verificação**:
   - Se um desafio for acionado, o usuário envia a mesma entrada para o validador.
   - O validador computa o resultado e o envia de volta ao usuário junto com um hash.
5. **Comparação**:
   - O usuário compara os hashes das saídas do assertador e do validador.
   - Se os hashes corresponderem, tanto o assertador quanto o validador são recompensados, e o usuário recebe um desconto na taxa base.
   - Se os hashes não corresponderem, o usuário transmite ambos os hashes para a rede.
6. **Arbitragem**:
   - A rede vota para determinar a honestidade do assertador e do validador com base nas discrepâncias.
   - Nós honestos são recompensados, enquanto os desonestos são penalizados (cortados).

### Componentes e Mecanismos Principais
- **Execução Determinística de ML**: Usa aritmética de ponto fixo e bibliotecas de ponto flutuante baseadas em software para garantir resultados consistentes e reproduzíveis.
- **Design Sem Estado**: Trata cada consulta como independente, mantendo a ausência de estado durante o processo de ML.
- **Participação Sem Permissão**: Permite que qualquer pessoa se junte à rede e contribua executando um servidor de IA.
- **Operações Fora da Cadeia**: Inferências de IA são computadas fora da cadeia para reduzir a carga na blockchain, com resultados e assinaturas digitais retransmitidos diretamente aos usuários.
- **Operações na Cadeia**: Funções críticas, como cálculos de saldo e mecanismos de desafio, são tratadas na cadeia para garantir transparência e segurança.

### Vantagens do spML
- **Alta Segurança**: Alcança segurança por meio de incentivos econômicos, garantindo que os nós ajam honestamente devido às penalidades potenciais por desonestidade.
- **Baixa Sobrecarga Computacional**: Validadores só precisam comparar hashes na maioria dos casos, reduzindo a carga computacional durante a verificação.
- **Escalabilidade**: Pode lidar com atividade extensa da rede sem degradação significativa de desempenho.
- **Simplicidade**: Mantém a simplicidade na implementação, melhorando a facilidade de integração e manutenção.

### Comparação com Outros Protocolos
- **Prova de Fraude Otimista (opML)**:
  - Baseia-se em desincentivos econômicos para comportamento fraudulento e um mecanismo de resolução de disputas.
  - Vulnerável a atividades fraudulentas se não houver validadores suficientes honestos.
- **Prova de Conhecimento Zero (zkML)**:
  - Garante alta segurança por meio de provas criptográficas.
  - Enfrenta desafios em escalabilidade e eficiência devido à alta sobrecarga computacional.
- **spML**:
  - Combina alta segurança por meio de incentivos econômicos, baixa sobrecarga computacional e alta escalabilidade.
  - Simplifica o processo de verificação ao focar em comparações de hashes, reduzindo a necessidade de cálculos complexos durante os desafios.

## Resumo

O protocolo de Prova de Amostragem (PoSP) equilibra efetivamente a necessidade de incentivar bons atores e dissuadir os maus, garantindo a segurança e a confiabilidade geral dos sistemas descentralizados. Ao combinar recompensas econômicas com penalidades rigorosas, o PoSP promove um ambiente onde o comportamento honesto não é apenas encorajado, mas necessário para o sucesso. À medida que a IA descentralizada continua a crescer, protocolos como o PoSP serão essenciais para manter a integridade e a confiabilidade desses sistemas avançados.

- source: https://cuckoo.network/blog/2024/06/17/proof-of-sampling-posp-protocol-decentralized-ai
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
