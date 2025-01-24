---
title: GPU ile Token Stake Etme ve Madencilik
authors: [lark]
tags: [şirket, yol haritası]
image: https://cuckoo-portal-frontend.onrender.com/api/og?title=GPU%20ile%20Token%20Stake%20Etme%20ve%20Madencilik
---

Cuckoo Network, AI meraklılarını, geliştiricileri ve GPU madencilerini kripto tokenlerle ödüllendiren ilk Merkeziyetsiz AI Model Sunum Pazarıdır. Platformumuzda, madenciler GPU'larını jeneratif AI uygulama geliştiricileri, yani koordinatörlerle paylaşarak son müşteriler için çıkarım çalıştırır, böylece tüm katkıda bulunanlar kripto token kazanabilir.

![GPU ile Token Stake Etme ve Madencilik](https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp "GPU ile Token Stake Etme ve Madencilik")

> 2024-07-09 güncellemesi: Bu gönderi testnet içindir. Mainnet için [bu gönderiyi](/blog/2024/07/15/cuckoo-network-mining-gpu-july-2024) kontrol edin.

Madenciler GPU'larını paylaştığında, sonuçları sahte olmadıklarından nasıl emin olunur? Cuckoo Network, staking, ödüller ve kesintiler yoluyla güven ve bütünlük sağlar. Bugün, stakerların testnetimize katılabileceğini ve bu merkeziyetsiz AI ağı için güveni sağlayabileceğini duyurmaktan mutluluk duyuyoruz.

## **Bugün testnete katılın**

Stakerlar için

1. [Testnet musluğundan](https://cuckoo.network/portal/faucet) CAI token alın
2. [Stake portalı / testnet staking](https://cuckoo.network/portal/staking/testnet) üzerinden token stake edin
3. Koordinatörler veya madenciler için oy verin

![Cuckoo Portal - Staking](https://cuckoo-network.b-cdn.net/staking-portal-screenshot.webp "Cuckoo Portal - Staking")

GPU madencileri için

1. https://cuckoo.network/tg veya https://cuckoo.network/dc adreslerinden adminlerle iletişime geçerek CAI token alın
2. Stake portalında > 20K token stake edin
3. MinerAddress ve tanıtım bilgilerini kaydedin. MinerAddress'inizin staker adresinizden farklı olması önerilir.
4. MinerAddress’in özel anahtarı ile madenci düğümünü çalıştırın

Koordinatörler için

1. https://cuckoo.network/tg veya https://cuckoo.network/dc adreslerinden adminlerle iletişime geçerek CAI token alın
2. Stake portalında > 2M token stake edin
3. CoordinatorAddress ve tanıtım bilgilerini kaydedin. CoordinatorAddress'inizin staker adresinizden farklı olması önerilir.
4. MinerAddress’in özel anahtarı ile koordinatör düğümünü çalıştırın

## **Nasıl çalışır?**

Tüm sistemin birlikte çalışabilmesi için birkaç rol gereklidir:

- **GPU Madenci Staker:** AI görevlerini yürütmek için hesaplama kaynaklarını çalıştıran bireyler veya kuruluşlar. Ağda stake etmek için cüzdanlarında CAI token bulundururlar. Ne kadar çok stake ederlerse, GPU görevlerine atanma şansları o kadar yüksek olur.
- **Uygulama Geliştiriciler (Koordinatör Staker):** Cuckoo Network üzerinde AI uygulamaları oluşturan, görev dağıtımını ve kalite kontrolünü denetleyen geliştiriciler. Ağda stake etmek için cüzdanlarında CAI token bulundururlar. Ne kadar çok stake ederlerse, onlarla çalışmak isteyen GPU madencilerini alma şansları o kadar yüksek olur.
- **Stakerlar:** Güvenilir Madenciler ve koordinatörler için oy kullanmak üzere token stake eden katılımcılar. Stake'leri için ödüllendirileceklerdir.
- **Staking Sözleşmesi:** Madencilerin ve koordinatörlerin kayıt olduğu ve stakerların onlar için oy kullandığı bir akıllı sözleşme.
- **Koordinatör Düğümü:** Jeneratif AI uygulamaları, ağda görüntü oluşturmak gibi GPU görevleri sunmak için bu düğümün API'lerini çağırır.
- **Madenci Düğümü:** GPU sağlayıcıları, GPU'larla görev yürütmek için madenci düğümünü çalıştırır.

![img](https://cuckoo-network.b-cdn.net/cuckoo-staking@2x.webp)

Görev atama ve zamanlayıcı, Cuckoo AI ekosisteminde kritik bir işlev olup, koordinatörlerden Madencilere görevlerin verimli ve adil bir şekilde dağıtılmasını sağlar.

Ancak, düğümler sisteme girmeden önce güven oluşturmalıdır. Bu nedenle, tüm katılımcılar herhangi bir rol üstlenmeden önce token stake etmelidir.

Daha sonra, jeneratif AI uygulama geliştiricileri, yani koordinatörler, adresi staking sözleşmeleri ile kaydedilmiş özel bir anahtar ile koordinatör düğümünü çalıştırır. Bu düğüm, staking sözleşmelerinden madenci kaydını okur ve ardından madenci düğümlerinden gelen talepleri dinler.

GPU sağlayıcıları, staking sözleşmelerinden bilgi alacak ve bekleyen görevler için koordinatörlere anket yapacak madenci düğümünü çalıştırır.

Jeneratif AI uygulaması koordinatöre bir görev sunduğunda, koordinatör görevi aktif madenci adreslerine stake'lerine göre ağırlık olarak atar. Ardından, ilgili madenciler görevi üzerinde çalışır ve sonuçları koordinatöre sunar.

## **Özet**

Cuckoo Network, işbirliği ve güveni vurgulayan benzersiz bir merkeziyetsiz AI-to-Earn platformu sunar. Staking mekanizmaları ve teşvikler kullanarak, geliştiriciler, GPU madencileri ve stakerlar dahil tüm katılımcıların özgünlüğünü ve katılımını sağlar. Bu yaklaşım, güvenilir görev dağıtımını garanti eder ve merkeziyetsiz AI teknolojilerinin ilerlemesi için sürdürülebilir bir ortam oluşturur. Cuckoo, daha fazla kullanıcıyı ağını keşfetmeye davet eder, onlara AI geliştirmeye katkıda bulunma ve kripto para kazanma fırsatı sunar.

- kaynak: https://cuckoo.network/blog/2024/04/20/staking-and-mining-tokens-with-gpu
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
