# How to Run a Miner Node

Miner nodes are integral to our network, taking on tasks and earning rewards through inference.

> Please note that miner nodes are still in heavy development and subject to substantial changes. Consequently, _there are no miner rewards available for now_.

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
    git clone git@github.com:cuckoo-network/stable-diffusion-miner-docker.git
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
