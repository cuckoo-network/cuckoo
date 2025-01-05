---
title: "Örnekleme Kanıtı Protokolü: Merkeziyetsiz AI Çıkarımında Dürüstlüğü Teşvik Etme ve Dürüst Olmayanları Cezalandırma"
authors: [lark]
tags: [araştırma]
image: "https://web-dash-v2.onrender.com/api/og-cuckoo-network?title=Örnekleme Kanıtı Protokolü: Merkeziyetsiz AI Çıkarımında Dürüstlüğü Teşvik Etme ve Dürüst Olmayanları Cezalandırma"
description: Örnekleme Kanıtı (PoSP) protokolünün GPU sağlayıcıları arasında dürüst davranışı teşvik etme ve dürüst olmayanları cezalandırma konusundaki benzersiz yaklaşımını öğrenin, merkeziyetsiz AI çıkarım sistemlerinin güvenliğini ve güvenilirliğini sağlama.
---

Merkeziyetsiz AI'da, GPU sağlayıcılarının bütünlüğünü ve güvenilirliğini sağlamak çok önemlidir. Holistic AI'nin son araştırmalarında özetlenen Örnekleme Kanıtı (PoSP) protokolü, iyi aktörleri teşvik ederken kötü olanları kesen sofistike bir mekanizma sunar. Bu protokolün nasıl çalıştığını, ekonomik teşviklerini, cezalarını ve merkeziyetsiz AI çıkarımına uygulanmasını görelim.

## Dürüst Davranış İçin Teşvikler

### Ekonomik Ödüller

PoSP protokolünün merkezinde, dürüst katılımı teşvik etmek için tasarlanmış ekonomik teşvikler bulunmaktadır. Asserter ve doğrulayıcı olarak hareket eden düğümler, katkılarına göre ödüllendirilir:

- **Asserterler:** Hesapladıkları çıktı doğru ve itiraz edilmezse bir ödül (RA) alırlar.
- **Doğrulayıcılar:** Sonuçları asserter'inkiyle uyumlu ve doğru olarak doğrulanmışsa ödülü (RV/n) paylaşırlar.

### Benzersiz Nash Dengesi

PoSP protokolü, tüm düğümlerin dürüst davranmaya motive olduğu saf stratejilerde benzersiz bir Nash Dengesi'ne ulaşacak şekilde tasarlanmıştır. Bireysel karı sistem güvenliği ile hizalayarak, protokol dürüstlüğün katılımcılar için en karlı strateji olmasını sağlar.

## Dürüst Olmayan Davranış İçin Cezalar

### Kesme Mekanizması

Dürüst olmayan davranışı caydırmak için PoSP protokolü bir kesme mekanizması kullanır. Bir asserter veya doğrulayıcı dürüst olmadığı tespit edilirse, önemli ekonomik cezalarla (S) karşı karşıya kalır. Bu, dürüst olmamanın maliyetinin herhangi bir potansiyel kısa vadeli kazançtan çok daha ağır basmasını sağlar.

### İtiraz Mekanizması

Rastgele itirazlar sistemi daha da güvence altına alır. Belirlenmiş bir olasılıkla (p), protokol birden fazla doğrulayıcının asserter'in çıktısını yeniden hesapladığı bir itiraz başlatır. Tutarsızlıklar bulunursa, dürüst olmayan aktörler cezalandırılır. Bu rastgele seçim süreci, kötü aktörlerin iş birliği yapıp tespit edilmeden hile yapmasını zorlaştırır.

## PoSP Protokolünün Adımları

1. **Asserter Seçimi:** Bir düğüm rastgele seçilerek bir asserter olarak atanır, bir değer hesaplar ve çıktısını verir.

2. İtiraz Olasılığı:

    Sistem, belirlenmiş bir olasılığa göre bir itiraz başlatabilir.

   - **İtiraz Yok:** İtiraz başlatılmazsa asserter ödüllendirilir.
   - **İtiraz Başlatıldı:** Asserter'in çıktısını doğrulamak için rastgele seçilen belirli sayıda (n) doğrulayıcı seçilir.

3. Doğrulama:

    Her doğrulayıcı bağımsız olarak sonucu hesaplar ve asserter'in çıktısıyla karşılaştırır.

   - **Eşleşme:** Tüm sonuçlar eşleşirse, hem asserter hem de doğrulayıcılar ödüllendirilir.
   - **Uyumsuzluk:** Bir tahkim süreci, asserter ve doğrulayıcıların dürüstlüğünü belirler.

4. **Cezalar:** Dürüst olmayan düğümler cezalandırılırken, dürüst doğrulayıcılar ödül paylarını alır.

## SpML

spML (örnekleme tabanlı Makine Öğrenimi) protokolü, merkeziyetsiz bir AI çıkarım ağı içinde Örnekleme Kanıtı (PoSP) protokolünün bir uygulamasıdır.

### Ana Adımlar

1. **Kullanıcı Girdisi**: Kullanıcı, dijital imzasıyla birlikte rastgele seçilen bir sunucuya (asserter) girdisini gönderir.
2. **Sunucu Çıktısı**: Sunucu, çıktıyı hesaplar ve sonucu içeren bir hash ile birlikte kullanıcıya geri gönderir.
3. **İtiraz Mekanizması**:
   - Belirlenmiş bir olasılıkla (p), sistem başka bir sunucunun (doğrulayıcı) sonucu doğrulamak için rastgele seçildiği bir itiraz başlatır.
   - İtiraz başlatılmazsa, asserter bir ödül (R) alır ve süreç sona erer.
4. **Doğrulama**:
   - Bir itiraz başlatılırsa, kullanıcı aynı girdiyi doğrulayıcıya gönderir.
   - Doğrulayıcı sonucu hesaplar ve kullanıcıya bir hash ile birlikte geri gönderir.
5. **Karşılaştırma**:
   - Kullanıcı, asserter ve doğrulayıcının çıktılarının hash'lerini karşılaştırır.
   - Hash'ler eşleşirse, hem asserter hem de doğrulayıcı ödüllendirilir ve kullanıcı temel ücret üzerinden indirim alır.
   - Hash'ler eşleşmezse, kullanıcı her iki hash'i de ağa yayınlar.
6. **Tahkim**:
   - Ağ, tutarsızlıklara dayanarak asserter ve doğrulayıcının dürüstlüğünü belirlemek için oy kullanır.
   - Dürüst düğümler ödüllendirilir, dürüst olmayanlar ise cezalandırılır (kesilir).

### Ana Bileşenler ve Mekanizmalar
- **Deterministik ML Yürütme**: Tutarlı, tekrarlanabilir sonuçlar sağlamak için sabit nokta aritmetiği ve yazılım tabanlı kayan nokta kütüphaneleri kullanır.
- **Durumsuz Tasarım**: Her sorguyu bağımsız olarak ele alır, ML süreci boyunca durumsuzluğu korur.
- **İzinsiz Katılım**: Herkesin ağa katılmasına ve bir AI sunucusu çalıştırarak katkıda bulunmasına izin verir.
- **Zincir Dışı İşlemler**: AI çıkarımları, blok zincirindeki yükü azaltmak için zincir dışında hesaplanır, sonuçlar ve dijital imzalar doğrudan kullanıcılara iletilir.
- **Zincir Üzeri İşlemler**: Bakiye hesaplamaları ve itiraz mekanizmaları gibi kritik işlevler, şeffaflık ve güvenlik sağlamak için zincir üzerinde gerçekleştirilir.

### spML'nin Avantajları
- **Yüksek Güvenlik**: Dürüst olmayanlar için potansiyel cezalar nedeniyle düğümlerin dürüst davranmasını sağlayan ekonomik teşvikler yoluyla güvenlik sağlar.
- **Düşük Hesaplama Yükü**: Doğrulayıcılar çoğu durumda yalnızca hash'leri karşılaştırmak zorundadır, doğrulama sırasında hesaplama yükünü azaltır.
- **Ölçeklenebilirlik**: Ağ etkinliğini önemli bir performans düşüşü olmadan yönetebilir.
- **Basitlik**: Uygulamada basitliği korur, entegrasyon ve bakım kolaylığını artırır.

### Diğer Protokollerle Karşılaştırma
- **Optimizasyonlu Sahtekarlık Kanıtı (opML)**:
  - Sahte davranış için ekonomik caydırıcılar ve bir uyuşmazlık çözüm mekanizmasına dayanır.
  - Yeterince doğrulayıcı dürüst değilse sahte faaliyetlere karşı savunmasızdır.
- **Sıfır Bilgi Kanıtı (zkML)**:
  - Kriptografik kanıtlar yoluyla yüksek güvenlik sağlar.
  - Yüksek hesaplama yükü nedeniyle ölçeklenebilirlik ve verimlilikte zorluklarla karşılaşır.
- **spML**:
  - Ekonomik teşvikler yoluyla yüksek güvenlik, düşük hesaplama yükü ve yüksek ölçeklenebilirliği birleştirir.
  - Doğrulama sürecini hash karşılaştırmalarına odaklanarak basitleştirir, itirazlar sırasında karmaşık hesaplamalara olan ihtiyacı azaltır.

## Özet

Örnekleme Kanıtı (PoSP) protokolü, iyi aktörleri teşvik etme ve kötü olanları caydırma ihtiyacını etkili bir şekilde dengeler, merkeziyetsiz sistemlerin genel güvenliğini ve güvenilirliğini sağlar. Ekonomik ödülleri sıkı cezalarla birleştirerek, PoSP dürüst davranışın teşvik edilmekle kalmayıp, başarı için gerekli olduğu bir ortam yaratır. Merkeziyetsiz AI büyümeye devam ettikçe, PoSP gibi protokoller bu gelişmiş sistemlerin bütünlüğünü ve güvenilirliğini korumada önemli olacaktır.

- kaynak: https://cuckoo.network/blog/2024/06/17/proof-of-sampling-posp-protocol-decentralized-ai
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
