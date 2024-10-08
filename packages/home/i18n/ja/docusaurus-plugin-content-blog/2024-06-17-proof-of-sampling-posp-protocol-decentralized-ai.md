---
title: "サンプリングの証明プロトコル：分散型AI推論における誠実さの奨励と不正行為のペナルティ"
authors: [lark]
tags: [研究]
image: https://cuckoo-network.b-cdn.net/proof-of-sampling-posp-protocol-decentralized-ai.webp
description: サンプリングの証明（PoSP）プロトコルが、GPUプロバイダー間で誠実な行動を奨励し、不誠実な行動を罰する独自のアプローチについて学び、分散型AI推論システムのセキュリティと信頼性を確保します。
---

分散型AIにおいて、GPUプロバイダーの信頼性と整合性を確保することは極めて重要です。Holistic AIの最近の研究で概説されたサンプリングの証明（PoSP）プロトコルは、誠実な行動を奨励し、不正行為者を罰する洗練されたメカニズムを提供します。ここでは、このプロトコルの仕組み、その経済的インセンティブとペナルティ、および分散型AI推論への応用について説明します。

## 誠実な行動のインセンティブ

### 経済的報酬

PoSPプロトコルの中心には、誠実な参加を促すための経済的インセンティブがあります。ノードはアサーターやバリデーターとして行動し、その貢献度に応じて報酬を受け取ります：

- **アサーター**：計算結果が正しく、異議がない場合に報酬（RA）を受け取ります。
- **バリデーター**：アサーターの結果と一致し、正しいと確認された場合、報酬（RV/n）を分け合います。

### 独自のナッシュ均衡

PoSPプロトコルは、純粋戦略における一意のナッシュ均衡に到達するよう設計されています。これにより、すべてのノードが誠実に行動する動機付けがなされます。個々の利益とシステムのセキュリティを一致させることで、誠実さが参加者にとって最も利益のある戦略となるようにします。

## 不誠実な行動へのペナルティ

### スラッシングメカニズム

不誠実な行動を抑止するために、PoSPプロトコルはスラッシングメカニズムを採用しています。不誠実なアサーターやバリデーターが発覚した場合、彼らは大きな経済的ペナルティ（S）を受けます。これにより、短期的な利益を追求するよりも、不誠実な行動を取るコストがはるかに高くなります。

### チャレンジメカニズム

システムをさらに強化するために、ランダムなチャレンジが導入されています。あらかじめ決められた確率（p）で、プロトコルがチャレンジをトリガーし、複数のバリデーターがアサーターの出力を再計算します。差異が発見された場合、不誠実な行動者にはペナルティが課されます。このランダムな選択プロセスにより、悪意ある行動者が共謀して不正行為を行うことが困難になります。

## PoSPプロトコルの手順

1. **アサーター選択**：ノードがランダムに選択され、アサーターとして計算を行い、値を出力します。

2. **チャレンジ確率**：

   システムは、あらかじめ決められた確率に基づいてチャレンジをトリガーする可能性があります。

  - **チャレンジなし**：チャレンジがトリガーされない場合、アサーターは報酬を受け取ります。
  - **チャレンジがトリガーされた場合**：複数のバリデーターがランダムに選ばれ、アサーターの出力を検証します。

3. **検証**：

   各バリデーターは独自に結果を計算し、アサーターの出力と比較します。

  - **一致**：すべての結果が一致する場合、アサーターとバリデーターの両方が報酬を受け取ります。
  - **不一致**：仲裁プロセスにより、アサーターとバリデーターの誠実さが判断されます。

4. **ペナルティ**：不誠実なノードにはペナルティが課され、誠実なバリデーターは報酬を受け取ります。

## spML

spML（サンプリングベースの機械学習）プロトコルは、分散型AI推論ネットワーク内でPoSPプロトコルを実装したものです。

### 主要な手順

1. **ユーザー入力**：ユーザーはランダムに選ばれたサーバー（アサーター）にデジタル署名とともに入力を送信します。
2. **サーバー出力**：サーバーは出力を計算し、結果のハッシュとともにユーザーに返送します。
3. **チャレンジメカニズム**：
  - あらかじめ決められた確率（p）で、システムはチャレンジをトリガーし、別のサーバー（バリデーター）がランダムに選ばれて結果を検証します。
  - チャレンジがトリガーされない場合、アサーターは報酬（R）を受け取り、プロセスは終了します。
4. **検証**：
  - チャレンジがトリガーされた場合、ユーザーは同じ入力をバリデーターに送信します。
  - バリデーターは結果を計算し、そのハッシュとともにユーザーに返送します。
5. **比較**：
  - ユーザーは、アサーターとバリデーターの出力のハッシュを比較します。
  - ハッシュが一致すれば、アサーターとバリデーターの両方が報酬を受け取り、ユーザーは基本料金の割引を受けます。
  - ハッシュが一致しない場合、ユーザーは両方のハッシュをネットワークに公開します。
6. **仲裁**：
  - ネットワークは、差異に基づいてアサーターとバリデーターの誠実さを判断するために投票を行います。
  - 誠実なノードは報酬を受け取り、不誠実なノードはペナルティ（スラッシュ）を受けます。

### 主要なコンポーネントとメカニズム
- **決定論的ML実行**：固定小数点算術とソフトウェアベースの浮動小数点ライブラリを使用して、安定した再現可能な結果を確保します。
- **ステートレス設計**：各クエリを独立したものとし、MLプロセス全体でステートレスを維持します。
- **許可なしの参加**：誰でもネットワークに参加し、AIサーバーを運用することができます。
- **オフチェーン操作**：AI推論はブロックチェーンの負荷を軽減するためにオフチェーンで計算され、結果とデジタル署名はユーザーに直接送信されます。
- **オンチェーン操作**：バランス計算やチャレンジメカニズムなどの重要な機能はオンチェーンで処理され、透明性とセキュリティを確保します。

### spMLの利点
- **高いセキュリティ**：経済的インセンティブを通じてセキュリティを確保し、不誠実な行動によるペナルティの可能性があるため、ノードは誠実に行動することが求められます。
- **低い計算オーバーヘッド**：検証において、ほとんどのケースでハッシュの比較のみが必要なため、計算負荷が軽
