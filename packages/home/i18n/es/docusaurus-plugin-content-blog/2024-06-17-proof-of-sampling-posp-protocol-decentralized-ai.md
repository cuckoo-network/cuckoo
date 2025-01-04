---
title: "Protocolo de Prueba de Muestreo: Incentivando la Honestidad y Penalizando la Deshonestidad en la Inferencia de IA Descentralizada"
authors: [lark]
tags: [investigación]
image: https://cuckoo-network.b-cdn.net/proof-of-sampling-posp-protocol-decentralized-ai.webp
description: Aprende sobre el enfoque único del protocolo de Prueba de Muestreo (PoSP) para incentivar el comportamiento honesto y penalizar la deshonestidad entre los proveedores de GPU, asegurando la seguridad y confiabilidad de los sistemas de inferencia de IA descentralizada.
---

En la IA descentralizada, asegurar la integridad y confiabilidad de los proveedores de GPU es crucial. El protocolo de Prueba de Muestreo (PoSP), como se describe en la reciente investigación de Holistic AI, proporciona un mecanismo sofisticado para incentivar a los buenos actores mientras penaliza a los malos. Veamos cómo funciona este protocolo, sus incentivos económicos, penalizaciones y su aplicación a la inferencia de IA descentralizada.

## Incentivos para el Comportamiento Honesto

### Recompensas Económicas

En el corazón del protocolo PoSP están los incentivos económicos diseñados para fomentar la participación honesta. Los nodos, actuando como afirmadores y validadores, son recompensados según sus contribuciones:

- **Afirmadores:** Reciben una recompensa (RA) si su resultado computado es correcto y no es impugnado.
- **Validadores:** Comparten la recompensa (RV/n) si sus resultados coinciden con los del afirmador y son verificados como correctos.

### Equilibrio de Nash Único

El protocolo PoSP está diseñado para alcanzar un equilibrio de Nash único en estrategias puras, donde todos los nodos están motivados para actuar honestamente. Al alinear el beneficio individual con la seguridad del sistema, el protocolo asegura que la honestidad sea la estrategia más rentable para los participantes.

## Penalizaciones por Comportamiento Deshonesto

### Mecanismo de Penalización

Para disuadir el comportamiento deshonesto, el protocolo PoSP emplea un mecanismo de penalización. Si un afirmador o validador es sorprendido siendo deshonesto, enfrentan penalizaciones económicas significativas (S). Esto asegura que el costo de la deshonestidad supere con creces cualquier ganancia a corto plazo.

### Mecanismo de Desafío

Los desafíos aleatorios aseguran aún más el sistema. Con una probabilidad predeterminada (p), el protocolo activa un desafío donde múltiples validadores vuelven a calcular el resultado del afirmador. Si se encuentran discrepancias, los actores deshonestos son penalizados. Este proceso de selección aleatoria dificulta que los malos actores se coludan y engañen sin ser detectados.

## Pasos del Protocolo PoSP

1. **Selección de Afirmador:** Se selecciona aleatoriamente un nodo para actuar como afirmador, computando y generando un valor.

2. Probabilidad de Desafío:

    El sistema puede activar un desafío basado en una probabilidad predeterminada.

   - **Sin Desafío:** El afirmador es recompensado si no se activa un desafío.
   - **Desafío Activado:** Se selecciona aleatoriamente un número determinado (n) de validadores para verificar el resultado del afirmador.

3. Validación:

    Cada validador calcula independientemente el resultado y lo compara con el resultado del afirmador.

   - **Coincidencia:** Si todos los resultados coinciden, tanto el afirmador como los validadores son recompensados.
   - **Desajuste:** Un proceso de arbitraje determina la honestidad del afirmador y los validadores.

4. **Penalizaciones:** Los nodos deshonestos son penalizados, mientras que los validadores honestos reciben su parte de la recompensa.

## spML

El protocolo spML (aprendizaje automático basado en muestreo) es una implementación del protocolo de Prueba de Muestreo (PoSP) dentro de una red de inferencia de IA descentralizada.

### Pasos Clave

1. **Entrada del Usuario**: El usuario envía su entrada a un servidor seleccionado aleatoriamente (afirmador) junto con su firma digital.
2. **Salida del Servidor**: El servidor calcula el resultado y lo envía de vuelta al usuario junto con un hash del resultado.
3. **Mecanismo de Desafío**:
   - Con una probabilidad predeterminada (p), el sistema activa un desafío donde otro servidor (validador) es seleccionado aleatoriamente para verificar el resultado.
   - Si no se activa un desafío, el afirmador recibe una recompensa (R) y el proceso concluye.
4. **Verificación**:
   - Si se activa un desafío, el usuario envía la misma entrada al validador.
   - El validador calcula el resultado y lo envía de vuelta al usuario junto con un hash.
5. **Comparación**:
   - El usuario compara los hashes de las salidas del afirmador y del validador.
   - Si los hashes coinciden, tanto el afirmador como el validador son recompensados, y el usuario recibe un descuento en la tarifa base.
   - Si los hashes no coinciden, el usuario transmite ambos hashes a la red.
6. **Arbitraje**:
   - La red vota para determinar la honestidad del afirmador y el validador basándose en las discrepancias.
   - Los nodos honestos son recompensados, mientras que los deshonestos son penalizados (penalizados).

### Componentes y Mecanismos Clave
- **Ejecución Determinista de ML**: Utiliza aritmética de punto fijo y bibliotecas de punto flotante basadas en software para asegurar resultados consistentes y reproducibles.
- **Diseño Sin Estado**: Trata cada consulta como independiente, manteniendo la ausencia de estado durante el proceso de ML.
- **Participación Sin Permiso**: Permite que cualquiera se una a la red y contribuya ejecutando un servidor de IA.
- **Operaciones Fuera de Cadena**: Las inferencias de IA se calculan fuera de la cadena para reducir la carga en la blockchain, con resultados y firmas digitales transmitidos directamente a los usuarios.
- **Operaciones en Cadena**: Funciones críticas, como cálculos de saldo y mecanismos de desafío, se manejan en cadena para asegurar transparencia y seguridad.

### Ventajas de spML
- **Alta Seguridad**: Logra seguridad a través de incentivos económicos, asegurando que los nodos actúen honestamente debido a las posibles penalizaciones por deshonestidad.
- **Bajo Sobrecarga Computacional**: Los validadores solo necesitan comparar hashes en la mayoría de los casos, reduciendo la carga computacional durante la verificación.
- **Escalabilidad**: Puede manejar una actividad de red extensa sin una degradación significativa del rendimiento.
- **Simplicidad**: Mantiene la simplicidad en la implementación, mejorando la facilidad de integración y mantenimiento.

### Comparación con Otros Protocolos
- **Prueba de Fraude Optimista (opML)**:
  - Se basa en desincentivos económicos para el comportamiento fraudulento y un mecanismo de resolución de disputas.
  - Vulnerable a la actividad fraudulenta si no hay suficientes validadores honestos.
- **Prueba de Conocimiento Cero (zkML)**:
  - Asegura alta seguridad a través de pruebas criptográficas.
  - Enfrenta desafíos en escalabilidad y eficiencia debido a la alta sobrecarga computacional.
- **spML**:
  - Combina alta seguridad a través de incentivos económicos, baja sobrecarga computacional y alta escalabilidad.
  - Simplifica el proceso de verificación al centrarse en comparaciones de hashes, reduciendo la necesidad de cálculos complejos durante los desafíos.

## Resumen

El protocolo de Prueba de Muestreo (PoSP) equilibra efectivamente la necesidad de incentivar a los buenos actores y disuadir a los malos, asegurando la seguridad y confiabilidad general de los sistemas descentralizados. Al combinar recompensas económicas con penalizaciones estrictas, PoSP fomenta un entorno donde el comportamiento honesto no solo es alentado sino necesario para el éxito. A medida que la IA descentralizada continúa creciendo, protocolos como PoSP serán esenciales para mantener la integridad y confiabilidad de estos sistemas avanzados.

- source: https://cuckoo.network/blog/2024/06/17/proof-of-sampling-posp-protocol-decentralized-ai
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc