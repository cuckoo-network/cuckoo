```
---
title: "Ritual: La Apuesta de $25M por Hacer Pensar a las Blockchains"
tags: [blockchain, IA, computación descentralizada, contratos inteligentes]
keywords: [Ritual, IA en blockchain, IA descentralizada, contratos inteligentes, infraestructura Web3]
authors: [lark]
description: Ritual, una startup fundada por el ex inversor de Polychain Niraj Pant y Akilesh Potti, es pionera en la integración de capacidades de IA en entornos blockchain, respaldada por una Serie A de $25M. La compañía busca revolucionar los contratos inteligentes y las aplicaciones descentralizadas con funcionalidades impulsadas por IA.
image: "https://opengraph-image.blockeden.xyz/api/og-cuckoo-network?title=Ritual:%20La%20Apuesta%20de%20$25M%20por%20Hacer%20Pensar%20a%20las%20Blockchains"
---
```

# Ritual: La Apuesta de $25M para Hacer Pensar a las Blockchains

Ritual, fundado en 2023 por el ex inversor de Polychain Niraj Pant y Akilesh Potti, es un proyecto ambicioso en la intersección de blockchain e IA. Respaldado por una Serie A de $25M liderada por Archetype y una inversión estratégica de Polychain Capital, la compañía busca abordar las brechas críticas de infraestructura para habilitar interacciones complejas tanto dentro como fuera de la cadena. Con un equipo de 30 expertos de instituciones y firmas líderes, Ritual está construyendo un protocolo que integra capacidades de IA directamente en entornos blockchain, apuntando a casos de uso como contratos inteligentes generados por lenguaje natural y protocolos de préstamo dinámicos impulsados por el mercado.

![Ritual: La Apuesta de $25M para Hacer Pensar a las Blockchains](https://opengraph-image.blockeden.xyz/api/og-cuckoo-network?title=Ritual:%20La%20Apuesta%20de%20$25M%20para%20Hacer%20Pensar%20a%20las%20Blockchains)

## ¿Por qué los clientes necesitan Web3 para la IA?

La integración de Web3 y la IA puede aliviar muchas de las limitaciones observadas en los sistemas de IA tradicionales y centralizados.

1.  **La infraestructura descentralizada ayuda a reducir el riesgo de manipulación**: cuando los cálculos de IA y las salidas del modelo son ejecutados por múltiples nodos operados de forma independiente, resulta mucho más difícil para cualquier entidad única —ya sea el desarrollador o un intermediario corporativo— manipular los resultados. Esto refuerza la confianza del usuario y la transparencia en las aplicaciones impulsadas por IA.

2.  **La IA nativa de Web3 amplía el alcance de los contratos inteligentes en cadena más allá de la lógica financiera básica.** Con la IA en el circuito, los contratos pueden responder a datos de mercado en tiempo real, indicaciones generadas por el usuario e incluso tareas de inferencia complejas. Esto permite casos de uso como el trading algorítmico, las decisiones de préstamo automatizadas y las interacciones en el chat (por ejemplo, FrenRug) que serían imposibles con las API de IA existentes y aisladas. Dado que las salidas de la IA son verificables y están integradas con activos en cadena, estas decisiones de alto valor o alto riesgo pueden ejecutarse con mayor confianza y menos intermediarios.

3.  **Distribuir la carga de trabajo de la IA a través de una red puede reducir potencialmente los costos y mejorar la escalabilidad.** Aunque los cálculos de IA pueden ser costosos, un entorno Web3 bien diseñado se nutre de un conjunto global de recursos computacionales en lugar de un único proveedor centralizado. Esto abre la puerta a precios más flexibles, una fiabilidad mejorada y la posibilidad de flujos de trabajo de IA continuos y en cadena, todo ello respaldado por incentivos compartidos para que los operadores de nodos ofrezcan su poder de cómputo.

## El Enfoque de Ritual

El sistema tiene tres capas principales—**Infernet Oracle**, **Ritual Chain** (infraestructura y protocolo), y **Aplicaciones Nativas**—cada una diseñada para abordar diferentes desafíos en el espacio Web3 x IA.

### 1. **Infernet Oracle**

- **Qué Hace**
  Infernet es el primer producto de Ritual, actuando como un puente entre los contratos inteligentes en cadena (on-chain) y la computación de IA fuera de cadena (off-chain). En lugar de solo obtener datos externos, coordina tareas de inferencia de modelos de IA, recopila resultados y los devuelve en cadena de manera verificable.
- **Componentes Clave**
  - **Contenedores**: Entornos seguros para alojar cualquier carga de trabajo de IA/ML (ej., modelos ONNX, Torch, Hugging Face, GPT-4).
  - **infernet-ml**: Una biblioteca optimizada para desplegar flujos de trabajo de IA/ML, ofreciendo integraciones listas para usar con marcos de modelos populares.
  - **Infernet SDK**: Proporciona una interfaz estandarizada para que los desarrolladores puedan escribir fácilmente contratos inteligentes que soliciten y consuman resultados de inferencia de IA.
  - **Nodos Infernet**: Desplegados en servicios como GCP o AWS, estos nodos escuchan las solicitudes de inferencia en cadena, ejecutan tareas en contenedores y entregan los resultados de vuelta en cadena.
  - **Pago y Verificación**: Gestiona la distribución de tarifas (entre nodos de computación y verificación) y soporta varios métodos de verificación para asegurar que las tareas se ejecuten honestamente.
- **Por Qué Es Importante**
  Infernet va más allá de un oráculo tradicional al verificar las computaciones de IA fuera de cadena, no solo las fuentes de datos. También soporta la programación de trabajos de inferencia repetidos o sensibles al tiempo, reduciendo la complejidad de vincular tareas impulsadas por IA a aplicaciones en cadena.

### 2. **Ritual Chain**

Ritual Chain integra características amigables con la IA tanto en las capas de infraestructura como de protocolo. Está diseñada para manejar interacciones frecuentes, automatizadas y complejas entre contratos inteligentes y computación fuera de la cadena, yendo mucho más allá de lo que las L1 típicas pueden gestionar.

#### 2.1 **Capa de Infraestructura**

- **Qué Hace**
  La infraestructura de Ritual Chain soporta flujos de trabajo de IA más complejos que las blockchains estándar. A través de módulos precompilados, un planificador y una extensión de EVM llamada EVM++, busca facilitar tareas de IA frecuentes o en streaming, abstracciones de cuenta robustas e interacciones de contrato automatizadas.

- **Componentes Clave**

  - Módulos Precompilados

    :

    - **Extensiones EIP (p. ej., EIP-665, EIP-5027)** eliminan los límites de longitud del código, reducen el gas para las firmas y permiten la confianza entre la cadena y las tareas de IA fuera de la cadena.
    - **Precompilaciones Computacionales** estandarizan marcos para la inferencia de IA, pruebas de conocimiento cero y el ajuste fino de modelos dentro de los contratos inteligentes.

  - **Planificador**: Elimina la dependencia de contratos "Keeper" externos al permitir que las tareas se ejecuten en un horario fijo (p. ej., cada 10 minutos). Crucial para actividades continuas impulsadas por IA.

  - **EVM++**: Mejora la EVM con abstracción de cuenta nativa (EIP-7702), permitiendo que los contratos aprueben automáticamente las transacciones por un período determinado. Esto soporta decisiones continuas impulsadas por IA (p. ej., auto-trading) sin intervención humana.

- **Por Qué Es Importante**
  Al integrar características centradas en IA directamente en su infraestructura, Ritual Chain optimiza las computaciones de IA complejas, repetitivas o sensibles al tiempo. Los desarrolladores obtienen un entorno más robusto y automatizado para construir dApps verdaderamente "inteligentes".

#### 2.2 **Capa de Protocolo de Consenso**

- **Qué Hace**
  La capa de protocolo de Ritual Chain aborda la necesidad de gestionar eficientemente diversas tareas de IA. Los trabajos de inferencia grandes y los nodos de cómputo heterogéneos requieren una lógica de mercado de tarifas especial y un enfoque de consenso novedoso para garantizar una ejecución y verificación fluidas.
- **Componentes Clave**
  - Resonance (Mercado de Tarifas):
    - Introduce los roles de "subastador" y "corredor" para emparejar tareas de IA de complejidad variable con nodos de cómputo adecuados.
    - Emplea una asignación de tareas casi exhaustiva o "agrupada" para maximizar el rendimiento de la red, asegurando que los nodos potentes manejen tareas complejas sin interrupciones.
  - Symphony (Consenso):
    - Divide los cómputos de IA en subtareas paralelas para su verificación. Múltiples nodos validan los pasos del proceso y las salidas por separado.
    - Evita que las tareas de IA grandes sobrecarguen la red distribuyendo las cargas de trabajo de verificación entre múltiples nodos.
  - vTune:
    - Demuestra cómo verificar el ajuste fino de modelos realizado por nodos en la cadena utilizando comprobaciones de datos de "puerta trasera".
    - Ilustra la capacidad más amplia de Ritual Chain para manejar tareas de IA más largas y complejas con supuestos de confianza mínimos.
- **Por Qué Es Importante**
  Los mercados de tarifas y los modelos de consenso tradicionales tienen dificultades con las cargas de trabajo de IA pesadas o diversas. Al rediseñar ambos, Ritual Chain puede asignar tareas dinámicamente y verificar resultados, expandiendo las posibilidades en la cadena mucho más allá de la lógica básica de tokens o contratos.

### 3. **Aplicaciones Nativas**

- **Qué Hacen**
  Construidas sobre Infernet y Ritual Chain, las aplicaciones nativas incluyen un mercado de modelos y una red de validación, mostrando cómo la funcionalidad impulsada por IA puede integrarse y monetizarse de forma nativa en la cadena.
- **Componentes Clave**
  - Mercado de Modelos:
    - Tokeniza modelos de IA (y posiblemente variantes ajustadas) como activos en cadena.
    - Permite a los desarrolladores comprar, vender o licenciar modelos de IA, con las ganancias recompensando a los creadores de modelos y a los proveedores de computación/datos.
  - Red de Validación y “Rollup-as-a-Service”:
    - Ofrece a protocolos externos (ej., L2s) un entorno fiable para computar y verificar tareas complejas como pruebas de conocimiento cero o consultas impulsadas por IA.
    - Proporciona soluciones de rollup personalizadas aprovechando el EVM++ de Ritual, las características de programación y el diseño del mercado de tarifas.
- **Por Qué Es Importante**
  Al hacer que los modelos de IA sean directamente comerciables y verificables en cadena, Ritual extiende la funcionalidad de blockchain a un mercado de servicios y conjuntos de datos de IA. La red más amplia también puede aprovechar la infraestructura de Ritual para computación especializada, formando un ecosistema unificado donde las tareas y pruebas de IA son más baratas y transparentes.

### Desarrollo del Ecosistema de Ritual

La visión de Ritual de una "red de infraestructura de IA abierta" va de la mano con la forja de un ecosistema robusto. Más allá del diseño central del producto, el equipo ha establecido asociaciones en almacenamiento de modelos, computación, sistemas de prueba y aplicaciones de IA para asegurar que cada capa de la red reciba soporte experto. Al mismo tiempo, Ritual invierte fuertemente en recursos para desarrolladores y en el crecimiento de la comunidad para fomentar casos de uso reales en su cadena.

1.  **Colaboraciones del Ecosistema**
    -   **Almacenamiento e Integridad de Modelos**: Almacenar modelos de IA con Arweave asegura que permanezcan a prueba de manipulaciones.
    -   **Asociaciones de Computación**: IO.net suministra computación descentralizada que se ajusta a las necesidades de escalado de Ritual.
    -   **Sistemas de Prueba y Capa-2**: Las colaboraciones con Starkware y Arbitrum extienden las capacidades de generación de pruebas para tareas basadas en EVM.
    -   **Aplicaciones de IA para Consumidores**: Las asociaciones con Myshell y Story Protocol traen más servicios impulsados por IA a la cadena.
    -   **Capa de Activos de Modelos**: Pond, Allora y 0xScope proporcionan recursos de IA adicionales y empujan los límites de la IA en cadena.
    -   **Mejoras de Privacidad**: Nillion fortalece la capa de privacidad de Ritual Chain.
    -   **Seguridad y Staking**: EigenLayer ayuda a asegurar y hacer staking en la red.
    -   **Disponibilidad de Datos**: Los módulos de EigenLayer y Celestia mejoran la disponibilidad de datos, vital para las cargas de trabajo de IA.
2.  **Expansión de Aplicaciones**
    -   **Recursos para Desarrolladores**: Guías completas detallan cómo iniciar contenedores de IA, ejecutar PyTorch e integrar GPT-4 o Mistral-7B en tareas en cadena. Ejemplos prácticos —como la generación de NFT a través de Infernet— reducen las barreras para los recién llegados.
    -   **Financiamiento y Aceleración**: El acelerador Ritual Altar y el proyecto Ritual Realm proporcionan capital y mentoría a los equipos que construyen dApps en Ritual Chain.
    -   Proyectos Notables:
        -   **Anima**: Asistente DeFi multiagente que procesa solicitudes en lenguaje natural para préstamos, intercambios y estrategias de rendimiento.
        -   **Opus**: Tokens meme generados por IA con flujos de trading programados.
        -   **Relic**: Incorpora modelos predictivos impulsados por IA en AMM, buscando un trading en cadena más flexible y eficiente.
        -   **Tithe**: Aprovecha el ML para ajustar dinámicamente los protocolos de préstamo, mejorando el rendimiento y reduciendo el riesgo.

Al alinear el diseño del producto, las asociaciones y un conjunto diverso de dApps impulsadas por IA, Ritual se posiciona como un centro multifacético para Web3 x IA. Su enfoque de ecosistema primero —complementado con un amplio soporte para desarrolladores y oportunidades de financiación reales— sienta las bases para una adopción más amplia de la IA en cadena.

## Perspectiva de Ritual

Los planes de producto y el ecosistema de Ritual parecen prometedores, pero aún quedan muchas lagunas técnicas. Los desarrolladores todavía necesitan resolver problemas fundamentales como la configuración de puntos finales de inferencia de modelos, la aceleración de tareas de IA y la coordinación de múltiples nodos para cálculos a gran escala. Por ahora, la arquitectura central puede manejar casos de uso más simples; el verdadero desafío es inspirar a los desarrolladores a construir aplicaciones más imaginativas impulsadas por IA en la cadena.

En el futuro, Ritual podría centrarse menos en las finanzas y más en hacer que los activos de cómputo o de modelos sean comerciables. Esto atraería a participantes y fortalecería la seguridad de la red al vincular el token de la cadena a cargas de trabajo prácticas de IA. Aunque los detalles sobre el diseño del token aún no están claros, está claro que la visión de Ritual es encender una nueva generación de aplicaciones complejas, descentralizadas e impulsadas por IA, llevando la Web3 a un territorio más profundo y creativo.