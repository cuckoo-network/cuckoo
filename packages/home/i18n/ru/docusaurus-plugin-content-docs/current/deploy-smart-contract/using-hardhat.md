# Развертывание смарт-контракта на Cuckoo Chain с помощью Hardhat

Это руководство проведет вас через процесс развертывания смарт-контракта на Ethereum L2 Cuckoo Chain с использованием Hardhat и TypeScript.

#### Необходимые условия

- **Node.js и npm:** Убедитесь, что они установлены. [Скачать здесь](https://nodejs.org/).

- **Ethereum-кошелек:** Приватный ключ для тестовой сети Cuckoo, на котором есть тестовые $CAI. Получите их с помощью [тестового крана](https://cuckoo.network/portal/faucet/). Для безопасности используйте новый кошелек без реальных средств.

- **Базовые знания Solidity и CLI:** Полезно, но не обязательно!

## Что вы узнаете

- Настройка проекта Hardhat на основе TypeScript.
- Написание простого смарт-контракта на Ethereum.
- Настройка Hardhat для тестовой сети Cuckoo.
- Развертывание вашего смарт-контракта на Cuckoo.

## Шаг 1: Инициализация проекта на TypeScript с использованием Hardhat

Откройте терминал и создайте новую директорию для проекта, затем перейдите в нее:

```bash
mkdir my-hardhat-project && cd my-hardhat-project
```

Инициализируйте npm-проект:

```bash
npm init -y
```

Установите необходимые пакеты для Hardhat и TypeScript:

```bash
npm install --save-dev hardhat ts-node typescript @nomiclabs/hardhat-ethers ethers
```

Запустите новый проект Hardhat с использованием TypeScript:

```bash
npx hardhat init
```

Следуйте подсказкам:

- Выберите "Create a TypeScript project".
- Выберите "Yes" для добавления `.gitignore`.
- Выберите "Yes" для установки зависимостей проекта.

```bash
[~/Cuckoo/my-hardhat-project]$ npx hardhat

888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888      88b 888P   d88  888 888  88b      88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888  Y888888 888      Y88888 888  888  Y888888  Y888

👷 Добро пожаловать в Hardhat v2.18.2 👷‍

✔ Что вы хотите сделать? · Создать проект на TypeScript
✔ Корневая директория проекта Hardhat: · /Users/Cuckoo/my-hardhat-project
✔ Хотите добавить файл .gitignore? (Y/n) · y
✔ Хотите установить зависимости проекта с помощью npm (@nomicfoundation/hardhat-toolbox)? (Y/n) · y
```

## Шаг 2: Написание смарт-контракта

В директории `contracts` удалите `Lock.sol` и создайте новый файл `HelloWorld.sol`:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract HelloWorld {
    string public greet = "Hello, Cuckoo!";

    function setGreet(string memory _greet) public {
        greet = _greet;
    }

    function getGreet() public view returns (string memory) {
        return greet;
    }
}
```

## Шаг 3: Настройка Hardhat для Cuckoo

Отредактируйте файл `hardhat.config.ts`, чтобы включить настройки тестовой сети Cuckoo:

```typescript
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  networks: {
    cuckoo: {
      url: "https://testnet-rpc.cuckoo.network",
      chainId: 1210,
      accounts: ["YOUR_PRIVATE_KEY_HERE"] // Замените на ваш приватный ключ
    }
  },
  solidity: "0.8.0",
};

export default config;
```

Замените `YOUR_PRIVATE_KEY_HERE` на ваш приватный ключ для тестовой сети Cuckoo. **Не делитесь своим приватным ключом и не загружайте его в GitHub.**

## Шаг 4: Компиляция смарт-контракта

Скомпилируйте смарт-контракт:

```bash
npx hardhat compile
```

## Шаг 5: Развертывание смарт-контракта

В директории `scripts` создайте новый файл `deploy.ts`:

```typescript
import { ethers } from "hardhat";

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const gasPrice = ethers.utils.parseUnits('10', 'gwei');
    const gasLimit = 500000;
    const helloWorld = await HelloWorld.deploy({ gasPrice: gasPrice, gasLimit: gasLimit });
    await helloWorld.deployed();
    console.log("HelloWorld развернут по адресу:", helloWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
```

Настройте `gasPrice` и `gasLimit` по мере необходимости. Проверьте [BlockScout](https://testnet-scan.cuckoo.network/) для получения деталей цепочки.

Разверните смарт-контракт в тестовой сети Cuckoo:

```bash
npx hardhat run scripts/deploy.ts --network cuckoo
```

## Шаг 6: Проверка развертывания

Проверьте развертывание вашего смарт-контракта в блок-эксплорере тестовой сети Cuckoo: [BlockScout](https://testnet-scan.cuckoo.network/). Используйте адрес контракта из консоли для просмотра его деталей.

## Заключение

Поздравляем! Вы успешно развернули смарт-контракт в тестовой сети Cuckoo с использованием Hardhat и TypeScript. Чтобы узнать больше о Cuckoo и о том, как превратить ваш код в бизнес, присоединяйтесь к нашему [Discord](https://cuckoo.network/dc) и скажите привет 👋.
