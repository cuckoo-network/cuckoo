---
title: Staking y minería de tokens con GPU
authors: [lark]
tags: [empresa, hoja de ruta]
image: https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp
---

Cuckoo Network es el primer Mercado Descentralizado de Servicios de Modelos de IA que recompensa a los entusiastas de la IA, desarrolladores y mineros de GPU con tokens criptográficos. En nuestra plataforma, los mineros comparten sus GPUs con los constructores de aplicaciones de IA generativa, también conocidos como coordinadores, para ejecutar inferencias para los clientes finales, de modo que todos los contribuyentes puedan ganar tokens criptográficos.

![Staking y minería de tokens con GPU](https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp "Staking y minería de tokens con GPU")

> Actualización 2024-07-09: Esta publicación es para la testnet. Consulta [esta publicación](/blog/2024/07/15/cuckoo-network-mining-gpu-july-2024) para la mainnet.

Cuando los mineros comparten sus GPUs, ¿cómo asegurarse de que no están falsificando resultados? Cuckoo Network establece confianza e integridad a través de staking, recompensas y penalizaciones. Hoy nos complace anunciar que los stakers pueden unirse a nuestra testnet y asegurar confianza para esta red de IA descentralizada.

## **Únete a la testnet hoy**

Para stakers

1. Obtén tokens CAI del [faucet de testnet](https://cuckoo.network/portal/faucet)
2. Haz staking de tokens en el [portal de staking / staking de testnet](https://cuckoo.network/portal/staking/testnet)
3. Vota por coordinadores o mineros

![Cuckoo Portal - Staking](https://cuckoo-network.b-cdn.net/staking-portal-screenshot.webp "Cuckoo Portal - Staking")

Para mineros de GPU

1. Obtén tokens CAI contactando a los administradores desde https://cuckoo.network/tg o https://cuckoo.network/dc
2. Haz staking de > 20K tokens en el portal de staking
3. Registra la dirección del minero y la información de introducción. Se recomienda que la dirección del minero sea diferente de tu dirección de staker.
4. Ejecuta el nodo del minero con la clave privada de la dirección del minero

Para Coordinadores

1. Obtén tokens CAI contactando a los administradores desde https://cuckoo.network/tg o https://cuckoo.network/dc
2. Haz staking de > 2M tokens en el portal de staking
3. Registra la dirección del coordinador y la información de introducción. Se recomienda que la dirección del coordinador sea diferente de tu dirección de staker.
4. Ejecuta el nodo del coordinador con la clave privada de la dirección del minero

## **¿Cómo funciona?**

Todo el sistema toma un par de roles para trabajar juntos:

- **Staker de Minero de GPU:** Individuos o entidades que ejecutan recursos de computación para realizar tareas de IA. Poseen tokens CAI con una billetera para hacer staking en la red. Cuanto más hagan staking, mayores serán las posibilidades de que se les asignen tareas de GPU.
- **Constructores de Aplicaciones (Staker Coordinador):** Desarrolladores que crean aplicaciones de IA sobre Cuckoo Network, supervisando la distribución de tareas y el control de calidad. Llevan tokens CAI con una billetera para hacer staking en la red. Cuanto más hagan staking, mayores serán las posibilidades de que consigan mineros de GPU dispuestos a trabajar con ellos.
- **Stakers:** Participantes que hacen staking de tokens para votar por Mineros y coordinadores confiables. Serán recompensados por sus stakes.
- **Contrato de Staking:** Un contrato inteligente donde los Mineros y coordinadores se registran y los stakers votan por ellos.
- **Nodo Coordinador:** Las aplicaciones de IA generativa llaman a las API de este nodo para ofrecer tareas de GPU como prompts para generar imágenes en la red.
- **Nodo Minero:** Los proveedores de GPU ejecutan el nodo minero para llevar a cabo la ejecución de tareas con GPUs.

![img](https://cuckoo-network.b-cdn.net/cuckoo-staking@2x.webp)

La asignación de tareas y el programador es una función crítica dentro del ecosistema de Cuckoo AI, asegurando una distribución eficiente y justa de tareas desde los coordinadores a los Mineros.

Sin embargo, los nodos deben establecer confianza antes de ingresar al sistema. Por lo tanto, todos los participantes deben hacer staking de tokens antes de asumir cualquier rol.

Luego, los constructores de aplicaciones de IA generativa, también conocidos como coordinadores, ejecutan el nodo coordinador con una clave privada cuya dirección ha sido registrada con los contratos de staking. Este nodo lee el registro de mineros de los contratos de staking y luego escucha las solicitudes que provienen de los nodos mineros.

Los proveedores de GPU ejecutan el nodo minero que también obtendrá información de los contratos de staking y consultará a los coordinadores por tareas pendientes.

Cuando la aplicación de IA generativa ofrece una tarea al coordinador, el coordinador asignará la tarea a las direcciones de mineros activas según sus stakes como pesos. Luego, los mineros correspondientes trabajan en la tarea y finalmente envían los resultados al coordinador.

## **Resumen**

Cuckoo Network introduce una plataforma única de AI-to-Earn descentralizada, enfatizando la colaboración y la confianza. Al emplear mecanismos de staking e incentivos, asegura la autenticidad y el compromiso de todos los participantes, incluidos desarrolladores, mineros de GPU y stakers. Este enfoque garantiza una distribución confiable de tareas y fomenta un entorno sostenible para el avance de las tecnologías de IA descentralizadas. Cuckoo invita a más usuarios a explorar su red, ofreciéndoles la oportunidad de contribuir al desarrollo de IA mientras ganan criptomonedas.

- fuente: https://cuckoo.network/blog/2024/04/20/staking-and-mining-tokens-with-gpu
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc