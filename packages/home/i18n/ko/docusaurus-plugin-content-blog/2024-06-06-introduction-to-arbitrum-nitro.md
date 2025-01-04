---
title: "Arbitrum Nitro의 아키텍처 소개"
authors: [lark]
tags: [engineering, research]
image: https://web-dash-v2.onrender.com/api/og-cuckoo-network?title=Arbitrum%20Nitro의%20아키텍처%20소개
---

Arbitrum Nitro는 Offchain Labs에서 개발한 2세대 레이어 2 블록체인 프로토콜로, 처리량, 최종성 및 분쟁 해결을 개선하기 위해 설계되었습니다. 이는 기존 Arbitrum 프로토콜을 기반으로 하여 현대 블록체인 요구를 충족하는 중요한 개선 사항을 제공합니다.

![](https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp)

### Arbitrum Nitro의 주요 속성

Arbitrum Nitro는 이더리움 위에 레이어 2 솔루션으로 작동하며, 이더리움 가상 머신(EVM) 코드를 사용하여 스마트 계약 실행을 지원합니다. 이는 기존 이더리움 애플리케이션 및 도구와의 호환성을 보장합니다. 프로토콜은 기본 이더리움 체인이 안전하고 활성 상태로 유지되며, Nitro 프로토콜의 적어도 한 명의 참가자가 정직하게 행동한다고 가정할 때 안전성과 진행을 보장합니다.

### 설계 접근 방식

Nitro의 아키텍처는 네 가지 핵심 원칙을 기반으로 구축되었습니다:

- **순서 지정 후 결정론적 실행:** 트랜잭션은 먼저 순서가 지정되고, 그 후 결정론적으로 처리됩니다. 이 두 단계 접근 방식은 일관되고 신뢰할 수 있는 실행 환경을 보장합니다.
- **Geth를 핵심으로:** Nitro는 핵심 실행 및 상태 유지를 위해 go-ethereum(geth) 패키지를 사용하여 이더리움과 높은 호환성을 보장합니다.
- **실행과 증명 분리:** 상태 전이 함수는 효율적인 실행과 구조화된, 기계 독립적인 증명을 촉진하기 위해 네이티브 실행 및 웹 어셈블리(wasm) 모두로 컴파일됩니다.
- **상호작용 사기 증명과 낙관적 롤업:** Arbitrum의 원래 설계를 기반으로 하여, Nitro는 정교한 사기 증명 메커니즘을 갖춘 개선된 낙관적 롤업 프로토콜을 사용합니다.

### 순서 지정 및 실행

Nitro에서의 트랜잭션 처리에는 두 가지 주요 구성 요소가 포함됩니다: 순서 지정자와 상태 전이 함수(STF).

![Arbitrum Nitro Architecture](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro.webp "Arbitrum Nitro Architecture")

- **순서 지정자**: 들어오는 트랜잭션의 순서를 지정하고 이 순서에 대한 커밋을 수행합니다. 이는 트랜잭션 순서가 알려지고 신뢰할 수 있도록 보장하며, 이를 실시간 피드 및 이더리움 레이어 1 체인에 압축된 데이터 배치로 게시합니다. 이 이중 접근 방식은 신뢰성을 높이고 검열을 방지합니다.
- **결정론적 실행**: STF는 순서가 지정된 트랜잭션을 처리하여 체인 상태를 업데이트하고 새로운 블록을 생성합니다. 이 과정은 결정론적이며, 결과는 트랜잭션 데이터와 이전 상태에만 의존하여 네트워크 전반의 일관성을 보장합니다.

### 소프트웨어 아키텍처: Geth를 핵심으로

![Arbitrum Nitro Architecture, Layered](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro-architecture-layered.webp "Arbitrum Nitro Architecture, Layered")

Nitro의 소프트웨어 아키텍처는 세 개의 계층으로 구성되어 있습니다:

- **기본 계층 (Geth Core)**: 이 계층은 EVM 계약의 실행을 처리하고 이더리움 상태 데이터 구조를 유지 관리합니다.
- **중간 계층 (ArbOS)**: 시퀀서 배치를 압축 해제하고, 가스 비용을 관리하며, 크로스체인 기능을 지원하는 레이어 2 기능을 제공하는 맞춤형 소프트웨어입니다.
- **상위 계층**: geth에서 가져온 이 계층은 연결, 들어오는 RPC 요청 및 기타 최상위 노드 기능을 처리합니다.

### 크로스체인 상호작용

Arbitrum Nitro는 Outbox, Inbox 및 Retryable Tickets와 같은 메커니즘을 통해 안전한 크로스체인 상호작용을 지원합니다.

- **Outbox**: 레이어 2에서 레이어 1로의 계약 호출을 가능하게 하여 메시지가 안전하게 전송되고 이더리움에서 실행되도록 보장합니다.
- **Inbox**: 이더리움에서 Nitro로 전송된 트랜잭션을 관리하여 올바른 순서로 포함되도록 보장합니다.
- **Retryable Tickets**: 실패한 트랜잭션의 재제출을 허용하여 신뢰성을 보장하고 트랜잭션 손실의 위험을 줄입니다.

### 가스 및 수수료

Nitro는 트랜잭션 비용을 관리하기 위해 정교한 가스 계량 및 가격 책정 메커니즘을 사용합니다:

- **L2 가스 계량 및 가격 책정**: 가스 사용량을 추적하고 수요와 용량의 균형을 맞추기 위해 기본 수수료를 알고리즘적으로 조정합니다.
- **L1 데이터 계량 및 가격 책정**: 레이어 1 상호작용과 관련된 비용이 충당되도록 보장하며, 이러한 비용을 트랜잭션 간에 정확하게 배분하기 위해 적응형 가격 책정 알고리즘을 사용합니다.

### 결론

Cuckoo Network는 Arbitrum의 개발에 투자하는 것에 자신감을 가지고 있습니다. Arbitrum Nitro의 고급 레이어 2 솔루션은 뛰어난 확장성, 더 빠른 최종성 및 효율적인 분쟁 해결을 제공합니다. 이더리움과의 호환성은 우리의 분산 애플리케이션에 안전하고 효율적인 환경을 보장하며, 혁신과 성능에 대한 우리의 약속과 일치합니다.


- source: https://cuckoo.network/blog/2024/06/06/introduction-to-arbitrum-nitro
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc