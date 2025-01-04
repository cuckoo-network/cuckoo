---
title: "Ritual : Le pari de 25 millions de dollars pour rendre les blockchains intelligentes"
tags: [blockchain, IA, informatique décentralisée, contrats intelligents]
keywords: [Ritual, IA blockchain, IA décentralisée, contrats intelligents, infrastructure Web3]
authors: [lark]
description: Ritual, une startup fondée par l'ancien investisseur de Polychain Niraj Pant et Akilesh Potti, est à l'avant-garde de l'intégration des capacités d'IA dans les environnements blockchain, soutenue par une série A de 25 millions de dollars. L'entreprise vise à révolutionner les contrats intelligents et les applications décentralisées avec des fonctionnalités pilotées par l'IA.
image: https://web-dash-v2.onrender.com/api/og-cuckoo-network?title=Ritual:%20The%20$25M%20Bet%20on%20Making%20Blockchains%20Think
---

# Ritual : Le pari de 25 millions de dollars pour rendre les blockchains intelligentes

Ritual, fondée en 2023 par l'ancien investisseur de Polychain Niraj Pant et Akilesh Potti, est un projet ambitieux à l'intersection de la blockchain et de l'IA. Soutenue par une série A de 25 millions de dollars dirigée par Archetype et un investissement stratégique de Polychain Capital, l'entreprise vise à combler les lacunes critiques de l'infrastructure pour permettre des interactions complexes sur et hors chaîne. Avec une équipe de 30 experts issus d'institutions et d'entreprises de premier plan, Ritual construit un protocole qui intègre directement les capacités d'IA dans les environnements blockchain, ciblant des cas d'utilisation tels que les contrats intelligents générés en langage naturel et les protocoles de prêt dynamiques basés sur le marché.

![Ritual : Le pari de 25 millions de dollars pour rendre les blockchains intelligentes](https://web-dash-v2.onrender.com/api/og-cuckoo-network?title=Ritual:%20The%20$25M%20Bet%20on%20Making%20Blockchains%20Think)

## Pourquoi les clients ont besoin du Web3 pour l'IA

L'intégration du Web3 et de l'IA peut atténuer de nombreuses limitations observées dans les systèmes d'IA traditionnels et centralisés.

1. **L'infrastructure décentralisée aide à réduire le risque de manipulation** : lorsque les calculs d'IA et les résultats des modèles sont exécutés par plusieurs nœuds opérés indépendamment, il devient beaucoup plus difficile pour une seule entité—qu'il s'agisse du développeur ou d'un intermédiaire d'entreprise—de falsifier les résultats. Cela renforce la confiance des utilisateurs et la transparence dans les applications pilotées par l'IA.

2. **L'IA native du Web3 élargit la portée des contrats intelligents sur chaîne au-delà de la simple logique financière de base**. Avec l'IA dans la boucle, les contrats peuvent répondre aux données de marché en temps réel, aux invites générées par les utilisateurs, et même aux tâches d'inférence complexes. Cela permet des cas d'utilisation tels que le trading algorithmique, les décisions de prêt automatisées, et les interactions en chat (par exemple, FrenRug) qui seraient impossibles avec les API d'IA existantes et cloisonnées. Parce que les résultats de l'IA sont vérifiables et intégrés aux actifs sur chaîne, ces décisions de grande valeur ou à enjeux élevés peuvent être exécutées avec plus de confiance et moins d'intermédiaires.

3. **La distribution de la charge de travail de l'IA à travers un réseau peut potentiellement réduire les coûts et améliorer l'évolutivité**. Même si les calculs d'IA peuvent être coûteux, un environnement Web3 bien conçu puise dans un pool mondial de ressources informatiques plutôt qu'un fournisseur centralisé unique. Cela ouvre la voie à une tarification plus flexible, une fiabilité améliorée, et la possibilité de flux de travail d'IA continus sur chaîne—tous soutenus par des incitations partagées pour les opérateurs de nœuds à offrir leur puissance de calcul.

## L'approche de Ritual

Le système a trois couches principales—**Infernet Oracle**, **Ritual Chain** (infrastructure et protocole), et **Applications Natives**—chacune conçue pour relever différents défis dans l'espace Web3 x IA.

### 1. **Infernet Oracle**

- **Ce qu'il fait**
  Infernet est le premier produit de Ritual, agissant comme un pont entre les contrats intelligents sur chaîne et le calcul d'IA hors chaîne. Plutôt que de simplement récupérer des données externes, il coordonne les tâches d'inférence de modèles d'IA, collecte les résultats, et les renvoie sur chaîne de manière vérifiable.
- **Composants clés**
  - **Conteneurs** : Environnements sécurisés pour héberger toute charge de travail IA/ML (par exemple, modèles ONNX, Torch, Hugging Face, GPT-4).
  - **infernet-ml** : Une bibliothèque optimisée pour déployer des flux de travail IA/ML, offrant des intégrations prêtes à l'emploi avec des cadres de modèles populaires.
  - **Infernet SDK** : Fournit une interface standardisée pour que les développeurs puissent facilement écrire des contrats intelligents qui demandent et consomment les résultats d'inférence d'IA.
  - **Nœuds Infernet** : Déployés sur des services comme GCP ou AWS, ces nœuds écoutent les demandes d'inférence sur chaîne, exécutent les tâches dans des conteneurs, et livrent les résultats sur chaîne.
  - **Paiement & Vérification** : Gère la distribution des frais (entre les nœuds de calcul et de vérification) et prend en charge diverses méthodes de vérification pour garantir que les tâches sont exécutées honnêtement.
- **Pourquoi c'est important**
  Infernet va au-delà d'un oracle traditionnel en vérifiant les calculs d'IA hors chaîne, pas seulement les flux de données. Il prend également en charge la planification de tâches d'inférence répétées ou sensibles au temps, réduisant la complexité de lier des tâches pilotées par l'IA aux applications sur chaîne.

### 2. **Ritual Chain**

Ritual Chain intègre des fonctionnalités favorables à l'IA à la fois aux niveaux de l'infrastructure et du protocole. Il est conçu pour gérer des interactions fréquentes, automatisées, et complexes entre les contrats intelligents et le calcul hors chaîne, allant bien au-delà de ce que les L1 typiques peuvent gérer.

#### 2.1 **Couche d'infrastructure**

- **Ce qu'il fait**
  L'infrastructure de Ritual Chain prend en charge des flux de travail IA plus complexes que les blockchains standard. Grâce à des modules précompilés, un planificateur, et une extension EVM appelée EVM++, il vise à faciliter les tâches IA fréquentes ou en streaming, les abstractions de compte robustes, et les interactions automatisées de contrats.

- **Composants clés**

  - Modules précompilés

    :

    - **Extensions EIP (par exemple, EIP-665, EIP-5027)** suppriment les limites de longueur de code, réduisent le gaz pour les signatures, et permettent la confiance entre les tâches IA sur chaîne et hors chaîne.
    - **Précompilations computationnelles** standardisent les cadres pour l'inférence IA, les preuves à connaissance zéro, et le réglage fin des modèles au sein des contrats intelligents.

  - **Planificateur** : Élimine la dépendance aux contrats "Keeper" externes en permettant aux tâches de s'exécuter selon un calendrier fixe (par exemple, toutes les 10 minutes). Crucial pour les activités continues pilotées par l'IA.

  - **EVM++** : Améliore l'EVM avec l'abstraction native de compte (EIP-7702), permettant aux contrats d'approuver automatiquement les transactions pour une période définie. Cela prend en charge les décisions continues pilotées par l'IA (par exemple, le trading automatique) sans intervention humaine.

- **Pourquoi c'est important**
  En intégrant directement des fonctionnalités axées sur l'IA dans son infrastructure, Ritual Chain simplifie les calculs IA complexes, répétitifs, ou sensibles au temps. Les développeurs bénéficient d'un environnement plus robuste et automatisé pour construire des dApps véritablement "intelligentes".

#### 2.2 **Couche de protocole de consensus**

- **Ce qu'il fait**
  La couche de protocole de Ritual Chain répond au besoin de gérer efficacement diverses tâches IA. Les grandes tâches d'inférence et les nœuds de calcul hétérogènes nécessitent une logique de marché de frais spéciale et une approche de consensus novatrice pour garantir une exécution et une vérification fluides.
- **Composants clés**
  - Résonance (Marché des frais) :
    - Introduit les rôles d'"enchérisseur" et de "courtier" pour faire correspondre les tâches IA de complexité variable avec des nœuds de calcul appropriés.
    - Utilise une allocation de tâches presque exhaustive ou "groupée" pour maximiser le débit du réseau, garantissant que les nœuds puissants gèrent les tâches complexes sans ralentissement.
  - Symphonie (Consensus) :
    - Divise les calculs IA en sous-tâches parallèles pour la vérification. Plusieurs nœuds valident séparément les étapes du processus et les résultats.
    - Empêche les grandes tâches IA de surcharger le réseau en distribuant les charges de vérification sur plusieurs nœuds.
  - vTune :
    - Montre comment vérifier le réglage fin des modèles effectué par les nœuds sur chaîne en utilisant des vérifications de données "backdoor".
    - Illustre la capacité plus large de Ritual Chain à gérer des tâches IA plus longues et plus complexes avec des hypothèses de confiance minimales.
- **Pourquoi c'est important**
  Les marchés de frais traditionnels et les modèles de consensus ont du mal avec les charges de travail IA lourdes ou diverses. En redessinant les deux, Ritual Chain peut allouer dynamiquement les tâches et vérifier les résultats, élargissant les possibilités sur chaîne bien au-delà de la logique de base des jetons ou des contrats.

### 3. **Applications Natives**

- **Ce qu'elles font**
  En s'appuyant sur Infernet et Ritual Chain, les applications natives incluent un marché de modèles et un réseau de validation, montrant comment la fonctionnalité pilotée par l'IA peut être intégrée et monétisée nativement sur chaîne.
- **Composants clés**
  - Marché de modèles :
    - Tokenise les modèles d'IA (et éventuellement les variantes ajustées) en tant qu'actifs sur chaîne.
    - Permet aux développeurs d'acheter, vendre, ou licencier des modèles d'IA, avec des revenus récompensés aux créateurs de modèles et aux fournisseurs de calcul/données.
  - Réseau de validation & "Rollup-as-a-Service" :
    - Offre aux protocoles externes (par exemple, L2s) un environnement fiable pour calculer et vérifier des tâches complexes comme les preuves à connaissance zéro ou les requêtes pilotées par l'IA.
    - Fournit des solutions de rollup personnalisées exploitant l'EVM++ de Ritual, les fonctionnalités de planification, et la conception du marché des frais.
- **Pourquoi c'est important**
  En rendant les modèles d'IA directement échangeables et vérifiables sur chaîne, Ritual étend la fonctionnalité de la blockchain à un marché pour les services et ensembles de données IA. Le réseau plus large peut également exploiter l'infrastructure de Ritual pour un calcul spécialisé, formant un écosystème unifié où les tâches et preuves IA sont à la fois moins chères et plus transparentes.

### Développement de l'écosystème de Ritual

La vision de Ritual d'un "réseau d'infrastructure IA ouvert" va de pair avec la création d'un écosystème robuste. Au-delà de la conception du produit principal, l'équipe a établi des partenariats dans le stockage de modèles, le calcul, les systèmes de preuve, et les applications IA pour s'assurer que chaque couche du réseau reçoit un soutien expert. En même temps, Ritual investit massivement dans les ressources pour développeurs et la croissance communautaire pour favoriser les cas d'utilisation réels sur sa chaîne.

1. **Collaborations écosystémiques**
  - **Stockage et intégrité des modèles** : Le stockage des modèles IA avec Arweave garantit qu'ils restent à l'épreuve des falsifications.
  - **Partenariats de calcul** : IO.net fournit un calcul décentralisé correspondant aux besoins de mise à l'échelle de Ritual.
  - **Systèmes de preuve & Layer-2** : Les collaborations avec Starkware et Arbitrum étendent les capacités de génération de preuves pour les tâches basées sur l'EVM.
  - **Applications consommateurs IA** : Les partenariats avec Myshell et Story Protocol apportent plus de services pilotés par l'IA sur chaîne.
  - **Couche d'actifs de modèles** : Pond, Allora, et 0xScope fournissent des ressources IA supplémentaires et repoussent les limites de l'IA sur chaîne.
  - **Améliorations de la confidentialité** : Nillion renforce la couche de confidentialité de Ritual Chain.
  - **Sécurité & Staking** : EigenLayer aide à sécuriser et à miser sur le réseau.
  - **Disponibilité des données** : Les modules EigenLayer et Celestia améliorent la disponibilité des données, vitale pour les charges de travail IA.
2. **Expansion des applications**
  - **Ressources pour développeurs** : Des guides complets détaillent comment lancer des conteneurs IA, exécuter PyTorch, et intégrer GPT-4 ou Mistral-7B dans les tâches sur chaîne. Des exemples pratiques—comme générer des NFT via Infernet—abaissent les barrières pour les nouveaux venus.
  - **Financement & Accélération** : L'accélérateur Ritual Altar et le projet Ritual Realm fournissent du capital et du mentorat aux équipes construisant des dApps sur Ritual Chain.
  - Projets notables :
    - **Anima** : Assistant DeFi multi-agent qui traite les requêtes en langage naturel à travers le prêt, les échanges, et les stratégies de rendement.
    - **Opus** : Jetons mèmes générés par IA avec des flux de trading programmés.
    - **Relic** : Intègre des modèles prédictifs pilotés par l'IA dans les AMM, visant un trading sur chaîne plus flexible et efficace.
    - **Tithe** : Exploite le ML pour ajuster dynamiquement les protocoles de prêt, améliorant le rendement tout en réduisant le risque.

En alignant la conception des produits, les partenariats, et un ensemble diversifié de dApps pilotées par l'IA, Ritual se positionne comme un hub multifacette pour le Web3 x IA. Son approche axée sur l'écosystème—complétée par un soutien ample aux développeurs et de réelles opportunités de financement—pose les bases pour une adoption plus large de l'IA sur chaîne.

## Perspectives de Ritual

Les plans de produits et l'écosystème de Ritual semblent prometteurs, mais de nombreuses lacunes techniques subsistent. Les développeurs doivent encore résoudre des problèmes fondamentaux comme la mise en place de points de terminaison d'inférence de modèles, l'accélération des tâches IA, et la coordination de plusieurs nœuds pour des calculs à grande échelle. Pour l'instant, l'architecture de base peut gérer des cas d'utilisation plus simples ; le véritable défi est d'inspirer les développeurs à construire des applications pilotées par l'IA plus imaginatives sur chaîne.

À l'avenir, Ritual pourrait se concentrer moins sur la finance et davantage sur la rendabilité des actifs de calcul ou de modèles. Cela attirerait des participants et renforcerait la sécurité du réseau en liant le jeton de la chaîne à des charges de travail IA pratiques. Bien que les détails sur la conception du jeton soient encore flous, il est clair que la vision de Ritual est de déclencher une nouvelle génération d'applications complexes, décentralisées, et pilotées par l'IA—poussant le Web3 dans un territoire plus profond et plus créatif.