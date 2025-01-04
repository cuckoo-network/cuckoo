---
title: "Protocole de Preuve d'Échantillonnage : Incitation à l'Honnêteté et Pénalisation de la Malhonnêteté dans l'Inférence IA Décentralisée"
authors: [lark]
tags: [recherche]
image: https://cuckoo-network.b-cdn.net/proof-of-sampling-posp-protocol-decentralized-ai.webp
description: Découvrez l'approche unique du protocole de Preuve d'Échantillonnage (PoSP) pour inciter à un comportement honnête et pénaliser la malhonnêteté parmi les fournisseurs de GPU, assurant la sécurité et la fiabilité des systèmes d'inférence IA décentralisés.
---

Dans l'IA décentralisée, assurer l'intégrité et la fiabilité des fournisseurs de GPU est crucial. Le protocole de Preuve d'Échantillonnage (PoSP), tel que décrit dans les recherches récentes de Holistic AI, fournit un mécanisme sophistiqué pour inciter les bons acteurs tout en pénalisant les mauvais. Voyons comment fonctionne ce protocole, ses incitations économiques, ses pénalités et son application à l'inférence IA décentralisée.

## Incitations pour un Comportement Honnête

### Récompenses Économiques

Au cœur du protocole PoSP se trouvent des incitations économiques conçues pour encourager une participation honnête. Les nœuds, agissant en tant qu'asserteurs et validateurs, sont récompensés en fonction de leurs contributions :

- **Asserteurs :** Reçoivent une récompense (RA) si leur sortie calculée est correcte et non contestée.
- **Validateurs :** Partagent la récompense (RV/n) si leurs résultats s'alignent avec ceux de l'asserteur et sont vérifiés comme corrects.

### Équilibre de Nash Unique

Le protocole PoSP est conçu pour atteindre un équilibre de Nash unique en stratégies pures, où tous les nœuds sont motivés à agir honnêtement. En alignant le profit individuel avec la sécurité du système, le protocole garantit que l'honnêteté est la stratégie la plus rentable pour les participants.

## Pénalités pour un Comportement Malhonnête

### Mécanisme de Pénalisation

Pour dissuader un comportement malhonnête, le protocole PoSP utilise un mécanisme de pénalisation. Si un asserteur ou un validateur est pris en flagrant délit de malhonnêteté, il subit des pénalités économiques significatives (S). Cela garantit que le coût de la malhonnêteté dépasse de loin tout gain potentiel à court terme.

### Mécanisme de Défi

Des défis aléatoires sécurisent davantage le système. Avec une probabilité prédéterminée (p), le protocole déclenche un défi où plusieurs validateurs recalculent la sortie de l'asserteur. Si des divergences sont trouvées, les acteurs malhonnêtes sont pénalisés. Ce processus de sélection aléatoire rend difficile pour les mauvais acteurs de colluder et de tricher sans être détectés.

## Étapes du Protocole PoSP

1. **Sélection de l'Asserteur :** Un nœud est sélectionné aléatoirement pour agir en tant qu'asserteur, calculant et produisant une valeur.

2. Probabilité de Défi :

    Le système peut déclencher un défi basé sur une probabilité prédéterminée.

   - **Pas de Défi :** L'asserteur est récompensé si aucun défi n'est déclenché.
   - **Défi Déclenché :** Un nombre défini (n) de validateurs est sélectionné aléatoirement pour vérifier la sortie de l'asserteur.

3. Validation :

    Chaque validateur calcule indépendamment le résultat et le compare à la sortie de l'asserteur.

   - **Correspondance :** Si tous les résultats correspondent, l'asserteur et les validateurs sont récompensés.
   - **Non-Correspondance :** Un processus d'arbitrage détermine l'honnêteté de l'asserteur et des validateurs.

4. **Pénalités :** Les nœuds malhonnêtes sont pénalisés, tandis que les validateurs honnêtes reçoivent leur part de récompense.

## spML

Le protocole spML (Machine Learning basé sur l'échantillonnage) est une implémentation du protocole de Preuve d'Échantillonnage (PoSP) au sein d'un réseau d'inférence IA décentralisé.

### Étapes Clés

1. **Entrée Utilisateur :** L'utilisateur envoie son entrée à un serveur sélectionné aléatoirement (asserteur) avec sa signature numérique.
2. **Sortie du Serveur :** Le serveur calcule la sortie et la renvoie à l'utilisateur avec un hachage du résultat.
3. **Mécanisme de Défi :**
   - Avec une probabilité prédéterminée (p), le système déclenche un défi où un autre serveur (validateur) est sélectionné aléatoirement pour vérifier le résultat.
   - Si aucun défi n'est déclenché, l'asserteur reçoit une récompense (R) et le processus se termine.
4. **Vérification :**
   - Si un défi est déclenché, l'utilisateur envoie la même entrée au validateur.
   - Le validateur calcule le résultat et le renvoie à l'utilisateur avec un hachage.
5. **Comparaison :**
   - L'utilisateur compare les hachages des sorties de l'asserteur et du validateur.
   - Si les hachages correspondent, l'asserteur et le validateur sont récompensés, et l'utilisateur reçoit une réduction sur les frais de base.
   - Si les hachages ne correspondent pas, l'utilisateur diffuse les deux hachages au réseau.
6. **Arbitrage :**
   - Le réseau vote pour déterminer l'honnêteté de l'asserteur et du validateur en fonction des divergences.
   - Les nœuds honnêtes sont récompensés, tandis que les malhonnêtes sont pénalisés (pénalisés).

### Composants et Mécanismes Clés
- **Exécution ML Déterministe :** Utilise l'arithmétique à virgule fixe et des bibliothèques de virgule flottante basées sur logiciel pour garantir des résultats cohérents et reproductibles.
- **Conception Sans État :** Traite chaque requête comme indépendante, maintenant l'absence d'état tout au long du processus ML.
- **Participation Sans Permission :** Permet à quiconque de rejoindre le réseau et de contribuer en exécutant un serveur IA.
- **Opérations Hors-chaine :** Les inférences IA sont calculées hors-chaine pour réduire la charge sur la blockchain, avec les résultats et les signatures numériques relayés directement aux utilisateurs.
- **Opérations Sur-chaine :** Les fonctions critiques, telles que les calculs de solde et les mécanismes de défi, sont gérées sur-chaine pour assurer transparence et sécurité.

### Avantages de spML
- **Haute Sécurité :** Atteint la sécurité grâce à des incitations économiques, garantissant que les nœuds agissent honnêtement en raison des pénalités potentielles pour malhonnêteté.
- **Faible Surcharge de Calcul :** Les validateurs n'ont besoin que de comparer les hachages dans la plupart des cas, réduisant la charge de calcul lors de la vérification.
- **Scalabilité :** Peut gérer une activité réseau étendue sans dégradation significative des performances.
- **Simplicité :** Maintient la simplicité dans l'implémentation, améliorant la facilité d'intégration et de maintenance.

### Comparaison avec d'Autres Protocoles
- **Preuve Optimiste de Fraude (opML) :**
  - S'appuie sur des désincitations économiques pour le comportement frauduleux et un mécanisme de résolution des litiges.
  - Vulnérable à l'activité frauduleuse si pas assez de validateurs sont honnêtes.
- **Preuve à Connaissance Nulle (zkML) :**
  - Assure une haute sécurité grâce à des preuves cryptographiques.
  - Confronte des défis en matière de scalabilité et d'efficacité en raison d'une surcharge de calcul élevée.
- **spML :**
  - Combine haute sécurité grâce à des incitations économiques, faible surcharge de calcul et haute scalabilité.
  - Simplifie le processus de vérification en se concentrant sur les comparaisons de hachages, réduisant le besoin de calculs complexes lors des défis.

## Résumé

Le protocole de Preuve d'Échantillonnage (PoSP) équilibre efficacement le besoin d'inciter les bons acteurs et de dissuader les mauvais, assurant la sécurité et la fiabilité globales des systèmes décentralisés. En combinant des récompenses économiques avec des pénalités strictes, PoSP favorise un environnement où le comportement honnête est non seulement encouragé mais nécessaire pour réussir. Alors que l'IA décentralisée continue de croître, des protocoles comme PoSP seront essentiels pour maintenir l'intégrité et la fiabilité de ces systèmes avancés.

- source: https://cuckoo.network/blog/2024/06/17/proof-of-sampling-posp-protocol-decentralized-ai
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc