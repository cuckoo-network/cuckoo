# Cách Chạy Một Nút Thợ Đào

Các nút thợ đào là phần không thể thiếu của mạng lưới của chúng tôi, thực hiện các nhiệm vụ và nhận phần thưởng thông qua việc suy luận.

> Lưu ý rằng các nút thợ đào vẫn đang trong giai đoạn phát triển mạnh và có thể thay đổi đáng kể. Hiện tại, phần thưởng khai thác GPU là 300 $CAI mỗi GPU mỗi ngày.

## Thợ Đào Stable Diffusion

### Cấu Hình Phần Cứng Tối Thiểu

| Thành phần          | Yêu cầu                    |
|---------------------|----------------------------|
| **GPU**             | NVIDIA L4, 3080            |
| **RAM**             | 8-16 GB                    |
| **CPU**             | 1 lõi                      |
| **Lưu trữ**         | Phụ thuộc vào lưu lượng truy cập |

### Bắt Đầu

Thực hiện theo các bước sau để thiết lập và chạy Thợ Đào Stable Diffusion của bạn:

1. **Clone Kho Lưu Trữ**

    ```sh
    git clone https://github.com/cuckoo-network/stable-diffusion-miner-docker.git
    ```

2. **Điều Hướng Tới Thư Mục Dự Án**

    ```sh
    cd stable-diffusion-miner-docker
    ```

3. **Tải Về Các Tệp Cần Thiết**

    ```sh
    make download
    ```

4. **Bắt Đầu Thợ Đào**

   Thêm khóa riêng tư của bạn vào lệnh dưới đây và bắt đầu thợ đào:

    ```sh
    ETH_PRIVATE_KEY="" make start
    ```

Đảm bảo bạn có phần cứng yêu cầu và làm theo hướng dẫn cài đặt một cách cẩn thận. Hãy theo dõi các bản cập nhật khi chúng tôi tiếp tục phát triển và nâng cao chức năng của nút thợ đào.

<details class="p-4 bg-white rounded-lg shadow hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
  <summary class="cursor-pointer text-xl font-semibold">
    Làm thế nào để thiết lập cho Máy Chủ Ubuntu Bare Metal?
  </summary>
  # Máy Chủ Ubuntu Bare Metal

### Cài Đặt Nvidia Container Toolkit

Nếu bạn gặp lỗi sau khi chạy lệnh `make start`:

```text
[+] Running 1/2
 ✔ Container webui-docker-relay-node-1  Running                                                                                                                                             0.0s
 ⠹ Container webui-docker-auto-1        Starting                                                                                                                                            0.3s
Error response from daemon: failed to create task for container: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: error during container init: error running hook #0: error running hook: exit status 1, stdout: , stderr: Auto-detected mode as 'legacy'
nvidia-container-cli: initialization error: load library failed: libnvidia-ml.so.1: cannot open shared object file: no such file or directory: unknown
make: *** [Makefile:11: start] Error 1
```

Điều này có nghĩa là Nvidia Container Toolkit chưa được cài đặt. Làm theo [hướng dẫn chính thức để cài đặt toolkit](https://docs.nvidia.com/datacenter/cloud-native/container-toolkit/latest/install-guide.html).

### Cấu Hình Docker Daemon Tùy Chỉnh

Để sử dụng tệp cấu hình tùy chỉnh cho Docker, hãy làm theo các bước sau:

1. **Chuẩn Bị Tệp Cấu Hình Tùy Chỉnh**
   Đảm bảo tệp cấu hình tùy chỉnh của bạn nằm ở `$HOME/.config/docker/daemon.json`.

2. **Chỉnh Sửa Dịch Vụ Docker systemd**
   Nếu tệp `daemon.json` chứa `nvidia` nhưng khi chạy `sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi` kết quả là `docker: Error response from daemon: unknown or invalid runtime name: nvidia.`, hãy chỉnh sửa tệp dịch vụ Docker systemd:

1. Tạo một thư mục drop-in systemd cho dịch vụ Docker:
   ```bash
   sudo mkdir -p /etc/systemd/system/docker.service.d
   ```

2. Tạo hoặc chỉnh sửa tệp `override.conf` trong thư mục này:
   ```bash
   sudo nano /etc/systemd/system/docker.service.d/override.conf
   ```

3. Thêm cấu hình sau để chỉ định đường dẫn tệp cấu hình tùy chỉnh:
   ```ini
   [Service]
   ExecStart=
   ExecStart=/usr/bin/dockerd --config-file=/home/your-username/.config/docker/daemon.json
   ```
   Thay `your-username` bằng tên người dùng thực của bạn. Sử dụng đường dẫn đầy đủ thay vì `$HOME`.

3. **Áp Dụng Thay Đổi**
   Tải lại cấu hình systemd và khởi động lại Docker:
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl restart docker
   ```

4. **Xác Minh Cấu Hình**
   Kiểm tra xem Docker có sử dụng cấu hình tùy chỉnh của bạn không:
   ```bash
   sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
   ```

### Khắc Phục Lỗi: Không Thể Khởi Tạo NVML

Nếu bạn gặp lỗi `Failed to initialize NVML: Unknown Error`, hãy làm theo các bước sau:

1. Chỉnh sửa cấu hình runtime của Nvidia container:
   ```bash
   sudo vim /etc/nvidia-container-runtime/config.toml
   ```
   Thay đổi `no-cgroups` thành `false` và lưu tệp.

2. Khởi động lại Docker daemon:
   ```bash
   sudo systemctl restart docker
   ```

3. Kiểm tra cấu hình:
   ```bash
   sudo docker run --rm --runtime=nvidia --gpus all ubuntu nvidia-smi
   ```

</details>

