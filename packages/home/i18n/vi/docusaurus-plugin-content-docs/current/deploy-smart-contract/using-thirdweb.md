# Triển Khai Hợp Đồng Thông Minh trên Cuckoo với Thirdweb CLI & Dashboard

Thirdweb là một framework phát triển web3 mạnh mẽ được thiết kế để kết nối liền mạch các ứng dụng và trò chơi của bạn với các mạng lưới phi tập trung. Với sự tích hợp gần đây của Cuckoo, bạn có thể tận dụng các tính năng của Thirdweb để triển khai và quản lý hợp đồng thông minh của mình một cách hiệu quả.

Hướng dẫn này giả định rằng bạn đã có **Ví Ethereum** với khóa riêng cho Cuckoo Testnet có testnet $CAI. Nhận nó từ [Testnet Faucets](https://cuckoo.network/portal/faucet/). Sử dụng ví mới không có tiền thật để bảo mật.

## Bước 1: Cài Đặt Thirdweb CLI

Bắt đầu bằng cách cài đặt Thirdweb CLI toàn cầu. Mở terminal của bạn và thực hiện lệnh sau:

```bash
npm install -g thirdweb
```

Xác minh cài đặt:

```bash
thirdweb --version
```

Để biết hướng dẫn chi tiết, hãy tham khảo [tài liệu chính thức](https://portal.thirdweb.com/cli/create).

## Bước 2: Thiết Lập Môi Trường Cục Bộ

Tạo một dự án mới trên máy cục bộ của bạn:

```bash
npx thirdweb create
```

Làm theo các hướng dẫn để thiết lập môi trường của bạn. Trong hướng dẫn này, chúng ta sẽ triển khai một token ERC-20 với tiện ích Drop, cho phép đúc, đốt và airdrop token thông qua dashboard. Thirdweb cung cấp các hợp đồng đã được kiểm tra và sẵn sàng để triển khai.

Tham khảo hình ảnh dưới đây để tạo hợp đồng thông minh ví dụ, hoặc sử dụng mã của riêng bạn.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-1.webp)

Sau khi thiết lập, bạn sẽ có một thư mục tên là "my-token" (hoặc tên dự án bạn chọn). Mở thư mục này trong trình soạn thảo mã yêu thích của bạn để xem hoặc chỉnh sửa hợp đồng thông minh.

## Bước 3: Nhận API Key từ Thirdweb

Dịch vụ Thirdweb yêu cầu một API key. Làm theo các bước sau để tạo một API key:

1. Truy cập [Thirdweb API Keys](https://thirdweb.com/dashboard/settings/api-keys).
2. Kết nối ví của bạn và ký yêu cầu trong Metamask (hoặc ví ưa thích của bạn).
3. Chuyển sang mạng Cuckoo và tạo một API key.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-2.webp)

Làm theo các bước hiển thị dưới đây:

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-3.webp)

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-4.webp)

Đảm bảo bạn lưu trữ an toàn Client ID và Secret Key của mình.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-5.webp)

## Bước 4: Triển Khai Hợp Đồng Thông Minh

Chạy lệnh sau tại thư mục gốc của dự án để triển khai hợp đồng của bạn:

```bash
npx thirdweb deploy
```

Bạn sẽ thấy một yêu cầu tương tự như thế này:

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-6.webp)

Nếu trình duyệt của bạn không tự động mở, hãy sao chép liên kết từ terminal và dán vào trình duyệt của bạn. Chọn mạng testnet Cuckoo từ danh sách.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-7.webp)

Điền các thông số hợp đồng và nhấp vào "Deploy Now". Đảm bảo bạn có đủ ETH trên Cuckoo để trả phí gas. Đánh dấu vào ô để thêm dashboard cho hợp đồng, cho phép các tính năng tương tác nâng cao.

![img](https://cuckoo-network.b-cdn.net/using-thirdweb-8.webp)

Bạn sẽ cần ký một giao dịch không tốn phí để chấp thuận dashboard.

## Bước 5: Sử Dụng Dashboard Hợp Đồng Thông Minh

Để quản lý các hợp đồng của bạn, hãy truy cập [Thirdweb Contracts Dashboard](https://thirdweb.com/dashboard/contracts). Tại đây, bạn có thể xem tất cả các hợp đồng đã triển khai của mình.

Nhấp vào một hợp đồng để truy cập dashboard của nó và bắt đầu tương tác với nó. Tab explorer cho phép bạn xem và sử dụng tất cả các phương thức đọc và viết của hợp đồng của bạn.

Một trong những tính năng hữu ích nhất là tab "Build", cung cấp các đoạn mã để kết nối với hợp đồng của bạn bằng các ngôn ngữ và framework khác nhau, chẳng hạn như JavaScript, React, và Python.

Chúc mừng! Bạn đã triển khai thành công một hợp đồng thông minh trên Cuckoo bằng cách sử dụng Thirdweb CLI. Để tìm hiểu thêm về Cuckoo và tiềm năng của nó, tham gia [Discord](https://cuckoo.network/dc) của chúng tôi và chào hỏi 👋.
