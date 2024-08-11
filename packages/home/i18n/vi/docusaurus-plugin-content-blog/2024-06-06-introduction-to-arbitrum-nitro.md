---
title: "Giới Thiệu Kiến Trúc Arbitrum Nitro"
authors: [lark]
tags: [kỹ thuật, nghiên cứu]
image: https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp
---

Arbitrum Nitro, được phát triển bởi Offchain Labs, là một giao thức blockchain Layer 2 thế hệ thứ hai được thiết kế để cải thiện thông lượng, tính cuối cùng và giải quyết tranh chấp. Nó được xây dựng dựa trên giao thức Arbitrum ban đầu, mang lại những cải tiến đáng kể đáp ứng nhu cầu hiện đại của blockchain.

![](https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp)

### Các Tính Năng Chính của Arbitrum Nitro

Arbitrum Nitro hoạt động như một giải pháp Layer 2 trên Ethereum, hỗ trợ thực thi các hợp đồng thông minh bằng mã Ethereum Virtual Machine (EVM). Điều này đảm bảo tương thích với các ứng dụng và công cụ Ethereum hiện có. Giao thức đảm bảo cả an toàn và tiến bộ, với điều kiện chuỗi Ethereum nền tảng vẫn an toàn và hoạt động, và ít nhất một người tham gia trong giao thức Nitro hành động trung thực.

### Cách Tiếp Cận Thiết Kế

Kiến trúc của Nitro được xây dựng dựa trên bốn nguyên tắc cốt lõi:

- **Sắp xếp Theo Sau Thực Thi Xác Định:** Các giao dịch được sắp xếp trước, sau đó được xử lý một cách xác định. Cách tiếp cận hai giai đoạn này đảm bảo một môi trường thực thi nhất quán và đáng tin cậy.
- **Geth Là Cốt Lõi:** Nitro sử dụng gói go-ethereum (geth) để thực thi và duy trì trạng thái cốt lõi, đảm bảo sự tương thích cao với Ethereum.
- **Tách Biệt Thực Thi Khỏi Chứng Minh:** Chức năng chuyển đổi trạng thái được biên dịch cho cả thực thi tự nhiên và web assembly (wasm) để tạo điều kiện cho thực thi hiệu quả và chứng minh có cấu trúc, độc lập với máy.
- **Optimistic Rollup Với Các Chứng Minh Gian Lận Tương Tác:** Xây dựng dựa trên thiết kế ban đầu của Arbitrum, Nitro áp dụng giao thức optimistic rollup được cải tiến với cơ chế chứng minh gian lận phức tạp.

### Sắp Xếp và Thực Thi

Quá trình xử lý giao dịch trong Nitro bao gồm hai thành phần chính: Sequencer và Chức Năng Chuyển Đổi Trạng Thái (STF).

![Kiến Trúc Arbitrum Nitro](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro.webp "Kiến Trúc Arbitrum Nitro")

- **Sequencer:** Sắp xếp các giao dịch đến và cam kết theo thứ tự này. Nó đảm bảo rằng chuỗi giao dịch được biết và đáng tin cậy, đăng tải nó cả dưới dạng luồng thời gian thực và dưới dạng các lô dữ liệu nén trên chuỗi Ethereum Layer 1. Cách tiếp cận kép này nâng cao độ tin cậy và ngăn chặn kiểm duyệt.
- **Thực Thi Xác Định:** STF xử lý các giao dịch đã sắp xếp, cập nhật trạng thái chuỗi và tạo ra các khối mới. Quá trình này là xác định, có nghĩa là kết quả chỉ phụ thuộc vào dữ liệu giao dịch và trạng thái trước đó, đảm bảo tính nhất quán trên toàn mạng.

### Kiến Trúc Phần Mềm: Geth Là Cốt Lõi

![Kiến Trúc Arbitrum Nitro, Lớp](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro-architecture-layered.webp "Kiến Trúc Arbitrum Nitro, Lớp")

Kiến trúc phần mềm của Nitro được cấu trúc trong ba lớp:

- **Lớp Cơ Sở (Geth Core):** Lớp này xử lý việc thực thi các hợp đồng EVM và duy trì các cấu trúc dữ liệu trạng thái Ethereum.
- **Lớp Trung Gian (ArbOS):** Phần mềm tùy chỉnh cung cấp chức năng Layer 2, bao gồm việc giải nén các lô của sequencer, quản lý chi phí gas và hỗ trợ các chức năng cross-chain.
- **Lớp Trên Cùng:** Được rút ra từ geth, lớp này xử lý các kết nối, các yêu cầu RPC đến và các chức năng nút cấp cao khác.

### Tương Tác Cross-Chain

Arbitrum Nitro hỗ trợ các tương tác cross-chain an toàn thông qua các cơ chế như Outbox, Inbox và Retryable Tickets.

- **Outbox:** Cho phép các cuộc gọi hợp đồng từ Layer 2 đến Layer 1, đảm bảo rằng các thông điệp được truyền và thực thi an toàn trên Ethereum.
- **Inbox:** Quản lý các giao dịch được gửi đến Nitro từ Ethereum, đảm bảo chúng được bao gồm theo đúng thứ tự.
- **Retryable Tickets:** Cho phép gửi lại các giao dịch thất bại, đảm bảo độ tin cậy và giảm nguy cơ mất giao dịch.

### Gas và Phí

Nitro áp dụng một cơ chế đo gas và định giá tinh vi để quản lý chi phí giao dịch:

- **L2 Gas Metering và Định Giá:** Theo dõi việc sử dụng gas và điều chỉnh phí cơ sở theo thuật toán để cân bằng nhu cầu và năng lực.
- **L1 Data Metering và Định Giá:** Đảm bảo chi phí liên quan đến các tương tác Layer 1 được bao phủ, sử dụng một thuật toán định giá thích ứng để phân bổ các chi phí này một cách chính xác giữa các giao dịch.

### Kết Luận

Cuckoo Network tự tin đầu tư vào sự phát triển của Arbitrum. Các giải pháp Layer 2 tiên tiến của Arbitrum Nitro mang lại khả năng mở rộng vượt trội, tính cuối cùng nhanh hơn và giải quyết tranh chấp hiệu quả. Sự tương thích với Ethereum đảm bảo một môi trường an toàn, hiệu quả cho các ứng dụng phi tập trung của chúng tôi, phù hợp với cam kết đổi mới và hiệu suất của chúng tôi.

- source: https://cuckoo.network/blog/2024/06/06/introduction-to-arbitrum-nitro
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
