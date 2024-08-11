# Как запустить узел майнера

Узлы майнеров являются неотъемлемой частью нашей сети, выполняя задачи и зарабатывая вознаграждения через инференс.

> Обратите внимание, что узлы майнеров все еще находятся в стадии активной разработки и могут подвергаться значительным изменениям. Текущие вознаграждения за майнинг с использованием GPU составляют 300 $CAI за GPU в день.

## Узел майнинга Stable Diffusion

### Минимальные аппаратные требования

| Компонент         | Требование                |
|-------------------|---------------------------|
| **GPU**           | NVIDIA L4, 3080           |
| **RAM**           | 8-16 ГБ                   |
| **CPU**           | 1 ядро                    |
| **Хранилище**     | Зависит от объема трафика |

### Начало работы

Следуйте этим шагам для настройки и запуска вашего узла майнинга Stable Diffusion:

1. **Клонируйте репозиторий**

    ```sh
    git clone https://github.com/cuckoo-network/stable-diffusion-miner-docker.git
    ```

2. **Перейдите в каталог проекта**

    ```sh
    cd stable-diffusion-miner-docker
    ```

3. **Загрузите необходимые файлы**

    ```sh
    make download
    ```

4. **Запустите майнер**

   Добавьте ваш приватный ключ в команду ниже и запустите майнер:

    ```sh
    ETH_PRIVATE_KEY="" make start
    ```

Убедитесь, что у вас есть необходимое оборудование, и внимательно следуйте инструкциям по настройке. Оставайтесь на связи для получения обновлений, так как мы продолжаем развивать и улучшать функциональность узлов майнеров.


<details class="p-4 bg-white rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
  <summary class="cursor-pointer text-xl font-semibold">
    Как настроить на Bare Metal Ubuntu Server?
  </summary>
  # Bare Metal Ubuntu Server

### Установка Nvidia Container Toolkit

Если при запуске `make start` вы столкнетесь с следующей ошибкой:

```text
[+] Running 1/2
 ✔ Container webui-docker-relay-node-1  Running                                                                                                                                             0.0s
 ⠹ Container webui-docker-auto-1        Starting                                                                                                                                            0.3s
Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error running hook #0: error running hook: exit status 1, stdout: , stderr: Auto-detected mode as 'legacy'
nvidia-container-cli: initialization error: load library failed: libnvidia-ml.so.1: cannot open shared object file: no such file or directory: unknown
make: *** [Makefile:11: start] Error 1
```

Это означает, что Nvidia Container Toolkit не установлен. Следуйте [официальным инструкциям по установке набора инструментов](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html).

### Пользовательская конфигурация Docker Daemon

Чтобы использовать пользовательский файл конфигурации для Docker, выполните следующие шаги:

1. **Подготовьте пользовательский файл конфигурации**
   Убедитесь, что ваш пользовательский файл конфигурации находится в `$HOME/.config/docker/daemon.json`.

2. **Измените службу Docker systemd**
   Если файл `daemon.json` содержит `nvidia`, но при выполнении команды `sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi` возникает ошибка `docker: Error response from daemon: unknown or invalid runtime name: nvidia.`, измените службу Docker systemd:

1. Создайте каталог для службы Docker:
   ```bash
   sudo mkdir -p /etc/systemd/system/docker.service.d
   ```

2. Создайте или отредактируйте файл `override.conf` в этом каталоге:
   ```bash
   sudo nano /etc/systemd/system/docker.service.d/override.conf
   ```

3. Добавьте следующую конфигурацию, чтобы указать путь к пользовательскому файлу конфигурации:
   ```ini
   [Service]
   ExecStart=
   ExecStart=/usr/bin/dockerd --config-file=/home/your-username/.config/docker/daemon.json
   ```
   Замените `your-username` на ваше фактическое имя пользователя. Используйте полный путь вместо `$HOME`.

3. **Примените изменения**
   Перезагрузите конфигурацию systemd и перезапустите Docker:
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl restart docker
   ```

4. **Проверьте конфигурацию**
   Проверьте, использует ли Docker вашу пользовательскую конфигурацию:
   ```bash
   sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
   ```

### Устранение неполадок: Failed to Initialize NVML

Если вы столкнулись с ошибкой `Failed to initialize NVML: Unknown Error`, выполните следующие шаги:

1. Отредактируйте конфигурацию Nvidia контейнера:
   ```bash
   sudo vim /etc/nvidia-container-runtime/config.toml
   ```
   Измените параметр `no-cgroups` на `false` и сохраните файл.

2. Перезапустите демон Docker:
   ```bash
   sudo systemctl restart docker
   ```

3. Проверьте конфигурацию:
   ```bash
   sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
   ```

</details>
