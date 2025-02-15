---
title: GPU를 사용한 스테이킹 및 채굴 토큰
authors: [lark]
tags: [company, roadmap]
image: https://opengraph-image.blockeden.xyz/api/og-cuckoo-network?title=GPU를%20사용한%20스테이킹%20및%20채굴%20토큰
---

Cuckoo Network는 AI 애호가, 개발자 및 GPU 채굴자에게 암호화 토큰으로 보상하는 최초의 분산형 AI 모델 서비스 마켓플레이스입니다. 우리 플랫폼에서 채굴자들은 생성 AI 앱 빌더, 즉 코디네이터와 GPU를 공유하여 최종 고객을 위한 추론을 실행하며, 모든 기여자는 암호화 토큰을 얻을 수 있습니다.

![GPU를 사용한 스테이킹 및 채굴 토큰](https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp "GPU를 사용한 스테이킹 및 채굴 토큰")

> 2024-07-09 업데이트: 이 게시물은 테스트넷을 위한 것입니다. 메인넷에 대한 정보는 [이 게시물](/blog/2024/07/15/cuckoo-network-mining-gpu-july-2024)을 확인하세요.

채굴자들이 GPU를 공유할 때, 그들이 결과를 조작하지 않는다는 것을 어떻게 보장할 수 있을까요? Cuckoo Network는 스테이킹, 보상 및 슬래싱을 통해 신뢰와 무결성을 확립합니다. 오늘 우리는 스테이커들이 테스트넷에 참여하여 이 분산형 AI 네트워크의 신뢰를 확보할 수 있음을 기쁘게 발표합니다.

## **오늘 테스트넷에 참여하세요**

스테이커를 위한 안내

1. [테스트넷 파우셋](https://cuckoo.network/portal/faucet)에서 CAI 토큰 받기
2. [스테이킹 포털 / 테스트넷 스테이킹](https://cuckoo.network/portal/staking/testnet)에서 토큰 스테이킹
3. 코디네이터 또는 채굴자에게 투표하기

![Cuckoo 포털 - 스테이킹](https://cuckoo-network.b-cdn.net/staking-portal-screenshot.webp "Cuckoo 포털 - 스테이킹")

GPU 채굴자를 위한 안내

1. https://cuckoo.network/tg 또는 https://cuckoo.network/dc에서 관리자에게 연락하여 CAI 토큰 받기
2. 스테이킹 포털에서 20K 이상의 토큰 스테이킹
3. minerAddress 및 소개 정보 등록. minerAddress는 스테이커 주소와 다르게 설정하는 것이 좋습니다.
4. minerAddress의 개인 키로 채굴자 노드 실행

코디네이터를 위한 안내

1. https://cuckoo.network/tg 또는 https://cuckoo.network/dc에서 관리자에게 연락하여 CAI 토큰 받기
2. 스테이킹 포털에서 2M 이상의 토큰 스테이킹
3. coordinatorAddress 및 소개 정보 등록. coordinatorAddress는 스테이커 주소와 다르게 설정하는 것이 좋습니다.
4. minerAddress의 개인 키로 코디네이터 노드 실행

## **작동 방식**

전체 시스템은 여러 역할이 함께 작동하여 이루어집니다:

- **GPU 채굴자 스테이커:** AI 작업을 실행하기 위해 컴퓨팅 자원을 운영하는 개인 또는 단체. 네트워크에 스테이킹하기 위해 지갑에 CAI 토큰을 보유합니다. 더 많은 스테이킹을 할수록 GPU 작업을 할당받을 확률이 높아집니다.
- **앱 빌더 (코디네이터 스테이커):** Cuckoo Network 위에 AI 애플리케이션을 개발하고 작업 분배 및 품질 관리를 감독하는 개발자. 네트워크에 스테이킹하기 위해 지갑에 CAI 토큰을 보유합니다. 더 많은 스테이킹을 할수록 그들과 함께 일하려는 GPU 채굴자를 얻을 확률이 높아집니다.
- **스테이커:** 신뢰할 수 있는 채굴자와 코디네이터에게 투표하기 위해 토큰을 스테이킹하는 참가자. 그들의 스테이킹에 대해 보상을 받습니다.
- **스테이킹 계약:** 채굴자와 코디네이터가 등록하고 스테이커가 그들에게 투표하는 스마트 계약.
- **코디네이터 노드:** 생성 AI 애플리케이션이 이 노드의 API를 호출하여 네트워크에서 이미지 생성과 같은 GPU 작업을 제공합니다.
- **채굴자 노드:** GPU 제공자가 GPU로 작업을 수행하기 위해 채굴자 노드를 실행합니다.

![img](https://cuckoo-network.b-cdn.net/cuckoo-staking@2x.webp)

작업 할당 및 스케줄러는 Cuckoo AI 생태계 내에서 중요한 기능으로, 코디네이터에서 채굴자로의 작업을 효율적이고 공정하게 분배합니다.

그러나 노드는 시스템에 들어가기 전에 신뢰를 구축해야 합니다. 따라서 모든 참가자는 역할을 맡기 전에 토큰을 스테이킹해야 합니다.

그런 다음 생성 AI 앱 빌더, 즉 코디네이터는 스테이킹 계약에 등록된 주소의 개인 키로 코디네이터 노드를 실행합니다. 이 노드는 스테이킹 계약에서 채굴자 등록을 읽고 채굴자 노드에서 오는 요청을 수신합니다.

GPU 제공자는 채굴자 노드를 실행하여 스테이킹 계약에서 정보를 가져오고 코디네이터에게 대기 중인 작업을 요청합니다.

생성 AI 앱이 코디네이터에게 작업을 제공하면, 코디네이터는 스테이킹을 가중치로 하여 활성 채굴자 주소에 작업을 할당합니다. 그런 다음 해당 채굴자가 작업을 수행하고 최종적으로 결과를 코디네이터에게 제출합니다.

## **요약**

Cuckoo Network는 협력과 신뢰를 강조하는 독특한 분산형 AI-to-Earn 플랫폼을 소개합니다. 스테이킹 메커니즘과 인센티브를 사용하여 개발자, GPU 채굴자 및 스테이커를 포함한 모든 참가자의 진정성과 참여를 보장합니다. 이 접근 방식은 신뢰할 수 있는 작업 분배를 보장하고 분산형 AI 기술 발전을 위한 지속 가능한 환경을 조성합니다. Cuckoo는 더 많은 사용자가 네트워크를 탐색하고 암호화폐를 벌면서 AI 개발에 기여할 기회를 제공하기를 초대합니다.

- 출처: https://cuckoo.network/blog/2024/04/20/staking-and-mining-tokens-with-gpu
- 텔레그램: https://cuckoo.network/tg
- 디스코드: https://cuckoo.network/dc
