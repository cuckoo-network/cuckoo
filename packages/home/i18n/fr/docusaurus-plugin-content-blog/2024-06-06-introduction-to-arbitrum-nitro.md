---
title: "Introduction à l'Architecture d'Arbitrum Nitro"
authors: [lark]
tags: [ingénierie, recherche]
image: https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp
---

Arbitrum Nitro, développé par Offchain Labs, est un protocole blockchain de deuxième génération de couche 2 conçu pour améliorer le débit, la finalité et la résolution des litiges. Il s'appuie sur le protocole Arbitrum original, apportant des améliorations significatives qui répondent aux besoins modernes de la blockchain.

![](https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp)

### Propriétés Clés d'Arbitrum Nitro

Arbitrum Nitro fonctionne comme une solution de couche 2 au-dessus d'Ethereum, prenant en charge l'exécution de contrats intelligents utilisant le code de la machine virtuelle Ethereum (EVM). Cela garantit la compatibilité avec les applications et outils Ethereum existants. Le protocole garantit à la fois la sécurité et le progrès, en supposant que la chaîne Ethereum sous-jacente reste sûre et active, et qu'au moins un participant au protocole Nitro se comporte honnêtement.

### Approche de Conception

L'architecture de Nitro est construite sur quatre principes fondamentaux :

- **Séquençage Suivi d'une Exécution Déterministe :** Les transactions sont d'abord séquencées, puis traitées de manière déterministe. Cette approche en deux phases assure un environnement d'exécution cohérent et fiable.
- **Geth au Cœur :** Nitro utilise le package go-ethereum (geth) pour l'exécution principale et la maintenance de l'état, assurant une haute compatibilité avec Ethereum.
- **Séparation de l'Exécution et de la Preuve :** La fonction de transition d'état est compilée pour une exécution native et en web assembly (wasm) afin de faciliter une exécution efficace et une preuve structurée et indépendante de la machine.
- **Rollup Optimiste avec Preuves de Fraude Interactives :** S'appuyant sur le design original d'Arbitrum, Nitro utilise un protocole de rollup optimiste amélioré avec un mécanisme sophistiqué de preuve de fraude.

### Séquençage et Exécution

Le traitement des transactions dans Nitro implique deux composants clés : le Séquenceur et la Fonction de Transition d'État (STF).

![Architecture d'Arbitrum Nitro](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro.webp "Architecture d'Arbitrum Nitro")

- **Le Séquenceur** : Ordonne les transactions entrantes et s'engage sur cet ordre. Il garantit que la séquence des transactions est connue et fiable, la publiant à la fois comme un flux en temps réel et comme des lots de données compressées sur la chaîne Ethereum de couche 1. Cette double approche améliore la fiabilité et empêche la censure.
- **Exécution Déterministe** : La STF traite les transactions séquencées, mettant à jour l'état de la chaîne et produisant de nouveaux blocs. Ce processus est déterministe, ce qui signifie que le résultat dépend uniquement des données de transaction et de l'état précédent, assurant la cohérence à travers le réseau.

### Architecture Logicielle : Geth au Cœur

![Architecture d'Arbitrum Nitro, en Couches](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro-architecture-layered.webp "Architecture d'Arbitrum Nitro, en Couches")

L'architecture logicielle de Nitro est structurée en trois couches :

- **Couche de Base (Geth Core)** : Cette couche gère l'exécution des contrats EVM et maintient les structures de données d'état Ethereum.
- **Couche Intermédiaire (ArbOS)** : Logiciel personnalisé qui fournit des fonctionnalités de couche 2, y compris la décompression des lots de séquenceur, la gestion des coûts de gaz et le support des fonctionnalités inter-chaînes.
- **Couche Supérieure** : Tirée de geth, cette couche gère les connexions, les requêtes RPC entrantes et d'autres fonctions de nœud de haut niveau.

### Interaction Inter-Chaînes

Arbitrum Nitro prend en charge des interactions inter-chaînes sécurisées grâce à des mécanismes comme la Boîte de Sortie, la Boîte de Réception et les Tickets Réessayables.

- **La Boîte de Sortie** : Permet les appels de contrat de la couche 2 à la couche 1, assurant que les messages sont transférés et exécutés en toute sécurité sur Ethereum.
- **La Boîte de Réception** : Gère les transactions envoyées à Nitro depuis Ethereum, garantissant qu'elles sont incluses dans le bon ordre.
- **Tickets Réessayables** : Permet la resoumission des transactions échouées, assurant la fiabilité et réduisant le risque de transactions perdues.

### Gaz et Frais

Nitro utilise un mécanisme sophistiqué de mesure et de tarification du gaz pour gérer les coûts des transactions :

- **Mesure et Tarification du Gaz L2** : Suit l'utilisation du gaz et ajuste la redevance de base de manière algorithmique pour équilibrer la demande et la capacité.
- **Mesure et Tarification des Données L1** : Assure que les coûts associés aux interactions de couche 1 sont couverts, en utilisant un algorithme de tarification adaptatif pour répartir ces coûts avec précision entre les transactions.

### Conclusion

Cuckoo Network est confiant dans l'investissement dans le développement d'Arbitrum. Les solutions avancées de couche 2 d'Arbitrum Nitro offrent une évolutivité inégalée, une finalité plus rapide et une résolution efficace des litiges. Sa compatibilité avec Ethereum assure un environnement sécurisé et efficace pour nos applications décentralisées, en accord avec notre engagement envers l'innovation et la performance.

- source: https://cuckoo.network/blog/2024/06/06/introduction-to-arbitrum-nitro
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc