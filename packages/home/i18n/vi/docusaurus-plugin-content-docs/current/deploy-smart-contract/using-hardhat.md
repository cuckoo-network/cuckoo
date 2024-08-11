# Triển khai Hợp đồng Thông minh trên Cuckoo Chain với Hardhat

Hướng dẫn này sẽ giúp bạn triển khai một hợp đồng thông minh trên Ethereum L2 của Cuckoo Chain bằng cách sử dụng Hardhat và TypeScript.

#### Điều kiện tiên quyết

- **Node.js và npm:** Đảm bảo cả hai đã được cài đặt. [Tải xuống tại đây](https://nodejs.org/).

- **Ví Ethereum:** Một khóa riêng cho Cuckoo Testnet có $CAI testnet. Nhận từ [Testnet Faucets](https://cuckoo.network/portal/faucet/). Sử dụng một ví mới không chứa tài sản thực để đảm bảo an toàn.

- **Kiến thức cơ bản về Solidity và CLI:** Có ích nhưng không bắt buộc!

## Những gì bạn sẽ học

- Thiết lập một dự án Hardhat dựa trên TypeScript.
- Viết một hợp đồng thông minh Ethereum đơn giản.
- Cấu hình Hardhat cho Cuckoo Testnet.
- Triển khai hợp đồng thông minh của bạn trên Cuckoo.

## Bước 1: Khởi tạo Dự án TypeScript Hardhat

Mở terminal của bạn và tạo một thư mục dự án mới, sau đó điều hướng vào thư mục đó:

```bash
mkdir my-hardhat-project && cd my-hardhat-project
```

Khởi tạo một dự án npm:

```bash
npm init -y
```

Cài đặt các gói cần thiết cho Hardhat và TypeScript:

```bash
npm install --save-dev hardhat ts-node typescript @nomiclabs/hardhat-ethers ethers
```

Khởi tạo một dự án Hardhat mới với TypeScript:

```bash
npx hardhat init
```

Làm theo các lời nhắc:

- Chọn "Create a TypeScript project".
- Chọn "Yes" để thêm `.gitignore`.
- Chọn "Yes" để cài đặt các phụ thuộc của dự án mẫu.

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

👷 Chào mừng bạn đến với Hardhat v2.18.2 👷‍

✔ Bạn muốn làm gì? · Create a TypeScript project
✔ Thư mục gốc của dự án Hardhat: · /Users/Cuckoo/my-hardhat-project
✔ Bạn có muốn thêm một .gitignore? (Y/n) · y
✔ Bạn có muốn cài đặt các phụ thuộc của dự án mẫu này với npm (@nomicfoundation/hardhat-toolbox)? (Y/n) · y
```

## Bước 2: Viết Hợp đồng Thông minh

Trong thư mục `contracts`, xóa `Lock.sol` và tạo một tệp mới `HelloWorld.sol`:

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

## Bước 3: Cấu hình Hardhat cho Cuckoo

Chỉnh sửa tệp `hardhat.config.ts` để bao gồm các cài đặt cho Cuckoo Testnet:

```typescript
import "@nomiclabs/hardhat-ethers";
import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {
  networks: {
    cuckoo: {
      url: "https://testnet-rpc.cuckoo.network",
      chainId: 1210,
      accounts: ["YOUR_PRIVATE_KEY_HERE"] // Thay thế bằng khóa riêng của bạn
    }
  },
  solidity: "0.8.0",
};

export default config;
```

Thay thế `YOUR_PRIVATE_KEY_HERE` bằng khóa riêng của bạn trên Cuckoo Testnet. **Không chia sẻ khóa riêng của bạn hoặc đẩy nó lên GitHub.**

## Bước 4: Biên dịch Hợp đồng Thông minh

Biên dịch hợp đồng thông minh:

```bash
npx hardhat compile
```

## Bước 5: Triển khai Hợp đồng Thông minh

Trong thư mục `scripts`, tạo một tệp mới `deploy.ts`:

```typescript
import { ethers } from "hardhat";

async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const gasPrice = ethers.utils.parseUnits('10', 'gwei');
    const gasLimit = 500000;
    const helloWorld = await HelloWorld.deploy({ gasPrice: gasPrice, gasLimit: gasLimit });
    await helloWorld.deployed();
    console.log("HelloWorld deployed to:", helloWorld.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
```

Điều chỉnh `gasPrice` và `gasLimit` nếu cần. Kiểm tra [BlockScout](https://testnet-scan.cuckoo.network/) để biết chi tiết về chuỗi.

Triển khai hợp đồng thông minh lên Cuckoo Testnet:

```bash
npx hardhat run scripts/deploy.ts --network cuckoo
```

## Bước 6: Xác minh Triển khai

Xác minh việc triển khai hợp đồng thông minh của bạn trên trình khám phá khối Cuckoo Testnet: [BlockScout](https://testnet-scan.cuckoo.network/). Sử dụng địa chỉ hợp đồng từ console để xem chi tiết.

## Kết luận

Chúc mừng! Bạn đã triển khai thành công một hợp đồng thông minh trên Cuckoo Testnet bằng Hardhat và TypeScript. Để tìm hiểu thêm về Cuckoo và cách biến mã của bạn thành kinh doanh, tham gia [Discord](https://cuckoo.network/dc) của chúng tôi và chào hỏi 👋.
