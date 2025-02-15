---
title: "Sách trắng về Google Agent"
tags: [tác nhân AI, kiến trúc nhận thức, sách trắng Google]
keywords: [AI, tác nhân, kiến trúc nhận thức, Google, hệ thống AI]
authors: [lark]
description: Sách trắng của Google tiết lộ tiềm năng biến đổi của các tác nhân AI, thể hiện khả năng nhận thức, lý luận và ảnh hưởng đến thế giới thực của chúng. Khám phá cách các tác nhân này khác biệt với các mô hình AI truyền thống thông qua khả năng truy cập thông tin thời gian thực, thực hiện hành động và tích hợp công cụ.
image: "https://opengraph-image.blockeden.xyz/api/og-cuckoo-network?title=S%C3%A1ch%20tr%E1%BA%AFng%20v%E1%BB%81%20Google%20Agent"
---

# Sách trắng về Google Agent

Trong khi các mô hình ngôn ngữ như GPT-4 và Gemini đã thu hút sự chú ý của công chúng với khả năng hội thoại của chúng, một cuộc cách mạng sâu sắc hơn đang diễn ra: sự trỗi dậy của các tác nhân AI. Như được mô tả chi tiết trong sách trắng gần đây của Google, những tác nhân này không chỉ là chatbot thông minh – chúng là các hệ thống AI có thể chủ động nhận thức, lý luận và ảnh hưởng đến thế giới thực.

![](https://opengraph-image.blockeden.xyz/api/og-cuckoo-network?title=S%C3%A1ch%20tr%E1%BA%AFng%20v%E1%BB%81%20Google%20Agent)

## Sự phát triển của khả năng AI

Hãy nghĩ về các mô hình AI truyền thống như những giáo sư cực kỳ uyên bác bị nhốt trong một căn phòng không có internet hay điện thoại. Họ có thể đưa ra những hiểu biết sâu sắc, nhưng chỉ dựa trên những gì họ đã học trước khi vào phòng. Ngược lại, các tác nhân AI giống như những giáo sư với đầy đủ các công cụ hiện đại trong tay – họ có thể tra cứu thông tin hiện tại, gửi email, thực hiện tính toán và phối hợp các nhiệm vụ phức tạp.

Đây là những gì làm cho các tác nhân khác biệt với các mô hình truyền thống:

- **Thông tin thời gian thực**: Trong khi các mô hình bị giới hạn bởi dữ liệu huấn luyện của chúng, các tác nhân có thể truy cập thông tin hiện tại thông qua các công cụ và API bên ngoài
- **Thực hiện hành động**: Các tác nhân không chỉ đề xuất hành động – họ có thể thực hiện chúng thông qua các cuộc gọi hàm và tương tác API
- **Quản lý bộ nhớ**: Các tác nhân duy trì ngữ cảnh qua nhiều tương tác, học hỏi từ mỗi lần trao đổi để cải thiện phản hồi của họ
- **Tích hợp công cụ**: Khả năng sử dụng các công cụ và API bên ngoài được tích hợp sẵn trong kiến trúc của họ, không phải là một suy nghĩ sau

## Cách các tác nhân suy nghĩ: Kiến trúc nhận thức

![](https://cuckoo-network.b-cdn.net/google-agent-1-arch.webp)

Điều kỳ diệu thực sự của các tác nhân nằm ở "kiến trúc nhận thức" của chúng – hệ thống điều khiển cách chúng lý luận và đưa ra quyết định. Sách trắng chi tiết ba phương pháp chính:

1. **ReAct**: Một khung làm việc nơi các tác nhân luân phiên giữa việc lý luận về tình huống của họ và thực hiện các hành động cụ thể. Hãy tưởng tượng một đầu bếp liên tục đánh giá tiến độ của mình và điều chỉnh chiến lược nấu ăn.

2. **Chuỗi suy nghĩ**: Các tác nhân chia nhỏ các vấn đề phức tạp thành các bước nhỏ hơn, dễ quản lý hơn, thể hiện công việc của họ trên đường đi. Điều này giống như cách một nhà toán học giải quyết các phương trình phức tạp từng bước một.

3. **Cây suy nghĩ**: Các tác nhân khám phá nhiều con đường giải pháp có thể đồng thời, giống như một người chơi cờ đang xem xét các nước đi khác nhau và hậu quả của chúng.

![](https://cuckoo-network.b-cdn.net/google-agent-2-reasoning-in-the-orchestration-layer.webp)

Dưới đây là một ví dụ thực tế từ sách trắng về cách một tác nhân có thể xử lý yêu cầu đặt vé máy bay:

```
Người dùng: "Tôi muốn đặt vé máy bay từ Austin đến Zurich"

Suy nghĩ của tác nhân: Tôi nên tìm kiếm chuyến bay trước
Hành động: [Gọi API tìm kiếm chuyến bay]
Quan sát: Tìm thấy nhiều tùy chọn chuyến bay

Suy nghĩ của tác nhân: Tôi nên kiểm tra giá cả và tuyến đường tốt nhất
Hành động: [Phân tích kết quả tìm kiếm]
Quan sát: Tìm thấy các kết nối và giá cả tối ưu

Suy nghĩ của tác nhân: Người dùng cần tóm tắt rõ ràng về các tùy chọn
Câu trả lời cuối cùng: "Đây là những tùy chọn chuyến bay tốt nhất..."
```

## Bộ công cụ của tác nhân: Cách họ tương tác với thế giới

Sách trắng xác định ba cách riêng biệt mà các tác nhân có thể tương tác với các hệ thống bên ngoài:

### 1. Tiện ích mở rộng

Đây là **công cụ phía tác nhân cho phép gọi API trực tiếp**. Hãy nghĩ về chúng như đôi tay của tác nhân – chúng có thể vươn ra và tương tác trực tiếp với các dịch vụ bên ngoài. Sách trắng của Google cho thấy cách chúng đặc biệt hữu ích cho các hoạt động thời gian thực như kiểm tra giá vé máy bay hoặc dự báo thời tiết.

![](https://cuckoo-network.b-cdn.net/google-agent-3-extension.webp)

### 2. Chức năng
Không giống như tiện ích mở rộng, **chức năng chạy trên phía khách hàng**. Điều này cung cấp nhiều kiểm soát và bảo mật hơn, làm cho chúng lý tưởng cho các hoạt động nhạy cảm. Tác nhân chỉ định những gì cần phải làm, nhưng việc thực hiện thực tế diễn ra dưới sự giám sát của khách hàng.

![](https://cuckoo-network.b-cdn.net/google-agent-8-function.webp)

Sự khác biệt giữa tiện ích mở rộng và chức năng:

![](https://cuckoo-network.b-cdn.net/google-agent-9-diff-extensions-functions.webp)

### 3. Kho dữ liệu

Đây là thư viện tham khảo của tác nhân, cung cấp quyền truy cập vào cả dữ liệu có cấu trúc và không có cấu trúc. Sử dụng cơ sở dữ liệu vector và nhúng, các tác nhân có thể nhanh chóng tìm thấy thông tin liên quan trong các tập dữ liệu lớn.
![](https://cuckoo-network.b-cdn.net/google-agent-4-data-store.webp)

![](https://cuckoo-network.b-cdn.net/google-agent-5-data-store-details.webp)

## Cách các tác nhân học hỏi và cải thiện

Sách trắng phác thảo ba phương pháp thú vị để học tập của tác nhân:

1. **Học trong ngữ cảnh**: Giống như một đầu bếp được cung cấp công thức và nguyên liệu mới, các tác nhân học cách xử lý các nhiệm vụ mới thông qua các ví dụ và hướng dẫn được cung cấp tại thời gian chạy.

2. **Học dựa trên truy xuất**: Hãy tưởng tượng một đầu bếp có quyền truy cập vào một thư viện sách nấu ăn rộng lớn. Các tác nhân có thể linh hoạt lấy các ví dụ và hướng dẫn liên quan từ kho dữ liệu của họ.

   ![](https://cuckoo-network.b-cdn.net/google-agent-6-rag-workflow.webp)

3. **Tinh chỉnh**: Điều này giống như gửi một đầu bếp đến trường dạy nấu ăn – đào tạo có hệ thống về các loại nhiệm vụ cụ thể để cải thiện hiệu suất tổng thể.

## Xây dựng tác nhân sẵn sàng cho sản xuất

Phần thực tế nhất của sách trắng đề cập đến việc triển khai các tác nhân trong môi trường sản xuất. Sử dụng nền tảng Vertex AI của Google, các nhà phát triển có thể xây dựng các tác nhân kết hợp:

- Hiểu ngôn ngữ tự nhiên cho các tương tác với người dùng
- Tích hợp công cụ cho các hành động trong thế giới thực
- Quản lý bộ nhớ cho các phản hồi theo ngữ cảnh
- Hệ thống giám sát và đánh giá

![](https://cuckoo-network.b-cdn.net/google-agent-7-e2e-built-with-vertex.webp)

## Tương lai của kiến trúc tác nhân

Có lẽ điều thú vị nhất là khái niệm "**chuỗi tác nhân**" – kết hợp các tác nhân chuyên biệt để xử lý các nhiệm vụ phức tạp. Hãy tưởng tượng một hệ thống lập kế hoạch du lịch kết hợp:

- Một tác nhân đặt vé máy bay
- Một tác nhân đề xuất khách sạn
- Một tác nhân lập kế hoạch hoạt động địa phương
- Một tác nhân giám sát thời tiết

Mỗi tác nhân chuyên về lĩnh vực của mình nhưng làm việc cùng nhau để tạo ra các giải pháp toàn diện.

## Điều này có ý nghĩa gì cho tương lai

Sự xuất hiện của các tác nhân AI đại diện cho một sự thay đổi cơ bản trong trí tuệ nhân tạo – từ các hệ thống chỉ có thể suy nghĩ đến các hệ thống có thể suy nghĩ và thực hiện. Mặc dù chúng ta vẫn đang ở giai đoạn đầu, kiến trúc và phương pháp được phác thảo trong sách trắng của Google cung cấp một lộ trình rõ ràng về cách AI sẽ phát triển từ một công cụ thụ động thành một đối tác tích cực trong việc giải quyết các vấn đề thực tế.

Đối với các nhà phát triển, lãnh đạo doanh nghiệp và những người đam mê công nghệ, việc hiểu biết về các tác nhân AI không chỉ là theo kịp xu hướng – đó là chuẩn bị cho một tương lai nơi AI trở thành một đối tác hợp tác thực sự trong các nỗ lực của con người.

*Bạn thấy các tác nhân AI sẽ thay đổi ngành của bạn như thế nào? Chia sẻ suy nghĩ của bạn trong phần bình luận bên dưới.*
