---
title: Staking dan menambang token dengan GPU
authors: [lark]
tags: [perusahaan, roadmap]
image: https://opengraph-image.blockeden.xyz/api/og-cuckoo-network?title=Staking%20dan%20menambang%20token%20dengan%20GPU
---

Cuckoo Network adalah Marketplace Pelayanan Model AI Terdesentralisasi pertama yang memberi penghargaan kepada penggemar AI, pengembang, dan penambang GPU dengan token kripto. Di platform kami, penambang berbagi GPU mereka dengan pembangun aplikasi AI generatif, alias koordinator, untuk menjalankan inferensi bagi pelanggan akhir, sehingga semua kontributor dapat memperoleh token kripto.

![Staking dan menambang token dengan GPU](https://cuckoo-network.b-cdn.net/staking-and-mining-tokens.webp "Staking dan menambang token dengan GPU")

> Pembaruan 2024-07-09: Postingan ini untuk testnet. Periksa [posting ini](/blog/2024/07/15/cuckoo-network-mining-gpu-july-2024) untuk mainnet.

Ketika penambang berbagi GPU mereka, bagaimana memastikan mereka tidak memalsukan hasil? Cuckoo Network membangun kepercayaan dan integritas melalui staking, hadiah, dan pemotongan. Hari ini kami dengan senang hati mengumumkan bahwa staker dapat bergabung dengan testnet kami dan mengamankan kepercayaan untuk jaringan AI terdesentralisasi ini.

## **Bergabunglah dengan testnet hari ini**

Untuk staker

1. Dapatkan token CAI dari [faucet testnet](https://cuckoo.network/portal/faucet)
2. Stake token di [portal staking / staking testnet](https://cuckoo.network/portal/staking/testnet)
3. Pilih koordinator atau penambang

![Portal Cuckoo - Staking](https://cuckoo-network.b-cdn.net/staking-portal-screenshot.webp "Portal Cuckoo - Staking")

Untuk penambang GPU

1. Dapatkan token CAI dengan menghubungi admin dari https://cuckoo.network/tg atau https://cuckoo.network/dc
2. Stake > 20K token di portal staking
3. Daftarkan minerAddress dan informasi pengantar. minerAddress disarankan berbeda dari alamat staker Anda.
4. Jalankan node penambang dengan kunci pribadi minerAddress

Untuk Koordinator

1. Dapatkan token CAI dengan menghubungi admin dari https://cuckoo.network/tg atau https://cuckoo.network/dc
2. Stake > 2M token di portal staking
3. Daftarkan coordinatorAddress dan informasi pengantar. coordinatorAddress disarankan berbeda dari alamat staker Anda.
4. Jalankan node koordinator dengan kunci pribadi minerAddress

## **Bagaimana cara kerjanya?**

Seluruh sistem membutuhkan beberapa peran untuk bekerja bersama:

- **GPU Miner Staker:** Individu atau entitas yang menjalankan sumber daya komputasi untuk melaksanakan tugas AI. Mereka memegang token CAI dengan dompet untuk di-stake di jaringan. Semakin banyak mereka stake, semakin tinggi peluang mereka untuk mendapatkan tugas GPU.
- **Pembangun Aplikasi (Coordinator Staker):** Pengembang yang membuat aplikasi AI di atas Cuckoo Network, mengawasi distribusi tugas dan kontrol kualitas. Mereka membawa token CAI dengan dompet untuk di-stake di jaringan. Semakin banyak mereka stake, semakin tinggi peluang mereka untuk mendapatkan penambang GPU yang bersedia bekerja dengan mereka.
- **Staker:** Peserta yang melakukan staking token untuk memilih Penambang dan koordinator yang dapat dipercaya. Mereka akan diberi hadiah untuk staking mereka.
- **Kontrak Staking:** Sebuah kontrak pintar di mana Penambang dan koordinator mendaftar dan staker memilih mereka.
- **Node Koordinator:** Aplikasi AI generatif memanggil API dari node ini untuk menawarkan tugas GPU seperti prompt untuk menghasilkan gambar di jaringan.
- **Node Penambang:** Penyedia GPU menjalankan node penambang untuk melaksanakan tugas dengan GPU.

![img](https://cuckoo-network.b-cdn.net/cuckoo-staking@2x.webp)

Penugasan tugas dan penjadwal adalah fungsi penting dalam ekosistem Cuckoo AI, memastikan distribusi tugas yang efisien dan adil dari koordinator ke Penambang.

Namun, node harus membangun kepercayaan sebelum masuk ke sistem. Oleh karena itu, semua peserta harus melakukan staking token sebelum mereka mengambil peran apa pun.

Kemudian, pembangun aplikasi AI generatif, alias koordinator, menjalankan node koordinator dengan kunci pribadi yang alamatnya telah terdaftar dengan kontrak staking. Node ini membaca pendaftaran penambang dari kontrak staking dan kemudian mendengarkan permintaan yang datang dari node penambang.

Penyedia GPU menjalankan node penambang yang juga akan mengambil info dari kontrak staking dan memanggil koordinator untuk tugas yang tertunda.

Ketika aplikasi AI generatif menawarkan tugas kepada koordinator, koordinator akan menetapkan tugas kepada alamat penambang aktif sesuai dengan staking mereka sebagai bobot. Kemudian penambang yang bersangkutan mengerjakan tugas tersebut dan akhirnya mengirimkan hasilnya kepada koordinator.

## **Ringkasan**

Cuckoo Network memperkenalkan platform AI-to-Earn terdesentralisasi yang unik, menekankan kolaborasi dan kepercayaan. Dengan menggunakan mekanisme staking dan insentif, ini memastikan keaslian dan keterlibatan semua peserta, termasuk pengembang, penambang GPU, dan staker. Pendekatan ini menjamin distribusi tugas yang andal dan mendorong lingkungan yang berkelanjutan untuk memajukan teknologi AI terdesentralisasi. Cuckoo mengundang lebih banyak pengguna untuk menjelajahi jaringannya, menawarkan mereka kesempatan untuk berkontribusi pada pengembangan AI sambil mendapatkan cryptocurrency.

- sumber: https://cuckoo.network/blog/2024/04/20/staking-and-mining-tokens-with-gpu
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
