---
title: "Pengantar Arsitektur Arbitrum Nitro"
authors: [lark]
tags: [engineering, research]
image: https://web-dash-v2.onrender.com/api/og-cuckoo-network?title=Pengantar%20Arsitektur%20Arbitrum%20Nitro
---

Arbitrum Nitro, dikembangkan oleh Offchain Labs, adalah protokol blockchain Layer 2 generasi kedua yang dirancang untuk meningkatkan throughput, finalitas, dan resolusi sengketa. Ini dibangun di atas protokol Arbitrum asli, membawa peningkatan signifikan yang memenuhi kebutuhan blockchain modern.

![](https://cuckoo-network.b-cdn.net/introduction-to-arbitrum-nitro.webp)

### Properti Utama Arbitrum Nitro

Arbitrum Nitro beroperasi sebagai solusi Layer 2 di atas Ethereum, mendukung eksekusi kontrak pintar menggunakan kode Ethereum Virtual Machine (EVM). Ini memastikan kompatibilitas dengan aplikasi dan alat Ethereum yang ada. Protokol ini menjamin keamanan dan kemajuan, dengan asumsi rantai Ethereum yang mendasarinya tetap aman dan aktif, dan setidaknya satu peserta dalam protokol Nitro bertindak jujur.

### Pendekatan Desain

Arsitektur Nitro dibangun di atas empat prinsip inti:

- **Pengurutan Diikuti oleh Eksekusi Deterministik:** Transaksi pertama-tama diurutkan, kemudian diproses secara deterministik. Pendekatan dua fase ini memastikan lingkungan eksekusi yang konsisten dan dapat diandalkan.
- **Geth di Inti:** Nitro menggunakan paket go-ethereum (geth) untuk eksekusi inti dan pemeliharaan status, memastikan kompatibilitas tinggi dengan Ethereum.
- **Pisahkan Eksekusi dari Pembuktian:** Fungsi transisi status dikompilasi untuk eksekusi asli dan web assembly (wasm) untuk memfasilitasi eksekusi yang efisien dan pembuktian yang terstruktur dan independen dari mesin.
- **Optimistic Rollup dengan Bukti Kecurangan Interaktif:** Berdasarkan desain asli Arbitrum, Nitro menggunakan protokol optimistic rollup yang ditingkatkan dengan mekanisme bukti kecurangan yang canggih.

### Pengurutan dan Eksekusi

Pemrosesan transaksi dalam Nitro melibatkan dua komponen utama: Sequencer dan Fungsi Transisi Status (STF).

![Arsitektur Arbitrum Nitro](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro.webp "Arsitektur Arbitrum Nitro")

- **Sequencer**: Mengurutkan transaksi yang masuk dan berkomitmen pada urutan ini. Ini memastikan bahwa urutan transaksi diketahui dan dapat diandalkan, mempostingnya baik sebagai umpan waktu nyata dan sebagai batch data terkompresi pada rantai Ethereum Layer 1. Pendekatan ganda ini meningkatkan keandalan dan mencegah sensor.
- **Eksekusi Deterministik**: STF memproses transaksi yang diurutkan, memperbarui status rantai dan menghasilkan blok baru. Proses ini deterministik, artinya hasilnya hanya bergantung pada data transaksi dan status sebelumnya, memastikan konsistensi di seluruh jaringan.

### Arsitektur Perangkat Lunak: Geth di Inti

![Arsitektur Arbitrum Nitro, Berlapis](https://tp-misc.b-cdn.net/blockeden/arbitrum-nitro-architecture-layered.webp "Arsitektur Arbitrum Nitro, Berlapis")

Arsitektur perangkat lunak Nitro disusun dalam tiga lapisan:

- **Lapisan Dasar (Geth Core)**: Lapisan ini menangani eksekusi kontrak EVM dan memelihara struktur data status Ethereum.
- **Lapisan Tengah (ArbOS)**: Perangkat lunak khusus yang menyediakan fungsionalitas Layer 2, termasuk dekompresi batch sequencer, pengelolaan biaya gas, dan mendukung fungsionalitas lintas rantai.
- **Lapisan Atas**: Diambil dari geth, lapisan ini menangani koneksi, permintaan RPC yang masuk, dan fungsi node tingkat atas lainnya.

### Interaksi Lintas Rantai

Arbitrum Nitro mendukung interaksi lintas rantai yang aman melalui mekanisme seperti Outbox, Inbox, dan Tiket Dapat Dicoba Ulang.

- **Outbox**: Memungkinkan panggilan kontrak dari Layer 2 ke Layer 1, memastikan pesan ditransfer dan dieksekusi dengan aman di Ethereum.
- **Inbox**: Mengelola transaksi yang dikirim ke Nitro dari Ethereum, memastikan mereka dimasukkan dalam urutan yang benar.
- **Tiket Dapat Dicoba Ulang**: Memungkinkan pengiriman ulang transaksi yang gagal, memastikan keandalan dan mengurangi risiko kehilangan transaksi.

### Gas dan Biaya

Nitro menggunakan mekanisme pengukuran dan penetapan harga gas yang canggih untuk mengelola biaya transaksi:

- **Pengukuran dan Penetapan Harga Gas L2**: Melacak penggunaan gas dan menyesuaikan biaya dasar secara algoritmik untuk menyeimbangkan permintaan dan kapasitas.
- **Pengukuran dan Penetapan Harga Data L1**: Memastikan biaya yang terkait dengan interaksi Layer 1 tercakup, menggunakan algoritma penetapan harga adaptif untuk membagi biaya ini secara akurat di antara transaksi.

### Kesimpulan

Cuckoo Network yakin dalam berinvestasi pada pengembangan Arbitrum. Solusi Layer 2 canggih Arbitrum Nitro menawarkan skalabilitas yang tak tertandingi, finalitas yang lebih cepat, dan resolusi sengketa yang efisien. Kompatibilitasnya dengan Ethereum memastikan lingkungan yang aman dan efisien untuk aplikasi terdesentralisasi kami, sejalan dengan komitmen kami terhadap inovasi dan kinerja.


- source: https://cuckoo.network/blog/2024/06/06/introduction-to-arbitrum-nitro
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc