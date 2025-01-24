---
title: "Ritual: Taruhan $25 Juta untuk Membuat Blockchain Berpikir"
tags: [blockchain, AI, komputasi terdesentralisasi, kontrak pintar]
keywords: [Ritual, AI blockchain, AI terdesentralisasi, kontrak pintar, infrastruktur Web3]
authors: [lark]
description: Ritual, sebuah startup yang didirikan oleh mantan investor Polychain Niraj Pant dan Akilesh Potti, mempelopori integrasi kemampuan AI ke dalam lingkungan blockchain, didukung oleh pendanaan Seri A sebesar $25 juta. Perusahaan ini bertujuan untuk merevolusi kontrak pintar dan aplikasi terdesentralisasi dengan fungsionalitas berbasis AI.
image: https://cuckoo-portal-frontend.onrender.com/api/og?title=Ritual:%20Taruhan%20$25%20Juta%20untuk%20Membuat%20Blockchain%20Berpikir
---

# Ritual: Taruhan $25 Juta untuk Membuat Blockchain Berpikir

Ritual, didirikan pada tahun 2023 oleh mantan investor Polychain Niraj Pant dan Akilesh Potti, adalah proyek ambisius di persimpangan blockchain dan AI. Didukung oleh pendanaan Seri A sebesar $25 juta yang dipimpin oleh Archetype dan investasi strategis dari Polychain Capital, perusahaan ini bertujuan untuk mengatasi kesenjangan infrastruktur kritis dalam memungkinkan interaksi kompleks di dalam dan di luar rantai. Dengan tim yang terdiri dari 30 ahli dari institusi dan perusahaan terkemuka, Ritual sedang membangun protokol yang mengintegrasikan kemampuan AI langsung ke dalam lingkungan blockchain, menargetkan kasus penggunaan seperti kontrak pintar yang dihasilkan dari bahasa alami dan protokol pinjaman dinamis yang digerakkan oleh pasar.

![Ritual: Taruhan $25 Juta untuk Membuat Blockchain Berpikir](https://cuckoo-portal-frontend.onrender.com/api/og?title=Ritual:%20Taruhan%20$25%20Juta%20untuk%20Membuat%20Blockchain%20Berpikir)

## Mengapa Pelanggan Membutuhkan Web3 untuk AI

Integrasi Web3 dan AI dapat mengurangi banyak keterbatasan yang terlihat dalam sistem AI tradisional yang terpusat.

1. **Infrastruktur terdesentralisasi membantu mengurangi risiko manipulasi**: ketika perhitungan AI dan keluaran model dieksekusi oleh banyak node yang dioperasikan secara independen, menjadi jauh lebih sulit bagi satu entitas—baik itu pengembang atau perantara korporat—untuk mengubah hasil. Ini meningkatkan kepercayaan pengguna dan transparansi dalam aplikasi yang digerakkan oleh AI.

2. **AI asli Web3 memperluas cakupan kontrak pintar di dalam rantai melampaui logika keuangan dasar saja**. Dengan AI dalam loop, kontrak dapat merespons data pasar waktu nyata, prompt yang dihasilkan pengguna, dan bahkan tugas inferensi kompleks. Ini memungkinkan kasus penggunaan seperti perdagangan algoritmik, keputusan pinjaman otomatis, dan interaksi dalam obrolan (misalnya, FrenRug) yang tidak mungkin dilakukan di bawah API AI yang ada dan terisolasi. Karena keluaran AI dapat diverifikasi dan terintegrasi dengan aset di dalam rantai, keputusan bernilai tinggi atau berisiko tinggi ini dapat dieksekusi dengan lebih banyak kepercayaan dan lebih sedikit perantara.

3. **Mendistribusikan beban kerja AI di seluruh jaringan dapat berpotensi menurunkan biaya dan meningkatkan skalabilitas**. Meskipun perhitungan AI bisa mahal, lingkungan Web3 yang dirancang dengan baik menarik dari kumpulan sumber daya komputasi global daripada satu penyedia terpusat. Ini membuka harga yang lebih fleksibel, keandalan yang lebih baik, dan kemungkinan untuk alur kerja AI yang berkelanjutan di dalam rantai—semua didukung oleh insentif bersama bagi operator node untuk menawarkan daya komputasi mereka.

## Pendekatan Ritual

Sistem ini memiliki tiga lapisan utama—**Infernet Oracle**, **Ritual Chain** (infrastruktur dan protokol), dan **Aplikasi Asli**—masing-masing dirancang untuk mengatasi tantangan yang berbeda di ruang Web3 x AI.

### 1. **Infernet Oracle**

- **Apa yang Dilakukannya**
  Infernet adalah produk pertama Ritual, bertindak sebagai jembatan antara kontrak pintar di dalam rantai dan komputasi AI di luar rantai. Alih-alih hanya mengambil data eksternal, ia mengoordinasikan tugas inferensi model AI, mengumpulkan hasil, dan mengembalikannya ke dalam rantai dengan cara yang dapat diverifikasi.
- **Komponen Utama**
  - **Containers**: Lingkungan aman untuk menampung beban kerja AI/ML apa pun (misalnya, model ONNX, Torch, Hugging Face, GPT-4).
  - **infernet-ml**: Perpustakaan yang dioptimalkan untuk menerapkan alur kerja AI/ML, menawarkan integrasi siap pakai dengan kerangka model populer.
  - **Infernet SDK**: Menyediakan antarmuka standar sehingga pengembang dapat dengan mudah menulis kontrak pintar yang meminta dan mengonsumsi hasil inferensi AI.
  - **Infernet Nodes**: Diterapkan pada layanan seperti GCP atau AWS, node ini mendengarkan permintaan inferensi di dalam rantai, mengeksekusi tugas dalam container, dan mengirimkan hasil kembali ke dalam rantai.
  - **Pembayaran & Verifikasi**: Mengelola distribusi biaya (antara node komputasi dan verifikasi) dan mendukung berbagai metode verifikasi untuk memastikan tugas dieksekusi dengan jujur.
- **Mengapa Ini Penting**
  Infernet melampaui oracle tradisional dengan memverifikasi perhitungan AI di luar rantai, bukan hanya umpan data. Ini juga mendukung penjadwalan pekerjaan inferensi berulang atau sensitif waktu, mengurangi kompleksitas menghubungkan tugas yang digerakkan oleh AI ke aplikasi di dalam rantai.

### 2. **Ritual Chain**

Ritual Chain mengintegrasikan fitur yang ramah AI di kedua lapisan infrastruktur dan protokol. Ini dirancang untuk menangani interaksi yang sering, otomatis, dan kompleks antara kontrak pintar dan komputasi di luar rantai, melampaui apa yang dapat dikelola oleh L1 tipikal.

#### 2.1 **Lapisan Infrastruktur**

- **Apa yang Dilakukannya**
  Infrastruktur Ritual Chain mendukung alur kerja AI yang lebih kompleks daripada blockchain standar. Melalui modul yang sudah dikompilasi sebelumnya, penjadwal, dan ekstensi EVM yang disebut EVM++, ia bertujuan untuk memfasilitasi tugas AI yang sering atau streaming, abstraksi akun yang kuat, dan interaksi kontrak otomatis.

- **Komponen Utama**

  - Modul yang Sudah Dikompilasi Sebelumnya

    :

    - **Ekstensi EIP (misalnya, EIP-665, EIP-5027)** menghapus batas panjang kode, mengurangi gas untuk tanda tangan, dan memungkinkan kepercayaan antara tugas AI di dalam dan di luar rantai.
    - **Precompiles Komputasi** menstandarkan kerangka kerja untuk inferensi AI, bukti pengetahuan nol, dan penyetelan model dalam kontrak pintar.

  - **Penjadwal**: Menghilangkan ketergantungan pada kontrak "Penjaga" eksternal dengan memungkinkan tugas berjalan pada jadwal tetap (misalnya, setiap 10 menit). Penting untuk aktivitas yang digerakkan oleh AI yang berkelanjutan.

  - **EVM++**: Meningkatkan EVM dengan abstraksi akun asli (EIP-7702), memungkinkan kontrak menyetujui transaksi secara otomatis untuk jangka waktu tertentu. Ini mendukung keputusan yang digerakkan oleh AI secara berkelanjutan (misalnya, perdagangan otomatis) tanpa intervensi manusia.

- **Mengapa Ini Penting**
  Dengan memasukkan fitur yang berfokus pada AI langsung ke dalam infrastrukturnya, Ritual Chain menyederhanakan perhitungan AI yang kompleks, berulang, atau sensitif waktu. Pengembang mendapatkan lingkungan yang lebih kuat dan otomatis untuk membangun dApps yang benar-benar "cerdas".

#### 2.2 **Lapisan Protokol Konsensus**

- **Apa yang Dilakukannya**
  Lapisan protokol Ritual Chain menangani kebutuhan untuk mengelola berbagai tugas AI secara efisien. Pekerjaan inferensi besar dan node komputasi heterogen memerlukan logika pasar biaya khusus dan pendekatan konsensus baru untuk memastikan eksekusi dan verifikasi yang lancar.
- **Komponen Utama**
  - Resonance (Pasar Biaya):
    - Memperkenalkan peran "pelelang" dan "broker" untuk mencocokkan tugas AI dengan kompleksitas yang bervariasi dengan node komputasi yang sesuai.
    - Menggunakan alokasi tugas yang hampir menyeluruh atau "dibundel" untuk memaksimalkan throughput jaringan, memastikan node yang kuat menangani tugas kompleks tanpa terhenti.
  - Symphony (Konsensus):
    - Membagi perhitungan AI menjadi sub-tugas paralel untuk verifikasi. Beberapa node memvalidasi langkah proses dan keluaran secara terpisah.
    - Mencegah tugas AI besar membebani jaringan dengan mendistribusikan beban kerja verifikasi di beberapa node.
  - vTune:
    - Menunjukkan cara memverifikasi penyetelan model yang dilakukan oleh node di dalam rantai dengan menggunakan pemeriksaan data "backdoor".
    - Mengilustrasikan kemampuan Ritual Chain yang lebih luas untuk menangani tugas AI yang lebih panjang dan rumit dengan asumsi kepercayaan minimal.
- **Mengapa Ini Penting**
  Pasar biaya tradisional dan model konsensus kesulitan dengan beban kerja AI yang berat atau beragam. Dengan merancang ulang keduanya, Ritual Chain dapat mengalokasikan tugas secara dinamis dan memverifikasi hasil, memperluas kemungkinan di dalam rantai jauh melampaui logika token atau kontrak dasar.

### 3. **Aplikasi Asli**

- **Apa yang Mereka Lakukan**
  Berdasarkan Infernet dan Ritual Chain, aplikasi asli mencakup pasar model dan jaringan validasi, menunjukkan bagaimana fungsionalitas yang digerakkan oleh AI dapat diintegrasikan dan dimonetisasi secara asli di dalam rantai.
- **Komponen Utama**
  - Pasar Model:
    - Mewakili model AI (dan mungkin varian yang disetel) sebagai aset di dalam rantai.
    - Memungkinkan pengembang untuk membeli, menjual, atau melisensikan model AI, dengan hasil yang diberikan kepada pencipta model dan penyedia komputasi/data.
  - Jaringan Validasi & "Rollup-as-a-Service":
    - Menawarkan protokol eksternal (misalnya, L2s) lingkungan yang andal untuk menghitung dan memverifikasi tugas kompleks seperti bukti pengetahuan nol atau kueri yang digerakkan oleh AI.
    - Menyediakan solusi rollup yang disesuaikan dengan memanfaatkan EVM++, fitur penjadwalan, dan desain pasar biaya Ritual.
- **Mengapa Ini Penting**
  Dengan membuat model AI dapat diperdagangkan dan diverifikasi langsung di dalam rantai, Ritual memperluas fungsionalitas blockchain ke dalam pasar untuk layanan AI dan dataset. Jaringan yang lebih luas juga dapat memanfaatkan infrastruktur Ritual untuk komputasi khusus, membentuk ekosistem terpadu di mana tugas dan bukti AI lebih murah dan lebih transparan.

### Pengembangan Ekosistem Ritual

Visi Ritual tentang "jaringan infrastruktur AI terbuka" berjalan seiring dengan membangun ekosistem yang kuat. Di luar desain produk inti, tim telah membangun kemitraan di seluruh penyimpanan model, komputasi, sistem bukti, dan aplikasi AI untuk memastikan setiap lapisan jaringan menerima dukungan ahli. Pada saat yang sama, Ritual berinvestasi besar-besaran dalam sumber daya pengembang dan pertumbuhan komunitas untuk mendorong kasus penggunaan dunia nyata di rantainya.

1. **Kolaborasi Ekosistem**
  - **Penyimpanan Model & Integritas**: Menyimpan model AI dengan Arweave memastikan mereka tetap tahan terhadap perubahan.
  - **Kemitraan Komputasi**: IO.net menyediakan komputasi terdesentralisasi yang sesuai dengan kebutuhan skala Ritual.
  - **Sistem Bukti & Lapisan-2**: Kolaborasi dengan Starkware dan Arbitrum memperluas kemampuan pembuatan bukti untuk tugas berbasis EVM.
  - **Aplikasi Konsumen AI**: Kemitraan dengan Myshell dan Story Protocol membawa lebih banyak layanan bertenaga AI ke dalam rantai.
  - **Lapisan Aset Model**: Pond, Allora, dan 0xScope menyediakan sumber daya AI tambahan dan mendorong batas AI di dalam rantai.
  - **Peningkatan Privasi**: Nillion memperkuat lapisan privasi Ritual Chain.
  - **Keamanan & Staking**: EigenLayer membantu mengamankan dan mempertaruhkan di jaringan.
  - **Ketersediaan Data**: Modul EigenLayer dan Celestia meningkatkan ketersediaan data, penting untuk beban kerja AI.
2. **Ekspansi Aplikasi**
  - **Sumber Daya Pengembang**: Panduan komprehensif merinci cara memulai container AI, menjalankan PyTorch, dan mengintegrasikan GPT-4 atau Mistral-7B ke dalam tugas di dalam rantai. Contoh langsung—seperti menghasilkan NFT melalui Infernet—menurunkan hambatan bagi pendatang baru.
  - **Pendanaan & Akselerasi**: Akselerator Ritual Altar dan proyek Ritual Realm menyediakan modal dan bimbingan kepada tim yang membangun dApps di Ritual Chain.
  - Proyek Terkemuka:
    - **Anima**: Asisten DeFi multi-agen yang memproses permintaan bahasa alami di seluruh pinjaman, swap, dan strategi hasil.
    - **Opus**: Token meme yang dihasilkan AI dengan aliran perdagangan terjadwal.
    - **Relic**: Menggabungkan model prediktif yang digerakkan oleh AI ke dalam AMM, bertujuan untuk perdagangan di dalam rantai yang lebih fleksibel dan efisien.
    - **Tithe**: Memanfaatkan ML untuk menyesuaikan protokol pinjaman secara dinamis, meningkatkan hasil sambil mengurangi risiko.

Dengan menyelaraskan desain produk, kemitraan, dan berbagai set dApps yang digerakkan oleh AI, Ritual memposisikan dirinya sebagai pusat multifaset untuk Web3 x AI. Pendekatan ekosistem-pertama—dilengkapi dengan dukungan pengembang yang memadai dan peluang pendanaan nyata—meletakkan dasar untuk adopsi AI yang lebih luas di dalam rantai.

## Pandangan Ritual

Rencana produk dan ekosistem Ritual terlihat menjanjikan, tetapi banyak kesenjangan teknis yang masih ada. Pengembang masih perlu menyelesaikan masalah mendasar seperti menyiapkan endpoint inferensi model, mempercepat tugas AI, dan mengoordinasikan beberapa node untuk perhitungan skala besar. Untuk saat ini, arsitektur inti dapat menangani kasus penggunaan yang lebih sederhana; tantangan sebenarnya adalah menginspirasi pengembang untuk membangun aplikasi yang digerakkan oleh AI yang lebih imajinatif di dalam rantai.

Ke depan, Ritual mungkin akan lebih fokus pada pembuatan aset komputasi atau model yang dapat diperdagangkan daripada keuangan. Ini akan menarik peserta dan memperkuat keamanan jaringan dengan mengikat token rantai ke beban kerja AI yang praktis. Meskipun detail tentang desain token masih belum jelas, jelas bahwa visi Ritual adalah untuk memicu generasi baru aplikasi yang kompleks, terdesentralisasi, dan digerakkan oleh AI—mendorong Web3 ke wilayah yang lebih dalam dan lebih kreatif.
