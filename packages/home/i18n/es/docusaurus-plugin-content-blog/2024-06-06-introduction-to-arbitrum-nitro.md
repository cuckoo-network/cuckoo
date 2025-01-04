---
title: "Introducción a la Arquitectura de Arbitrum Nitro"
authors: [lark]
tags: [ingeniería, investigación]
image: https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp
---

Arbitrum Nitro, desarrollado por Offchain Labs, es un protocolo blockchain de segunda generación de Capa 2 diseñado para mejorar el rendimiento, la finalización y la resolución de disputas. Se basa en el protocolo original de Arbitrum, aportando mejoras significativas que satisfacen las necesidades modernas de blockchain.

![](https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp)

### Propiedades Clave de Arbitrum Nitro

Arbitrum Nitro opera como una solución de Capa 2 sobre Ethereum, apoyando la ejecución de contratos inteligentes utilizando el código de la Máquina Virtual de Ethereum (EVM). Esto asegura la compatibilidad con las aplicaciones y herramientas existentes de Ethereum. El protocolo garantiza tanto la seguridad como el progreso, suponiendo que la cadena subyacente de Ethereum permanezca segura y activa, y al menos un participante en el protocolo Nitro actúe honestamente.

### Enfoque de Diseño

La arquitectura de Nitro se basa en cuatro principios fundamentales:

- **Secuenciación seguida de Ejecución Determinista:** Las transacciones se secuencian primero y luego se procesan de manera determinista. Este enfoque de dos fases asegura un entorno de ejecución consistente y confiable.
- **Geth en el Núcleo:** Nitro utiliza el paquete go-ethereum (geth) para la ejecución central y el mantenimiento del estado, asegurando una alta compatibilidad con Ethereum.
- **Separación de Ejecución y Prueba:** La función de transición de estado se compila tanto para la ejecución nativa como para el ensamblado web (wasm) para facilitar una ejecución eficiente y una prueba estructurada e independiente de la máquina.
- **Rollup Optimista con Pruebas de Fraude Interactivas:** Basándose en el diseño original de Arbitrum, Nitro emplea un protocolo de rollup optimista mejorado con un sofisticado mecanismo de prueba de fraude.

### Secuenciación y Ejecución

El procesamiento de transacciones en Nitro involucra dos componentes clave: el Secuenciador y la Función de Transición de Estado (STF).

![Arquitectura de Arbitrum Nitro](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro.webp "Arquitectura de Arbitrum Nitro")

- **El Secuenciador**: Ordena las transacciones entrantes y se compromete con este orden. Asegura que la secuencia de transacciones sea conocida y confiable, publicándola tanto como un feed en tiempo real como en lotes de datos comprimidos en la cadena de Capa 1 de Ethereum. Este enfoque dual mejora la confiabilidad y previene la censura.
- **Ejecución Determinista**: La STF procesa las transacciones secuenciadas, actualizando el estado de la cadena y produciendo nuevos bloques. Este proceso es determinista, lo que significa que el resultado depende solo de los datos de la transacción y del estado anterior, asegurando la consistencia en toda la red.

### Arquitectura de Software: Geth en el Núcleo

![Arquitectura de Arbitrum Nitro, en Capas](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro-architecture-layered.webp "Arquitectura de Arbitrum Nitro, en Capas")

La arquitectura de software de Nitro está estructurada en tres capas:

- **Capa Base (Núcleo de Geth)**: Esta capa maneja la ejecución de contratos EVM y mantiene las estructuras de datos del estado de Ethereum.
- **Capa Media (ArbOS)**: Software personalizado que proporciona funcionalidad de Capa 2, incluyendo la descompresión de lotes del secuenciador, la gestión de costos de gas y el soporte de funcionalidades entre cadenas.
- **Capa Superior**: Derivada de geth, esta capa maneja conexiones, solicitudes RPC entrantes y otras funciones de nodo de alto nivel.

### Interacción entre Cadenas

Arbitrum Nitro admite interacciones seguras entre cadenas a través de mecanismos como el Outbox, Inbox y Boletos Reintentables.

- **El Outbox**: Permite llamadas de contrato de Capa 2 a Capa 1, asegurando que los mensajes se transfieran y ejecuten de manera segura en Ethereum.
- **El Inbox**: Gestiona las transacciones enviadas a Nitro desde Ethereum, asegurando que se incluyan en el orden correcto.
- **Boletos Reintentables**: Permiten la reenvío de transacciones fallidas, asegurando la fiabilidad y reduciendo el riesgo de transacciones perdidas.

### Gas y Tarifas

Nitro emplea un sofisticado mecanismo de medición y fijación de precios de gas para gestionar los costos de transacción:

- **Medición y Fijación de Precios de Gas L2**: Rastrea el uso de gas y ajusta la tarifa base algorítmicamente para equilibrar la demanda y la capacidad.
- **Medición y Fijación de Precios de Datos L1**: Asegura que los costos asociados con las interacciones de Capa 1 estén cubiertos, utilizando un algoritmo de precios adaptativo para repartir estos costos con precisión entre las transacciones.

### Conclusión

Cuckoo Network confía en invertir en el desarrollo de Arbitrum. Las avanzadas soluciones de Capa 2 de Arbitrum Nitro ofrecen una escalabilidad inigualable, una finalización más rápida y una resolución de disputas eficiente. Su compatibilidad con Ethereum asegura un entorno seguro y eficiente para nuestras aplicaciones descentralizadas, alineándose con nuestro compromiso con la innovación y el rendimiento.


- source: https://cuckoo.network/blog/2024/06/06/introduction-to-arbitrum-nitro
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc