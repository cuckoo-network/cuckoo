# マイナーノードの運用方法

マイナーノードは私たちのネットワークにとって不可欠な存在であり、タスクを引き受けて推論を通じて報酬を得ます。

> ご注意：マイナーノードはまだ開発中であり、今後大幅に変更される可能性があります。現在のGPUマイニング報酬は、GPU1台あたり1日300 $CAIです。

## Stable Diffusion Miner

### 最低限のハードウェア構成

| コンポーネント         | 要件                        |
|--------------------|---------------------------|
| **GPU**            | NVIDIA L4, 3080           |
| **RAM**            | 8-16 GB                   |
| **CPU**            | 1コア                    |
| **ストレージ**       | トラフィック量に依存         |

### 始める手順

以下の手順に従って、Stable Diffusion Minerをセットアップして運用してください：

1. **リポジトリをクローンする**

    ```sh
    git clone https://github.com/cuckoo-network/stable-diffusion-miner-docker.git
    ```

2. **プロジェクトディレクトリに移動する**

    ```sh
    cd stable-diffusion-miner-docker
    ```

3. **必要なファイルをダウンロードする**

    ```sh
    make download
    ```

4. **マイナーを起動する**

   下記のコマンドにプライベートキーを追加し、マイナーを開始します：

    ```sh
    ETH_PRIVATE_KEY="" make start
    ```

必要なハードウェアを揃え、セットアップ手順を慎重にフォローしてください。マイナーノード機能の開発と強化が進むにつれて、随時アップデートを行いますのでご留意ください。

<details class="p-4 bg-white rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
  <summary class="cursor-pointer text-xl font-semibold">
    ベアメタルUbuntuサーバーのセットアップ方法
  </summary>
  # ベアメタルUbuntuサーバー

### Nvidiaコンテナツールキットのインストール

`make start`を実行中に次のエラーが発生した場合：

```text
[+] Running 1/2
 ✔ Container webui-docker-relay-node-1  Running                                                                                                                                             0.0s
 ⠹ Container webui-docker-auto-1        Starting                                                                                                                                            0.3s
Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error running hook #0: error running hook: exit status 1, stdout: , stderr: Auto-detected mode as 'legacy'
nvidia-container-cli: initialization error: load library failed: libnvidia-ml.so.1: cannot open shared object file: no such file or directory: unknown
make: *** [Makefile:11: start] Error 1
```

これは、Nvidiaコンテナツールキットがインストールされていないことを意味します。[公式インストールガイド](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html)に従ってツールキットをインストールしてください。

### カスタムDockerデーモン設定

カスタム構成ファイルを使用してDockerを設定するには、以下の手順に従ってください：

1. **カスタム構成ファイルを準備する**
   カスタム構成ファイルが`$HOME/.config/docker/daemon.json`にあることを確認します。

2. **Docker systemdサービスを修正する**
   `daemon.json`ファイルに`nvidia`が含まれているが、`sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi`を実行しても`docker: Error response from daemon: unknown or invalid runtime name: nvidia.`というエラーが出る場合は、Docker systemdサービスファイルを修正します：

1. Dockerサービス用にsystemdドロップインディレクトリを作成します：
   ```bash
   sudo mkdir -p /etc/systemd/system/docker.service.d
   ```

2. このディレクトリ内で`override.conf`ファイルを作成または編集します：
   ```bash
   sudo nano /etc/systemd/system/docker.service.d/override.conf
   ```

3. カスタム構成ファイルのパスを指定する設定を追加します：
   ```ini
   [Service]
   ExecStart=
   ExecStart=/usr/bin/dockerd --config-file=/home/your-username/.config/docker/daemon.json
   ```
   `your-username`を実際のユーザー名に置き換えてください。`$HOME`の代わりにフルパスを使用してください。

3. **変更を適用する**
   systemdマネージャーの構成をリロードし、Dockerを再起動します：
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl restart docker
   ```

4. **構成を確認する**
   Dockerがカスタム構成を使用しているか確認します：
   ```bash
   sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
   ```

### トラブルシューティング：NVMLの初期化失敗

`Failed to initialize NVML: Unknown Error`というエラーが発生した場合は、以下の手順を試してください：

1. Nvidiaコンテナランタイムの構成を編集します：
   ```bash
   sudo vim /etc/nvidia-container-runtime/config.toml
   ```
   `no-cgroups`を`false`に変更してファイルを保存します。

2. Dockerデーモンを再起動します：
   ```bash
   sudo systemctl restart docker
   ```

3. 構成をテストします：
   ```bash
   sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
   ```

</details>
