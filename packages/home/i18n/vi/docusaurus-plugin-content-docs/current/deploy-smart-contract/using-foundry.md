# Triển khai với Foundry trên Cuckoo Chain

Hướng dẫn này sẽ dẫn bạn qua quy trình triển khai token ERC20 trên Cuckoo Chain bằng cách sử dụng [Foundry](https://book.getfoundry.sh/). Foundry là một bộ công cụ phát triển hợp đồng thông minh dựa trên Rust, quản lý các phụ thuộc, biên dịch dự án, chạy thử nghiệm, triển khai, và cho phép tương tác với chuỗi thông qua dòng lệnh và các script Solidity.

Với việc Cuckoo Chain được xây dựng trên nền tảng Arbitrum và Ethereum Stack cùng với tính tương thích EVM, các hợp đồng thông minh dựa trên Ethereum có thể được chuyển đổi dễ dàng với những điều chỉnh tối thiểu.

## Điều Kiện Tiên Quyết

Bạn cần hoàn thành các bước sau, mất khoảng 10 phút:

- **Nhận $CAI trên Mạng Lưới Testnet Cuckoo:** Sử dụng [faucet này](https://cuckoo.network/portal/faucet/) để nhận một ít CAI.

- **Cài đặt Rust:** Nếu chưa cài Rust, hãy làm theo [hướng dẫn này](https://doc.rust-lang.org/book/ch01-01-installation.html).

- **Cài đặt Foundry:** Nếu chưa cài Foundry, hãy làm theo [hướng dẫn này](https://book.getfoundry.sh/getting-started/installation).

Hãy bắt đầu nào!

## Bước 1: Thiết Lập Dự Án

### 1.1 Khởi tạo Dự Án Foundry Mới

Mở terminal và chạy:

```bash
forge init my-project
```

### 1.2 Cài đặt OpenZeppelin Contracts

Thêm thư viện hợp đồng OpenZeppelin vào dự án của bạn:

```bash
forge install OpenZeppelin/openzeppelin-contracts
```

## Bước 2: Viết Hợp Đồng Token ERC20

### 2.1 Tạo Tệp Hợp Đồng

Trong thư mục `/src`, tạo một tệp có tên là `MyERC20.sol` và thêm mã sau:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";

contract MyERC20 is ERC20 {
    constructor() ERC20("MyToken", "MTK") {}
}
```

Token ERC20 đơn giản này có tên là "MyToken" với ký hiệu là "MTK". Bạn có thể chỉnh sửa tên và ký hiệu theo ý muốn.

Dưới đây là cấu trúc dự án của bạn cho đến thời điểm này:

![img](https://cuckoo-network.b-cdn.net/using-hardhat-1.webp)

## Bước 3: Biên Dịch Hợp Đồng

### 3.1 Biên Dịch Hợp Đồng Thông Minh

Sử dụng Foundry để biên dịch hợp đồng của bạn:

```bash
forge build
```

## Bước 4: Triển khai Hợp Đồng Token ERC20

### 4.1 Triển Khai Hợp Đồng

Để triển khai hợp đồng của bạn, hãy chạy lệnh sau, thay thế `<YOUR_PRIVATE_KEY>` bằng khóa riêng của bạn:

```bash
forge create --rpc-url https://testnet-rpc.cuckoo.network --private-key <YOUR_PRIVATE_KEY> src/MyERC20.sol:MyERC20
```

Không bao giờ chia sẻ khóa riêng của bạn công khai. Lưu trữ nó an toàn để ngăn chặn truy cập trái phép.

### Tùy Chọn: Xác minh Hợp Đồng Trong Quá Trình Triển Khai

Thêm cờ `--verify` để xác minh hợp đồng của bạn trong quá trình triển khai:

```bash
forge create --rpc-url https://testnet-rpc.cuckoo.network --private-key <YOUR_PRIVATE_KEY> src/MyERC20.sol:MyERC20 --verify --verifier blockscout --verifier-url https://testnet-scan.cuckoo.network/api\?
```

Bạn sẽ thấy một đầu ra tương tự như sau:

```bash
[⠢] Compiling... No files changed, compilation skipped
Deployer: 0x3F26b51E23D01b09f4079B2a9e00e6873a8409D8
Deployed to: 0x628F56856386A4De8414A4D8217D519bF94d03f0
Transaction hash: 0xbe2d27554f130a720c4dd82dad055c941ca44dee836f6333a8507d76022c158
```

Sao chép và lưu địa chỉ "Deployed to" để sử dụng sau này.

## Bước 5: Xác minh Hợp Đồng Sau Khi Triển Khai

### 5.1 Xác Minh Hợp Đồng

Đối với các hợp đồng đã được triển khai, sử dụng lệnh `verify-contract`:

```bash
forge verify-contract <CONTRACT_ADDRESS> src/MyERC20.sol:MyERC20 --verifier blockscout --verifier-url https://testnet-scan.cuckoo.network/api\?
```

## Bước 6: Tương tác với Hợp Đồng Đã Triển Khai

Sử dụng [Blockscout](https://testnet-scan.cuckoo.network/) để xem chi tiết hợp đồng của bạn. Dán địa chỉ hợp đồng từ đầu ra triển khai vào thanh tìm kiếm của Blockscout. Trong tab "Contract", bạn sẽ tìm thấy hợp đồng đã được xác minh của mình.

![img](https://cuckoo-network.b-cdn.net/using-hardhat-2.webp)

---

Chúc mừng! Bạn đã triển khai và xác minh thành công một hợp đồng thông minh trên Cuckoo Chain bằng Foundry.

Để tìm hiểu thêm về Cuckoo Chain và khám phá các cơ hội kinh doanh, tham gia [Discord](https://cuckoo.network/dc) của chúng tôi và chào hỏi 👋.
