---
title: "Giao Thức Proof of Sampling: Khuyến Khích Trung Thực và Trừng Phạt Sự Không Trung Thực trong Suy Diễn AI Phi Tập Trung"
authors: [lark]
tags: [nghiên cứu]
image: https://cuckoo-network.b-cdn.net/proof-of-sampling-posp-protocol-decentralized-ai.webp
description: Tìm hiểu về cách tiếp cận độc đáo của giao thức Proof of Sampling (PoSP) trong việc khuyến khích hành vi trung thực và trừng phạt sự không trung thực giữa các nhà cung cấp GPU, đảm bảo tính bảo mật và độ tin cậy của các hệ thống suy diễn AI phi tập trung.
---

Trong lĩnh vực AI phi tập trung, việc đảm bảo tính toàn vẹn và độ tin cậy của các nhà cung cấp GPU là rất quan trọng. Giao thức Proof of Sampling (PoSP), như được nêu ra trong nghiên cứu gần đây từ Holistic AI, cung cấp một cơ chế tinh vi để khuyến khích các tác nhân tốt trong khi trừng phạt những kẻ xấu. Hãy cùng xem cách thức hoạt động của giao thức này, các khuyến khích kinh tế, hình phạt và ứng dụng của nó đối với suy diễn AI phi tập trung.

## Khuyến Khích Hành Vi Trung Thực

### Phần Thưởng Kinh Tế

Tại trung tâm của giao thức PoSP là các khuyến khích kinh tế được thiết kế để khuyến khích sự tham gia trung thực. Các node, hoạt động như những người xác nhận và xác minh, được thưởng dựa trên đóng góp của họ:

- **Người xác nhận:** Nhận phần thưởng (RA) nếu đầu ra được tính toán của họ là chính xác và không bị thách thức.
- **Người xác minh:** Chia sẻ phần thưởng (RV/n) nếu kết quả của họ phù hợp với người xác nhận và được xác minh là chính xác.

### Cân Bằng Nash Duy Nhất

Giao thức PoSP được thiết kế để đạt được Cân Bằng Nash duy nhất trong các chiến lược thuần túy, nơi tất cả các node đều có động lực để hành động trung thực. Bằng cách căn chỉnh lợi nhuận cá nhân với bảo mật hệ thống, giao thức đảm bảo rằng trung thực là chiến lược có lợi nhất cho các bên tham gia.

## Hình Phạt Cho Hành Vi Không Trung Thực

### Cơ Chế Cắt Giảm

Để ngăn chặn hành vi không trung thực, giao thức PoSP sử dụng cơ chế cắt giảm. Nếu một người xác nhận hoặc người xác minh bị phát hiện là không trung thực, họ sẽ phải chịu các hình phạt kinh tế đáng kể (S). Điều này đảm bảo rằng chi phí của việc không trung thực cao hơn nhiều so với bất kỳ lợi ích ngắn hạn nào có thể có được.

### Cơ Chế Thách Thức

Những thách thức ngẫu nhiên càng làm tăng cường tính bảo mật của hệ thống. Với một xác suất được xác định trước (p), giao thức kích hoạt một thách thức nơi nhiều người xác minh lại tính toán đầu ra của người xác nhận. Nếu phát hiện ra sai lệch, các tác nhân không trung thực sẽ bị trừng phạt. Quá trình lựa chọn ngẫu nhiên này làm cho việc đồng lõa và gian lận mà không bị phát hiện trở nên khó khăn cho những kẻ xấu.

## Các Bước Của Giao Thức PoSP

1. **Lựa Chọn Người Xác Nhận:** Một node được chọn ngẫu nhiên để hành động như một người xác nhận, tính toán và xuất ra một giá trị.

2. Xác Suất Thách Thức:

   Hệ thống có thể kích hoạt thách thức dựa trên xác suất được xác định trước.

  - **Không Có Thách Thức:** Người xác nhận được thưởng nếu không có thách thức nào được kích hoạt.
  - **Kích Hoạt Thách Thức:** Một số lượng (n) người xác minh được chọn ngẫu nhiên để xác minh đầu ra của người xác nhận.

3. Xác Minh:

   Mỗi người xác minh độc lập tính toán kết quả và so sánh với đầu ra của người xác nhận.

  - **Phù Hợp:** Nếu tất cả các kết quả phù hợp, cả người xác nhận và người xác minh đều được thưởng.
  - **Không Phù Hợp:** Quá trình phân xử xác định tính trung thực của người xác nhận và người xác minh.

4. **Hình Phạt:** Các node không trung thực bị trừng phạt, trong khi các người xác minh trung thực nhận được phần thưởng của họ.

## spML

Giao thức spML (học máy dựa trên mẫu) là một triển khai của giao thức Proof of Sampling (PoSP) trong mạng suy diễn AI phi tập trung.

### Các Bước Chính

1. **Đầu Vào Của Người Dùng**: Người dùng gửi đầu vào của họ đến một máy chủ được chọn ngẫu nhiên (người xác nhận) cùng với chữ ký số của họ.
2. **Đầu Ra Của Máy Chủ**: Máy chủ tính toán đầu ra và gửi lại cho người dùng cùng với một mã băm của kết quả.
3. **Cơ Chế Thách Thức**:
  - Với một xác suất được xác định trước (p), hệ thống kích hoạt một thách thức nơi một máy chủ khác (người xác minh) được chọn ngẫu nhiên để xác minh kết quả.
  - Nếu không có thách thức nào được kích hoạt, người xác nhận nhận phần thưởng (R) và quá trình kết thúc.
4. **Xác Minh**:
  - Nếu thách thức được kích hoạt, người dùng gửi cùng một đầu vào cho người xác minh.
  - Người xác minh tính toán kết quả và gửi lại cho người dùng cùng với mã băm.
5. **So Sánh**:
  - Người dùng so sánh các mã băm của đầu ra từ người xác nhận và người xác minh.
  - Nếu các mã băm khớp, cả người xác nhận và người xác minh đều được thưởng, và người dùng nhận được chiết khấu trên phí cơ bản.
  - Nếu các mã băm không khớp, người dùng sẽ phát sóng cả hai mã băm lên mạng.
6. **Phân Xử**:
  - Mạng lưới bỏ phiếu để xác định tính trung thực của người xác nhận và người xác minh dựa trên các sai lệch.
  - Các node trung thực được thưởng, trong khi những kẻ không trung thực bị trừng phạt (cắt giảm).

### Các Thành Phần và Cơ Chế Chính
- **Thực Thi ML Định Hướng**: Sử dụng toán học điểm cố định và thư viện số học dựa trên phần mềm để đảm bảo kết quả nhất quán, có thể tái sản xuất.
- **Thiết Kế Không Trạng Thái**: Xem mỗi truy vấn là độc lập, duy trì tính không trạng thái trong suốt quá trình ML.
- **Tham Gia Không Giới Hạn**: Cho phép bất kỳ ai tham gia mạng lưới và đóng góp bằng cách chạy một máy chủ AI.
- **Hoạt Động Ngoài Chuỗi**: Các suy luận AI được tính toán ngoài chuỗi để giảm tải cho blockchain, với các kết quả và chữ ký số được chuyển trực tiếp đến người dùng.
- **Hoạt Động Trên Chuỗi**: Các chức năng quan trọng, chẳng hạn như tính toán số dư và cơ chế thách thức, được xử lý trên chuỗi để đảm bảo tính minh bạch và bảo mật.

### Lợi Thế của spML
- **Bảo Mật Cao**: Đạt được bảo mật thông qua các khuyến khích kinh tế, đảm bảo các node hành động trung thực do tiềm năng bị trừng phạt vì không trung thực.
- **Gánh Nặng Tính Toán Thấp**: Người xác minh chỉ cần so sánh các mã băm trong hầu hết các trường hợp, giảm tải tính toán trong quá trình xác minh.
- **Khả Năng Mở Rộng**: Có thể xử lý hoạt động mạng lưới rộng mà không làm suy giảm hiệu suất đáng kể.
- **Đơn Giản**: Duy trì sự đơn giản trong triển khai, nâng cao khả năng tích hợp và bảo trì dễ dàng.

### So Sánh Với Các Giao Thức Khác
- **Optimistic Fraud Proof (opML)**:
  - Dựa vào các biện pháp trừng phạt kinh tế cho hành vi gian lận và một cơ chế giải quyết tranh chấp.
  - Dễ bị tổn thương bởi các hoạt động gian lận nếu không đủ số lượng người xác minh trung thực.
- **Zero Knowledge Proof (zkML)**:
  - Đảm bảo bảo mật cao thông qua các chứng minh mật mã.
  - Gặp khó khăn về khả năng mở rộng và hiệu suất do gánh nặng tính toán cao.
- **spML**:
  - Kết hợp bảo mật cao thông qua các khuyến khích kinh tế, gánh nặng tính toán thấp và khả năng mở rộng cao.
  - Đơn giản hóa quá trình xác minh bằng cách tập trung vào việc so sánh mã băm, giảm nhu cầu tính toán phức tạp trong các thách thức.

## Tóm Tắt

Giao thức Proof of Sampling (PoSP) cân bằng hiệu quả nhu cầu khuyến khích các tác nhân tốt và ngăn chặn các tác nhân xấu, đảm bảo tính bảo mật và độ tin cậy của các hệ thống phi tập trung. Bằng cách kết hợp phần thưởng kinh tế với các hình phạt nghiêm khắc, PoSP tạo ra một môi trường mà hành vi trung thực không chỉ được khuyến khích mà còn cần thiết để thành công. Khi AI phi tập trung tiếp tục phát triển, các giao thức như PoSP sẽ là điều cần thiết để duy trì tính toàn vẹn và độ tin cậy của các hệ thống tiên tiến này.

- nguồn: https://cuckoo.network/blog/2024/06/17/proof-of-sampling-posp-protocol-decentralized-ai
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
