# Cuckoo AI

**Mô hình phục vụ phi tập trung**

Trong hành trình phi tập trung hóa trí tuệ nhân tạo về mặt kỹ thuật, tài liệu này nhằm cung cấp một hướng dẫn toàn diện cho các nhà phát triển, thợ đào (Miners), nhà xây dựng ứng dụng và các bên liên quan tham gia vào hệ sinh thái Cuckoo AI. Tại đây, chúng tôi sẽ nêu rõ các thành phần cốt lõi, các tương tác và quy trình quan trọng để đảm bảo một mạng lưới AI phi tập trung liền mạch và đáng tin cậy.

## Tổng quan

Cuckoo AI tận dụng công nghệ blockchain để tạo ra một nền tảng phi tập trung, nơi các nhiệm vụ AI được phân phối cho một mạng lưới thợ đào, trong khi các nhà xây dựng ứng dụng và điều phối viên đảm bảo chất lượng và tính phù hợp của đầu ra AI. Hệ sinh thái này được hỗ trợ bởi Cuckoo Pay, một hệ thống thanh toán dựa trên blockchain, tạo điều kiện cho các giao dịch trong nền tảng.

## Tech Stack

![Cuckoo AI Tech Stack](https://cuckoo-network.b-cdn.net/cuckoo-tech-stack-img.webp "Cuckoo AI Tech Stack")

### Các thành phần chính

![Our Better Way](https://cuckoo-network.b-cdn.net/depin-layer-key-components.webp)

1. **Thợ đào:** Cá nhân hoặc tổ chức cung cấp tài nguyên tính toán để thực hiện các nhiệm vụ AI.
2. **Nhà xây dựng ứng dụng (Nút điều phối):** Các nhà phát triển tạo ra các ứng dụng AI trên nền tảng Cuckoo AI, chịu trách nhiệm phân phối nhiệm vụ và kiểm soát chất lượng.
3. **Người đặt cược:** Các tham gia viên đặt cược token để bầu chọn các thợ đào và điều phối viên đáng tin cậy.
4. **Hợp đồng đặt cược:** Một hợp đồng thông minh nơi thợ đào và điều phối viên đăng ký, và người đặt cược bỏ phiếu cho họ.
5. **Lưu trữ Blob:** Giải pháp lưu trữ phi tập trung để lưu kết quả của các nhiệm vụ AI.
6. **Cuckoo Pay:** Hệ thống thanh toán cho các giao dịch trong hệ sinh thái Cuckoo AI.

### Quy trình làm việc

1. Thợ đào đăng ký với hợp đồng đặt cược và đặt cược token.
2. Nhà xây dựng ứng dụng đăng ký các nút điều phối của họ với hợp đồng đặt cược.
3. Người đặt cược bỏ phiếu cho các thợ đào và điều phối viên mà họ tin tưởng.
4. Điều phối viên tham khảo thông tin đặt cược để gán nhiệm vụ vào hàng đợi.
5. Thợ đào được điều phối viên giao nhiệm vụ, thực hiện và tải kết quả lên lưu trữ blob.
6. Điều phối viên xác nhận kết quả từ lưu trữ blob và khởi tạo thanh toán cho thợ đào.
7. Thợ đào kiểm tra định kỳ các khoản thanh toán và có thể chặn các điều phối viên có hành vi xấu.
8. Khách hàng từ các blockchain khác nhau thanh toán cho dịch vụ AI bằng Cuckoo Pay.

## Phân công nhiệm vụ

Phân công nhiệm vụ và lập lịch trình là một chức năng quan trọng trong hệ sinh thái Cuckoo AI, đảm bảo phân phối nhiệm vụ hiệu quả và công bằng từ điều phối viên đến thợ đào.

Đề nghị nhiệm vụ: Các điều phối viên nội dung liệt kê các nhiệm vụ AI với các tham số cụ thể và giá đề nghị.

Đấu giá nhiệm vụ: Thợ đào chọn nhiệm vụ dựa trên hệ thống trọng số, xét theo số lượng token họ đặt cược so với tổng số, và đặt giá đấu thấp hơn nếu có thể. Các điều phối viên sau đó chọn tối đa bốn người đấu giá để thực hiện nhiệm vụ dựa trên giá đấu và số dư tài khoản của thợ đào, đồng thời cung cấp chi tiết nhiệm vụ.

Thanh toán: Cuối ngày, các điều phối viên phân phối token thanh toán cho thợ đào, hoàn tất quá trình thanh toán cho các nhiệm vụ đã thực hiện.

## Quản trị

Nền tảng Cuckoo AI tích hợp các cơ chế để duy trì sự tin cậy và tính toàn vẹn trong hệ sinh thái thông qua các điều kiện xử phạt đối với hành vi không tuân thủ.

### Điều kiện xử phạt

Đối với các điều phối viên xấu không thanh toán cho các nhiệm vụ đã hoàn thành, Cuckoo DAO sẽ đánh giá thấp hoặc thậm chí đưa điều phối viên vào danh sách đen.

Đối với các thợ đào xấu không thực hiện hoặc tải lên kết quả không đạt yêu cầu, điều phối viên sẽ ngừng thanh toán token.

Trong trường hợp có tranh chấp, thợ đào có thể nộp bằng chứng cho những người xử phạt được chỉ định và khởi động quy trình chặn điều phối viên không tuân thủ, bảo vệ tính toàn vẹn của hệ sinh thái.
