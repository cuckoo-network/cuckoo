# How to Run a Miner Node

Miner nodes are integral to our network, taking on tasks and earning rewards through inference.

> Please note that miner nodes are still in heavy development and subject to substantial changes. The current GPU mining rewards are 300 $CAI per GPU per day.

## Stable Diffusion Miner

### Minimum Hardware Configuration

| Component          | Requirement               |
|--------------------|---------------------------|
| **GPU**            | NVIDIA L4, 3080           |
| **RAM**            | 8-16 GB                   |
| **CPU**            | 1 core                    |
| **Storage**        | Depends on traffic volume |

### Getting Started

Follow these steps to set up and run your Stable Diffusion Miner:

1. **Clone the Repository**

    ```sh
    git clone https://github.com/cuckoo-network/stable-diffusion-miner-docker.git
    ```

2. **Navigate to the Project Directory**

    ```sh
    cd stable-diffusion-miner-docker
    ```

3. **Download the Necessary Files**

    ```sh
    make download
    ```

4. **Start the Miner**

   Add your private key to the command below and start the miner:

    ```sh
    ETH_PRIVATE_KEY="" make start
    ```

Ensure you have the required hardware and follow the setup instructions carefully. Stay tuned for updates as we continue to develop and enhance the miner node functionality.


<details class="p-4 bg-white rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
  <summary class="cursor-pointer text-xl font-semibold">
    How to setup for Bare Metal Ubuntu Server?
  </summary>
  # Bare Metal Ubuntu Server

### Install Nvidia Container Toolkit

If you encounter the following error when running `make start`:

```text
[+] Running 1/2
 ✔ Container webui-docker-relay-node-1  Running                                                                                                                                             0.0s
 ⠹ Container webui-docker-auto-1        Starting                                                                                                                                            0.3s
Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error running hook #0: error running hook: exit status 1, stdout: , stderr: Auto-detected mode as 'legacy'
nvidia-container-cli: initialization error: load library failed: libnvidia-ml.so.1: cannot open shared object file: no such file or directory: unknown
make: *** [Makefile:11: start] Error 1
```

It means the Nvidia Container Toolkit is not installed. Follow the [official instructions to install the toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html).

### Custom Docker Daemon Configuration

To use a custom configuration file for Docker, follow these steps:

1. **Prepare Custom Configuration File**
   Ensure your custom configuration file is located at `$HOME/.config/docker/daemon.json`.

2. **Modify Docker systemd Service**
   If the `daemon.json` file contains `nvidia` but running `sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi` results in `docker: Error response from daemon: unknown or invalid runtime name: nvidia.`, modify the Docker systemd service file:

  1. Create a systemd drop-in directory for the Docker service:
     ```bash
     sudo mkdir -p /etc/systemd/system/docker.service.d
     ```

  2. Create or edit the `override.conf` file in this directory:
     ```bash
     sudo nano /etc/systemd/system/docker.service.d/override.conf
     ```

  3. Add the following configuration to specify the custom config file path:
     ```ini
     [Service]
     ExecStart=
     ExecStart=/usr/bin/dockerd --config-file=/home/your-username/.config/docker/daemon.json
     ```
     Replace `your-username` with your actual username. Use the full path instead of `$HOME`.

3. **Apply the Changes**
   Reload the systemd manager configuration and restart Docker:
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl restart docker
   ```

4. **Verify Configuration**
   Check if Docker is using your custom configuration:
   ```bash
   sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
   ```

### Troubleshooting: Failed to Initialize NVML

If you encounter `Failed to initialize NVML: Unknown Error`, follow these steps:

1. Edit the Nvidia container runtime configuration:
   ```bash
   sudo vim /etc/nvidia-container-runtime/config.toml
   ```
   Change `no-cgroups` to `false` and save the file.

2. Restart the Docker daemon:
   ```bash
   sudo systemctl restart docker
   ```

3. Test the configuration:
   ```bash
   sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
   ```

</details>
