# 如何运行矿工节点

矿工节点是我们网络的重要组成部分，负责执行任务并通过推理赚取奖励。

> 请注意，矿工节点仍在开发中，可能会有重大更改。目前，GPU 矿工的奖励为每个 GPU 每天 300 $CAI。

## 稳定扩散矿工

### 最低硬件配置

| 组件     | 要求            |
| -------- | --------------- |
| **GPU**  | NVIDIA L4, 3080 |
| **RAM**  | 8-16 GB         |
| **CPU**  | 1 核心          |
| **存储** | 取决于流量量    |

### 开始使用

按照以下步骤设置并运行您的稳定扩散矿工：

1. **克隆存储库**

    ```sh
    git clone https://github.com/cuckoo-network/stable-diffusion-miner-docker.git
    ```

2. **导航到项目目录**

    ```sh
    cd stable-diffusion-miner-docker
    ```

3. **下载必要的文件**

    ```sh
    make download
    ```

4. **启动矿工**

   将您的私钥添加到以下命令中并启动矿工：

    ```sh
    ETH_PRIVATE_KEY="" make start
    ```

请确保您拥有所需的硬件，并仔细按照设置说明进行操作。随着我们继续开发和改进矿工节点功能，请随时关注更新。

<details class="p-4 bg-white rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
  <summary class="cursor-pointer text-xl font-semibold">
    如何设置裸金属 Ubuntu 服务器？
  </summary>
  # 裸金属 Ubuntu 服务器

### 安装 Nvidia 容器工具包

如果在运行 `make start` 时遇到以下错误：

```text
[+] Running 1/2
 ✔ Container webui-docker-relay-node-1  Running                                                                                                                                             0.0s
 ⠹ Container webui-docker-auto-1        Starting                                                                                                                                            0.3s
Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error running hook #0: error running hook: exit status 1, stdout: , stderr: Auto-detected mode as 'legacy'
nvidia-container-cli: initialization error: load library failed: libnvidia-ml.so.1: cannot open shared object file: no such file or directory: unknown
make: *** [Makefile:11: start] Error 1
```

这意味着 Nvidia 容器工具包未安装。请按照[官方说明安装工具包](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)。

### 自定义 Docker 守护进程配置

要使用自定义的 Docker 配置文件，请按照以下步骤操作：

1. **准备自定义配置文件**
   确保您的自定义配置文件位于 `$HOME/.config/docker/daemon.json`。

2. **修改 Docker systemd 服务**
   如果 `daemon.json` 文件包含 `nvidia` 但运行 `sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi` 结果显示 `docker: Error response from daemon: unknown or invalid runtime name: nvidia.`，请修改 Docker systemd 服务文件：

  1. 为 Docker 服务创建一个 systemd drop-in 目录：
     ```bash
     sudo mkdir -p /etc/systemd/system/docker.service.d
     ```

  2. 在此目录中创建或编辑 `override.conf` 文件：
     ```bash
     sudo nano /etc/systemd/system/docker.service.d/override.conf
     ```

  3. 添加以下配置以指定自定义配置文件路径：
     ```ini
     [Service]
     ExecStart=
     ExecStart=/usr/bin/dockerd --config-file=/home/your-username/.config/docker/daemon.json
     ```
     将 `your-username` 替换为您的实际用户名。使用完整路径而不是 `$HOME`。

3. **应用更改**
   重新加载 systemd 管理器配置并重新启动 Docker：
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl restart docker
   ```

4. **验证配置**
   检查 Docker 是否正在使用您的自定义配置：
   ```bash
   sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
   ```

### 故障排除：无法初始化 NVML

如果遇到 `Failed to initialize NVML: Unknown Error`，请按照以下步骤操作：

1. 编辑 Nvidia 容器运行时配置：
   ```bash
   sudo vim /etc/nvidia-container-runtime/config.toml
   ```
   将 `no-cgroups` 更改为 `false` 并保存文件。

2. 重启 Docker 守护进程：
   ```bash
   sudo systemctl restart docker
   ```

3. 测试配置：
   ```bash
   sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
   ```

</details>
