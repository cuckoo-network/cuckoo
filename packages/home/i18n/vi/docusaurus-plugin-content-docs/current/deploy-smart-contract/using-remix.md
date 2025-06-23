# Sử Dụng Remix

**Cách Triển Khai với Remix IDE trên Cuckoo Chain**

Cuckoo Chain là một Layer-2 của Arbitrum được thiết kế cho sự phát triển vượt bậc. Vì được xây dựng trên nền tảng Arbitrum, Cuckoo Chain tương thích với EVM, cho phép bạn dễ dàng chuyển các hợp đồng thông minh dựa trên Ethereum mà không cần thay đổi mã nguồn.

Trong hướng dẫn này, chúng tôi sẽ hướng dẫn bạn cách triển khai một hợp đồng thông minh trên Cuckoo Chain bằng cách sử dụng [Remix IDE](https://remix.ethereum.org/).

Hướng dẫn này giả định rằng bạn đã có Sepolia ETH và đã chuyển nó sang Mạng Cuckoo Testnet.

## 1. Triển Khai Sử Dụng Remix

Trước tiên, hãy đảm bảo rằng bạn đã thêm mạng Cuckoo vào MetaMask của mình. Thực hiện theo hướng dẫn từng bước để thêm Cuckoo Testnet vào MetaMask.

Bây giờ chúng ta đã sẵn sàng bắt đầu!

[Remix](https://remix.ethereum.org/) là một công cụ không cần cài đặt với giao diện đồ họa để phát triển hợp đồng thông minh. Nó cho phép triển khai dễ dàng, gỡ lỗi, tương tác với hợp đồng thông minh, và nhiều hơn thế nữa. Đây là một công cụ tuyệt vời để thử nghiệm các thay đổi nhanh chóng và tương tác với các hợp đồng đã triển khai.

![Đây là một ảnh chụp màn hình cho thấy Remix IDE. Có một hợp đồng thông minh cơ bản sẽ được sử dụng cho hướng dẫn này.](https://cuckoo-network.b-cdn.net/using-remix2.webp)

Trong hướng dẫn này, chúng ta sẽ triển khai hợp đồng thông minh '1_Storage.sol' đi kèm như một ví dụ trong Remix, nhưng bạn có thể sử dụng mã của riêng mình. Dưới đây là mã mẫu mà bạn có thể dán vào bất kỳ tệp `.sol` nào:

### 1_Storage.sol

```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Storage {
    uint256 number;

    function store(uint256 num) public {
        number = num;
    }

    function retrieve() public view returns (uint256) {
        return number;
    }
}
```

Để biên dịch hợp đồng thông minh của bạn, hãy truy cập tab Solidity Compiler và chọn hợp đồng bạn muốn biên dịch. Nhấp vào "Compile". Bạn cũng có thể bật "Auto Compile" để tự động biên dịch bất cứ khi nào bạn thay đổi mã hợp đồng.

Hãy chắc chắn mở các cấu hình nâng cao và đặt phiên bản EVM là London. Điều này nhằm tránh các vấn đề với mã lệnh PUSH0. Bạn có thể đọc thêm về vấn đề với các chuỗi Optimism [tại đây](https://community.optimism.io/docs/developers/build/differences/#opcode-differences).



<img src="https://cuckoo-network.b-cdn.net/using-remix3.webp" style={{height: "500px"}} alt="Remix configuration screenshot" />



### Tab Solidity Compiler

Khi hợp đồng thông minh được biên dịch thành công, chuyển sang tab "Deploy & Run Transactions".

Trong menu dropdown "Environment", chọn "Injected Provider - MetaMask". Điều này sẽ kết nối MetaMask của bạn với Remix và cho phép bạn thực hiện các giao dịch từ ví được kết nối.

Hãy chắc chắn rằng bạn đã chọn mạng Cuckoo Chain trong MetaMask trước khi triển khai.

<img src="https://cuckoo-network.b-cdn.net/using-remix3.webp" style={{height: "500px"}} alt="Remix deploy tab screenshot" />

<img src="https://cuckoo-network.b-cdn.net/using-remix4.webp" style={{height: "500px"}} alt="Deploying contract screenshot" />



Chọn hợp đồng đã biên dịch mà bạn muốn triển khai và nhấp vào 'Deploy'.

Bây giờ, MetaMask sẽ bật lên và yêu cầu bạn xác nhận giao dịch với mức phí cực thấp.

<img src="https://cuckoo-network.b-cdn.net/using-remix5.webp" style={{height: "500px"}} alt="MetaMask confirmation screenshot" />



**CHÚC MỪNG! Bạn vừa triển khai hợp đồng thông minh đầu tiên của mình lên Cuckoo Chain.**

------

### 2. Cách Khám Phá và Tương Tác với Hợp Đồng Thông Minh Đã Triển Khai

Bây giờ bạn đã triển khai hợp đồng thông minh đầu tiên của mình lên Cuckoo Chain, hãy xem cách tương tác với nó.

Bạn sẽ thấy hợp đồng thông minh đã triển khai của mình bên dưới tab 'Deploy & Run Transactions'. Bạn có thể sử dụng giao diện của Remix để gọi các phương thức được định nghĩa trong hợp đồng thông minh và truy cập các biến công khai của nó.

Chúng ta cũng có thể tìm hợp đồng thông minh đã triển khai của mình trong [Blockscout](https://testnet-scan.cuckoo.network/), trình quét khối của Cuckoo. Sao chép địa chỉ hợp đồng từ Remix, truy cập [Blockscout](https://testnet-scan.cuckoo.network/), và dán vào thanh tìm kiếm.

<img src="https://cuckoo-network.b-cdn.net/using-remix6.webp" style={{height: "500px"}} alt="Blockscout explorer screenshot" />



Ảnh chụp màn hình bên dưới hiển thị hợp đồng thông minh đã triển khai của chúng tôi, nơi bạn có thể thấy tất cả các giao dịch, ví người tạo, số dư, và nhiều hơn nữa!

Lưu ý rằng nếu bạn gọi một trong những phương thức của hợp đồng thông minh trong Remix, bạn sẽ thấy giao dịch xuất hiện trong trình khám phá này. Bạn có thể tương tác trực tiếp với hợp đồng thông minh đã triển khai của mình bằng Remix.

![img](https://cuckoo-network.b-cdn.net/using-remix7.webp)

**Bạn đã học cách triển khai hợp đồng thông minh trên Cuckoo Chain bằng Remix IDE trực tuyến!**

Trong hướng dẫn này, chúng tôi cũng đã đề cập đến cầu nối Cuckoo, trình quét khối, và cách tương tác với hợp đồng của bạn.

Để tìm hiểu thêm về Cuckoo Chain và cách biến mã của bạn thành một doanh nghiệp, tham gia [Discord](https://cuckoo.network/dc) của chúng tôi và chào hỏi 👋
