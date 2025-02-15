---
title: "Arbitrum Nitro'nun Mimarisi'ne Giriş"
authors: [lark]
tags: [mühendislik, araştırma]
image: https://opengraph-image.blockeden.xyz/api/og-cuckoo-network?title=Arbitrum%20Nitro'nun%20Mimarisi'ne%20Giriş
---

Offchain Labs tarafından geliştirilen Arbitrum Nitro, işlem hacmini, kesinliği ve uyuşmazlık çözümünü iyileştirmek için tasarlanmış ikinci nesil bir Katman 2 blok zinciri protokolüdür. Orijinal Arbitrum protokolü üzerine inşa edilmiştir ve modern blok zinciri ihtiyaçlarına hitap eden önemli iyileştirmeler sunar.

![](https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp)

### Arbitrum Nitro'nun Temel Özellikleri

Arbitrum Nitro, Ethereum üzerinde bir Katman 2 çözümü olarak çalışır ve Ethereum Sanal Makinesi (EVM) kodunu kullanarak akıllı sözleşmelerin yürütülmesini destekler. Bu, mevcut Ethereum uygulamaları ve araçlarıyla uyumluluğu sağlar. Protokol, temel Ethereum zincirinin güvenli ve canlı kalması ve Nitro protokolündeki en az bir katılımcının dürüst davranması koşuluyla hem güvenliği hem de ilerlemeyi garanti eder.

### Tasarım Yaklaşımı

Nitro'nun mimarisi dört temel ilke üzerine kuruludur:

- **Deterministik Yürütme Sonrası Sıralama:** İşlemler önce sıralanır, ardından deterministik olarak işlenir. Bu iki aşamalı yaklaşım, tutarlı ve güvenilir bir yürütme ortamı sağlar.
- **Çekirdekte Geth:** Nitro, çekirdek yürütme ve durum bakımını sağlamak için go-ethereum (geth) paketini kullanır ve Ethereum ile yüksek uyumluluk sağlar.
- **Yürütmeyi Kanıtlama İşleminden Ayırma:** Durum geçiş fonksiyonu, hem yerel yürütme hem de web montajı (wasm) için derlenmiştir ve verimli yürütme ve yapılandırılmış, makine bağımsız kanıtlama sağlar.
- **Etkileşimli Dolandırıcılık Kanıtları ile İyimser Rollup:** Arbitrum'un orijinal tasarımına dayanarak, Nitro, gelişmiş bir dolandırıcılık kanıtı mekanizması ile iyileştirilmiş bir iyimser rollup protokolü kullanır.

### Sıralama ve Yürütme

Nitro'daki işlemlerin işlenmesi iki ana bileşeni içerir: Sıralayıcı ve Durum Geçiş Fonksiyonu (STF).

![Arbitrum Nitro Mimarisi](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro.webp "Arbitrum Nitro Mimarisi")

- **Sıralayıcı**: Gelen işlemleri sıralar ve bu sıraya bağlı kalır. İşlem sırasının bilinir ve güvenilir olmasını sağlar, bunu hem gerçek zamanlı bir akış olarak hem de sıkıştırılmış veri paketleri olarak Ethereum Katman 1 zincirine gönderir. Bu çift yaklaşım güvenilirliği artırır ve sansürü önler.
- **Deterministik Yürütme**: STF, sıralanmış işlemleri işler, zincir durumunu günceller ve yeni bloklar üretir. Bu süreç deterministiktir, yani sonuç yalnızca işlem verilerine ve önceki duruma bağlıdır ve ağ genelinde tutarlılığı sağlar.

### Yazılım Mimarisi: Çekirdekte Geth

![Arbitrum Nitro Mimarisi, Katmanlı](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro-architecture-layered.webp "Arbitrum Nitro Mimarisi, Katmanlı")

Nitro'nun yazılım mimarisi üç katman halinde yapılandırılmıştır:

- **Temel Katman (Geth Çekirdek)**: Bu katman, EVM sözleşmelerinin yürütülmesini ve Ethereum durum veri yapılarını yönetir.
- **Orta Katman (ArbOS)**: Sıralayıcı paketlerini sıkıştırma, gaz maliyetlerini yönetme ve zincirler arası işlevsellikleri destekleme dahil olmak üzere Katman 2 işlevselliği sağlayan özel yazılım.
- **Üst Katman**: Geth'ten alınmış olup, bağlantıları, gelen RPC isteklerini ve diğer üst düzey düğüm işlevlerini yönetir.

### Zincirler Arası Etkileşim

Arbitrum Nitro, Outbox, Inbox ve Tekrar Denenebilir Biletler gibi mekanizmalar aracılığıyla güvenli zincirler arası etkileşimleri destekler.

- **Outbox**: Katman 2'den Katman 1'e sözleşme çağrılarını etkinleştirir, mesajların güvenli bir şekilde aktarılmasını ve Ethereum üzerinde yürütülmesini sağlar.
- **Inbox**: Ethereum'dan Nitro'ya gönderilen işlemleri yönetir, bunların doğru sırayla dahil edilmesini sağlar.
- **Tekrar Denenebilir Biletler**: Başarısız işlemlerin yeniden gönderilmesine izin verir, güvenilirliği sağlar ve kaybolan işlemler riskini azaltır.

### Gaz ve Ücretler

Nitro, işlem maliyetlerini yönetmek için sofistike bir gaz ölçüm ve fiyatlandırma mekanizması kullanır:

- **L2 Gaz Ölçümü ve Fiyatlandırma**: Gaz kullanımını izler ve talep ile kapasiteyi dengelemek için temel ücreti algoritmik olarak ayarlar.
- **L1 Veri Ölçümü ve Fiyatlandırma**: Katman 1 etkileşimleriyle ilgili maliyetlerin karşılanmasını sağlar, bu maliyetleri işlemler arasında doğru bir şekilde paylaştırmak için uyarlanabilir bir fiyatlandırma algoritması kullanır.

### Sonuç

Cuckoo Network, Arbitrum'un gelişimine yatırım yapmaktan emin. Arbitrum Nitro'nun gelişmiş Katman 2 çözümleri, eşsiz ölçeklenebilirlik, daha hızlı kesinlik ve verimli uyuşmazlık çözümü sunar. Ethereum ile uyumluluğu, merkezi olmayan uygulamalarımız için güvenli, verimli bir ortam sağlar ve yenilik ve performansa olan bağlılığımızla uyumludur.


- kaynak: https://cuckoo.network/blog/2024/06/06/introduction-to-arbitrum-nitro
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
