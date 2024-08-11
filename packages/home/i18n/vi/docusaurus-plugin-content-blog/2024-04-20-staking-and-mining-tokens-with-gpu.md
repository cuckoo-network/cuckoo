---
title: Staking và đào token bằng GPU
authors: [lark]
tags: [công ty, lộ trình]
image: https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp
---

Cuckoo Network là thị trường phục vụ mô hình AI phi tập trung đầu tiên, thưởng cho những người đam mê AI, các nhà phát triển, và các thợ đào GPU bằng token tiền điện tử. Trên nền tảng của chúng tôi, các thợ đào chia sẻ GPU của họ với các nhà phát triển ứng dụng AI, được gọi là coordinators, để thực hiện các nhiệm vụ suy luận cho khách hàng cuối, giúp tất cả những người đóng góp có thể kiếm được token tiền điện tử.

![Staking và đào token bằng GPU](https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp "Staking và đào token bằng GPU")

> Cập nhật ngày 2024-07-09: Bài viết này dành cho testnet. Kiểm tra [bài viết này](/blog/2024/07/15/cuckoo-network-mining-gpu-july-2024) cho mainnet.

Khi thợ đào chia sẻ GPU của họ, làm thế nào để đảm bảo rằng họ không giả mạo kết quả? Cuckoo Network thiết lập niềm tin và tính toàn vẹn thông qua staking, phần thưởng và cơ chế trừng phạt (slashing). Hôm nay chúng tôi rất vui mừng thông báo rằng các staker có thể tham gia testnet của chúng tôi và đảm bảo niềm tin cho mạng AI phi tập trung này.

## **Tham gia testnet ngay hôm nay**

Đối với các staker:

1. Nhận token CAI từ [faucet testnet](https://cuckoo.network/portal/faucet)
2. Staking token tại [cổng staking / staking testnet](https://cuckoo.network/portal/staking/testnet)
3. Bỏ phiếu cho các coordinators hoặc thợ đào

![Cổng Cuckoo - Staking](https://cuckoo-network.b-cdn.net/staking-portal-screenshot.webp "Cổng Cuckoo - Staking")

Đối với thợ đào GPU:

1. Nhận token CAI bằng cách liên hệ với admin tại https://cuckoo.network/tg hoặc https://cuckoo.network/dc
2. Staking > 20K token tại cổng staking
3. Đăng ký minerAddress và thông tin giới thiệu. MinerAddress được khuyến nghị nên khác với địa chỉ staker của bạn.
4. Chạy node thợ đào với khóa riêng của minerAddress

Đối với Coordinators:

1. Nhận token CAI bằng cách liên hệ với admin tại https://cuckoo.network/tg hoặc https://cuckoo.network/dc
2. Staking > 2M token tại cổng staking
3. Đăng ký coordinatorAddress và thông tin giới thiệu. CoordinatorAddress được khuyến nghị nên khác với địa chỉ staker của bạn.
4. Chạy node coordinator với khóa riêng của minerAddress

## **Hoạt động như thế nào?**

Toàn bộ hệ thống cần một số vai trò để hoạt động cùng nhau:

- **GPU Miner Staker:** Cá nhân hoặc tổ chức chạy tài nguyên tính toán để thực hiện các nhiệm vụ AI. Họ giữ token CAI với một ví để staking trong mạng. Số token họ staking càng nhiều, cơ hội nhận được nhiệm vụ GPU càng cao.
- **App Builders (Coordinator Staker):** Các nhà phát triển tạo ra các ứng dụng AI trên Cuckoo Network, giám sát việc phân phối nhiệm vụ và kiểm soát chất lượng. Họ mang theo token CAI với ví để staking trong mạng. Số token họ staking càng nhiều, cơ hội nhận được thợ đào GPU sẵn sàng làm việc với họ càng cao.
- **Stakers:** Những người tham gia staking token để bỏ phiếu cho các Miners và Coordinators đáng tin cậy. Họ sẽ nhận được phần thưởng cho việc staking của mình.
- **Hợp đồng Staking:** Một hợp đồng thông minh nơi Miners và Coordinators đăng ký và được các staker bỏ phiếu.
- **Coordinator Node:** Các ứng dụng AI tạo sinh gọi API của node này để cung cấp nhiệm vụ GPU như việc tạo hình ảnh từ prompt trong mạng lưới.
- **Miner Node:** Các nhà cung cấp GPU chạy node thợ đào để thực hiện nhiệm vụ với GPU.

![img](https://cuckoo-network.b-cdn.net/cuckoo-staking@2x.webp)

Phân công nhiệm vụ và lịch trình là một chức năng quan trọng trong hệ sinh thái AI Cuckoo, đảm bảo việc phân phối nhiệm vụ từ Coordinators đến Miners hiệu quả và công bằng.

Tuy nhiên, các node phải thiết lập niềm tin trước khi tham gia hệ thống. Vì vậy, tất cả những người tham gia phải staking token trước khi đảm nhận bất kỳ vai trò nào.

Sau đó, các nhà phát triển ứng dụng AI tạo sinh, hay còn gọi là Coordinators, chạy node coordinator với khóa riêng mà địa chỉ đã được đăng ký với hợp đồng staking. Node này đọc thông tin đăng ký của thợ đào từ hợp đồng staking và sau đó lắng nghe yêu cầu từ các node thợ đào.

Các nhà cung cấp GPU chạy node thợ đào sẽ lấy thông tin từ hợp đồng staking cũng như yêu cầu từ các Coordinators về các nhiệm vụ đang chờ xử lý.

Khi ứng dụng AI tạo sinh cung cấp một nhiệm vụ cho Coordinator, Coordinator sẽ phân công nhiệm vụ cho các địa chỉ thợ đào đang hoạt động theo tỷ trọng staking của họ. Sau đó, các thợ đào tương ứng làm việc trên nhiệm vụ và cuối cùng nộp kết quả cho Coordinator.

## **Tóm tắt**

Cuckoo Network giới thiệu một nền tảng AI-to-Earn phi tập trung độc đáo, nhấn mạnh sự hợp tác và niềm tin. Bằng cách sử dụng các cơ chế staking và phần thưởng, nó đảm bảo tính xác thực và sự tham gia của tất cả các thành viên, bao gồm các nhà phát triển, thợ đào GPU, và stakers. Cách tiếp cận này đảm bảo phân phối nhiệm vụ đáng tin cậy và tạo ra một môi trường bền vững cho việc phát triển các công nghệ AI phi tập trung. Cuckoo mời gọi thêm nhiều người dùng khám phá mạng lưới của mình, mang đến cho họ cơ hội đóng góp vào sự phát triển của AI trong khi kiếm tiền điện tử.

- nguồn: https://cuckoo.network/blog/2024/04/20/staking-and-mining-tokens-with-gpu
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
