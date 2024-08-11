# Развертывание с использованием Foundry на Cuckoo Chain

В этом руководстве вы узнаете, как развернуть токен ERC20 на Cuckoo Chain с помощью [Foundry](https://book.getfoundry.sh/). Foundry — это инструментальная цепочка для разработки смарт-контрактов на языке Rust, которая управляет зависимостями, компилирует проекты, запускает тесты, развертывает и позволяет взаимодействовать с цепочкой через командную строку и скрипты на Solidity.

Благодаря тому, что Cuckoo Chain основан на Arbitrum и Ethereum Stack и совместим с EVM, смарт-контракты, основанные на Ethereum, могут быть легко перенесены с минимальными изменениями.

## Необходимые условия

Вам необходимо выполнить следующие шаги, что займет примерно 10 минут:

- **Получите $CAI в тестовой сети Cuckoo:** Используйте [этот кран](https://cuckoo.network/portal/faucet/), чтобы получить немного CAI.

- **Установите Rust:** Если Rust не установлен, следуйте [этому руководству](https://doc.rust-lang.org/book/ch01-01-installation.html).

- **Установите Foundry:** Если Foundry не установлен, следуйте [этому руководству](https://book.getfoundry.sh/getting-started/installation).

Начнем!

## Шаг 1: Настройка проекта

### 1.1 Инициализация нового проекта Foundry

Откройте терминал и выполните команду:

```bash
forge init my-project
```

### 1.2 Установка контрактов OpenZeppelin

Добавьте библиотеку контрактов OpenZeppelin в ваш проект:

```bash
forge install OpenZeppelin/openzeppelin-contracts
```

## Шаг 2: Написание контракта ERC20

### 2.1 Создание файла контракта

В директории `/src` создайте файл с именем `MyERC20.sol` и добавьте следующий код:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    constructor() ERC20("MyToken", "MTK") {}
}
```

Этот простой токен ERC20 называется "MyToken" с символом "MTK". Вы можете изменить имя и символ по своему усмотрению.

Вот как должен выглядеть ваш проект на данный момент:

![img](https://cuckoo-network.b-cdn.net/using-hardhat-1.webp)

## Шаг 3: Компиляция контракта

### 3.1 Компиляция смарт-контракта

Используйте Foundry для компиляции вашего контракта:

```bash
forge build
```

## Шаг 4: Развертывание контракта ERC20

### 4.1 Развертывание контракта

Чтобы развернуть ваш контракт, выполните следующую команду, заменив `<YOUR_PRIVATE_KEY>` на ваш фактический приватный ключ:

```bash
forge create --rpc-url https://testnet-rpc.cuckoo.network --private-key <YOUR_PRIVATE_KEY> src/MyERC20.sol:MyERC20
```

Никогда не делитесь своим приватным ключом публично. Храните его в безопасности, чтобы предотвратить несанкционированный доступ.

### Дополнительно: Верификация контракта во время развертывания

Добавьте флаг `--verify`, чтобы верифицировать ваш контракт во время развертывания:

```bash
forge create --rpc-url https://testnet-rpc.cuckoo.network --private-key <YOUR_PRIVATE_KEY> src/MyERC20.sol:MyERC20 --verify --verifier blockscout --verifier-url https://testnet-scan.cuckoo.network/api\?
```

Вы должны увидеть результат, подобный этому:

```bash
[⠢] Compiling... No files changed, compilation skipped
Deployer: 0x3F26b51E23D01b09f4079B2a9e00e6873a8409D8
Deployed to: 0x628F56856386A4De8414A4D8217D519bF94d03f0
Transaction hash: 0xbe2d27554f130a720c4dd82dad055c941ca44dee836f6333a8507d76022c158
```

Скопируйте и сохраните адрес "Deployed to" для дальнейшего использования.

## Шаг 5: Верификация контракта после развертывания

### 5.1 Верификация контракта

Для уже развернутых контрактов используйте команду `verify-contract`:

```bash
forge verify-contract <CONTRACT_ADDRESS> src/MyERC20.sol:MyERC20 --verifier blockscout --verifier-url https://testnet-scan.cuckoo.network/api\?
```

## Шаг 6: Взаимодействие с вашим развернутым контрактом

Используйте [Blockscout](https://testnet-scan.cuckoo.network/), чтобы просмотреть детали вашего контракта. Вставьте адрес контракта из результата развертывания в строку поиска Blockscout. Во вкладке "Контракт" вы найдете ваш верифицированный контракт.

![img](https://cuckoo-network.b-cdn.net/using-hardhat-2.webp)

---

Поздравляем! Вы успешно развернули и верифицировали смарт-контракт на Cuckoo Chain с помощью Foundry.

Чтобы узнать больше о Cuckoo Chain и изучить бизнес-возможности, присоединяйтесь к нашему [Discord](https://cuckoo.network/dc) и скажите привет 👋.
