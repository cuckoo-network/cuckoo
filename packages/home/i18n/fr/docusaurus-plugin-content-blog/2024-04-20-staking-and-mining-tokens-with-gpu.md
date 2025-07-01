---
title: Jalonnement et minage de tokens avec GPU
authors: [lark]
tags: [entreprise, feuille de route]
image: "https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp"
---

Cuckoo Network est la première place de marché décentralisée de services de modèles d'IA qui récompense les passionnés d'IA, les développeurs et les mineurs de GPU avec des tokens crypto. Sur notre plateforme, les mineurs partagent leurs GPU avec les créateurs d'applications d'IA générative, également appelés coordinateurs, afin d'exécuter des inférences pour les clients finaux, permettant ainsi à tous les contributeurs de gagner des tokens crypto.

![Jalonnement et minage de tokens avec GPU](https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp "Jalonnement et minage de tokens avec GPU")

> Mise à jour du 2024-07-09 : Ce billet concerne le testnet. Consultez [ce billet](/blog/2024/07/15/cuckoo-network-mining-gpu-july-2024) pour le mainnet.

Lorsque les mineurs partagent leurs GPU, comment s'assurer qu'ils ne falsifient pas les résultats ? Cuckoo Network établit la confiance et l'intégrité grâce au jalonnement, aux récompenses et au slashing. Aujourd'hui, nous sommes ravis d'annoncer que les stakers peuvent rejoindre notre testnet et garantir la confiance pour ce réseau d'IA décentralisé.

## **Rejoignez le testnet dès aujourd'hui**

Pour les stakers

1. Obtenez des tokens CAI depuis le [faucet du testnet](https://cuckoo.network/portal/faucet)
2. Jalonnez des tokens sur le [portail de jalonnement / jalonnement testnet](https://cuckoo.network/portal/staking/testnet)
3. Votez pour les coordinateurs ou les mineurs

![Portail Cuckoo - Jalonnement](https://cuckoo-network.b-cdn.net/staking-portal-screenshot.webp "Portail Cuckoo - Jalonnement")

Pour les mineurs de GPU

1. Obtenez des tokens CAI en contactant les administrateurs via https://cuckoo.network/tg ou https://cuckoo.network/dc
2. Jalonnez > 20K tokens sur le portail de jalonnement
3. Enregistrez l'adresse du mineur (`minerAddress`) et les informations d'introduction. Il est recommandé que l'adresse du mineur soit différente de votre adresse de staker.
4. Exécutez le nœud de mineur avec la clé privée de l'adresse du mineur (`minerAddress`).

Pour les coordinateurs

1. Obtenez des tokens CAI en contactant les administrateurs via https://cuckoo.network/tg ou https://cuckoo.network/dc
2. Jalonnez > 2M tokens sur le portail de jalonnement
3. Enregistrez l'adresse du coordinateur (`coordinatorAddress`) et les informations d'introduction. Il est recommandé que l'adresse du coordinateur soit différente de votre adresse de staker.
4. Exécutez le nœud de coordinateur avec la clé privée de l'adresse du mineur (`minerAddress`).

## **Comment ça marche ?**

L'ensemble du système implique plusieurs rôles qui travaillent ensemble :

- **Staker de mineur GPU :** Individus ou entités exécutant des ressources de calcul pour effectuer des tâches d'IA. Ils détiennent des tokens CAI dans un portefeuille pour les jalonner dans le réseau. Plus ils jalonnent, plus ils ont de chances de se voir attribuer des tâches GPU.
- **Développeurs d'applications (Staker coordinateur) :** Développeurs créant des applications d'IA sur Cuckoo Network, supervisant la distribution des tâches et le contrôle qualité. Ils détiennent des tokens CAI dans un portefeuille pour les jalonner dans le réseau. Plus ils jalonnent, plus ils ont de chances d'obtenir des mineurs GPU disposés à travailler avec eux.
- **Stakers :** Participants qui jalonnent des tokens pour voter pour des mineurs et des coordinateurs dignes de confiance. Ils seront récompensés pour leurs jalonnements.
- **Contrat de jalonnement :** Un smart contract où les mineurs et les coordinateurs s'enregistrent et où les stakers votent pour eux.
- **Nœud de coordinateur :** Les applications d'IA générative appellent les API de ce nœud pour proposer des tâches GPU, comme la génération d'images à partir d'un prompt, dans le réseau.
- **Nœud de mineur :** Les fournisseurs de GPU exécutent le nœud de mineur pour entreprendre l'exécution des tâches avec des GPU.

![img](https://cuckoo-network.b-cdn.net/cuckoo-staking@2x.webp)

L'attribution des tâches et l'ordonnanceur sont des fonctions critiques au sein de l'écosystème Cuckoo AI, assurant une distribution efficace et équitable des tâches des coordinateurs aux mineurs.

Cependant, les nœuds doivent établir la confiance avant d'intégrer le système. Ainsi, tous les participants doivent jalonner des tokens avant d'assumer un rôle quelconque.

Ensuite, les créateurs d'applications d'IA générative, également appelés coordinateurs, exécutent le nœud de coordinateur avec une clé privée dont l'adresse a été enregistrée auprès des contrats de jalonnement. Ce nœud lit l'enregistrement des mineurs à partir des contrats de jalonnement, puis écoute les requêtes provenant des nœuds de mineur.

Les fournisseurs de GPU exécutent le nœud de mineur qui récupérera également les informations des contrats de jalonnement et interrogera les coordinateurs pour les tâches en attente.

Lorsque l'application d'IA générative propose une tâche au coordinateur, celui-ci attribue la tâche aux adresses de mineurs actives en fonction de leurs jalonnements comme poids. Ensuite, les mineurs correspondants travaillent sur la tâche et soumettent finalement les résultats au coordinateur.

## **Résumé**

Le Cuckoo Network introduit une plateforme unique d'IA décentralisée de type « AI-to-Earn », mettant l'accent sur la collaboration et la confiance. En employant des mécanismes de jalonnement et des incitations, il assure l'authenticité et l'engagement de tous les participants, y compris les développeurs, les mineurs de GPU et les stakers. Cette approche garantit une distribution fiable des tâches et favorise un environnement durable pour l'avancement des technologies d'IA décentralisées. Cuckoo invite davantage d'utilisateurs à explorer son réseau, leur offrant l'opportunité de contribuer au développement de l'IA tout en gagnant de la cryptomonnaie.

- source : https://cuckoo.network/blog/2024/04/20/staking-and-mining-tokens-with-gpu
- telegram : https://cuckoo.network/tg
- discord : https://cuckoo.network/dc