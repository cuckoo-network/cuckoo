# Развертывание смарт-контракта на Cuckoo с использованием Thirdweb CLI и Dashboard

Thirdweb — это мощный веб3-фреймворк, разработанный для бесшовного подключения ваших приложений и игр к децентрализованным сетям. С недавней интеграцией Cuckoo вы можете воспользоваться функциями Thirdweb для эффективного развертывания и управления смарт-контрактами.

Это руководство предполагает, что у вас есть **Ethereum-кошелек** с закрытым ключом для тестовой сети Cuckoo, который содержит тестовые $CAI. Получите их [на кране](https://cuckoo.network/portal/faucet/). Используйте новый кошелек без реальных средств для безопасности.

## Шаг 1: Установите Thirdweb CLI

Начните с глобальной установки Thirdweb CLI. Откройте терминал и выполните следующую команду:

```bash
npm install -g thirdweb
```

Проверьте установку:

```bash
thirdweb --version
```

Для подробных инструкций обратитесь к [официальной документации](https://portal.thirdweb.com/cli/create).

## Шаг 2: Настройка локальной среды

Создайте новый проект на вашем локальном компьютере:

```bash
npx thirdweb create
```

Следуйте подсказкам для настройки среды. В этом уроке мы развернем токен ERC-20 с расширением Drop, что позволит вам выпускать, сжигать и раздавать токены через панель управления. Thirdweb предоставляет проверенные контракты, готовые к развертыванию.

Обратитесь к скриншоту ниже для создания примера смарт-контракта или используйте свой код.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-1.webp)

После настройки у вас будет папка с именем "my-token" (или выбранным именем проекта). Откройте эту папку в предпочитаемом текстовом редакторе для просмотра или модификации смарт-контракта.

## Шаг 3: Получение API-ключа Thirdweb

Сервисы Thirdweb требуют API-ключ. Следуйте этим шагам для его создания:

1. Посетите [API-ключи Thirdweb](https://thirdweb.com/dashboard/settings/api-keys).
2. Подключите свой кошелек и подпишите запрос в Metamask (или другом предпочитаемом кошельке).
3. Переключитесь на сеть Cuckoo и создайте API-ключ.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-2.webp)

Следуйте указанным шагам ниже:

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-3.webp)

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-4.webp)

Убедитесь, что вы надежно сохранили свой идентификатор клиента и секретный ключ.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-5.webp)

## Шаг 4: Развертывание смарт-контракта

Запустите следующую команду в корневом каталоге вашего проекта для развертывания контракта:

```bash
npx thirdweb deploy
```

Вы увидите подсказку, похожую на эту:

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-6.webp)

Если ваш браузер не откроется автоматически, скопируйте ссылку из терминала и вставьте ее в браузер. Выберите тестовую сеть Cuckoo из списка.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-7.webp)

Заполните параметры контракта и нажмите "Deploy Now". Убедитесь, что у вас достаточно ETH на Cuckoo для оплаты газа. Отметьте поле для добавления панели управления к контракту, что позволит использовать расширенные функции взаимодействия.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-8.webp)

Вам потребуется подписать транзакцию без газа для одобрения панели управления.

## Шаг 5: Использование панели управления смарт-контрактами

Для управления вашими контрактами посетите [Thirdweb Contracts Dashboard](https://thirdweb.com/dashboard/contracts). Здесь вы можете просматривать все свои развернутые контракты.

Нажмите на контракт, чтобы получить доступ к его панели управления и начать взаимодействие с ним. Вкладка "Explorer" позволяет вам просматривать и использовать все методы чтения и записи вашего контракта.

Одна из самых полезных функций — вкладка "Build", которая предоставляет фрагменты кода для программного подключения к вашему контракту с использованием различных языков и фреймворков, таких как JavaScript, React и Python.

Поздравляем! Вы успешно развернули смарт-контракт на Cuckoo с использованием Thirdweb CLI. Чтобы узнать больше о Cuckoo и его потенциале, присоединяйтесь к нашему [Discord](https://cuckoo.network/dc) и скажите привет 👋.
