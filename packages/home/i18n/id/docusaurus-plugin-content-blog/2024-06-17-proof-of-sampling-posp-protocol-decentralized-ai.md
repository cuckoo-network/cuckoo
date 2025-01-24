---
title: "Protokol Proof of Sampling: Memberikan Insentif untuk Kejujuran dan Menghukum Ketidakjujuran dalam Inferensi AI Terdesentralisasi"
authors: [lark]
tags: [penelitian]
image: https://cuckoo-portal-frontend.onrender.com/api/og?title=Protokol%20Proof%20of%20Sampling%3A%20Memberikan%20Insentif%20untuk%20Kejujuran%20dan%20Menghukum%20Ketidakjujuran%20dalam%20Inferensi%20AI%20Terdesentralisasi
description: Pelajari pendekatan unik dari protokol Proof of Sampling (PoSP) dalam memberikan insentif untuk perilaku jujur dan menghukum ketidakjujuran di antara penyedia GPU, memastikan keamanan dan keandalan sistem inferensi AI terdesentralisasi.
---

Dalam AI terdesentralisasi, memastikan integritas dan keandalan penyedia GPU sangat penting. Protokol Proof of Sampling (PoSP), seperti yang dijelaskan dalam penelitian terbaru dari Holistic AI, menyediakan mekanisme canggih untuk memberikan insentif kepada pelaku baik sambil menghukum pelaku buruk. Mari kita lihat bagaimana protokol ini bekerja, insentif ekonominya, hukuman, dan penerapannya pada inferensi AI terdesentralisasi.

## Insentif untuk Perilaku Jujur

### Imbalan Ekonomi

Di inti protokol PoSP terdapat insentif ekonomi yang dirancang untuk mendorong partisipasi jujur. Node, yang bertindak sebagai asserter dan validator, diberi imbalan berdasarkan kontribusi mereka:

- **Asserter:** Menerima imbalan (RA) jika output yang dihitung benar dan tidak ditantang.
- **Validator:** Berbagi imbalan (RV/n) jika hasil mereka sesuai dengan asserter dan diverifikasi sebagai benar.

### Keseimbangan Nash Unik

Protokol PoSP dirancang untuk mencapai Keseimbangan Nash unik dalam strategi murni, di mana semua node termotivasi untuk bertindak jujur. Dengan menyelaraskan keuntungan individu dengan keamanan sistem, protokol ini memastikan bahwa kejujuran adalah strategi paling menguntungkan bagi peserta.

## Hukuman untuk Perilaku Tidak Jujur

### Mekanisme Slashing

Untuk mencegah perilaku tidak jujur, protokol PoSP menggunakan mekanisme slashing. Jika seorang asserter atau validator tertangkap tidak jujur, mereka menghadapi hukuman ekonomi yang signifikan (S). Ini memastikan bahwa biaya ketidakjujuran jauh melebihi potensi keuntungan jangka pendek.

### Mekanisme Tantangan

Tantangan acak lebih lanjut mengamankan sistem. Dengan probabilitas yang telah ditentukan (p), protokol memicu tantangan di mana beberapa validator menghitung ulang output asserter. Jika ditemukan ketidaksesuaian, pelaku tidak jujur dihukum. Proses pemilihan acak ini membuat sulit bagi pelaku buruk untuk berkolusi dan menipu tanpa terdeteksi.

## Langkah-langkah Protokol PoSP

1. **Pemilihan Asserter:** Sebuah node dipilih secara acak untuk bertindak sebagai asserter, menghitung dan mengeluarkan nilai.

2. Probabilitas Tantangan:

    Sistem dapat memicu tantangan berdasarkan probabilitas yang telah ditentukan.

   - **Tidak Ada Tantangan:** Asserter diberi imbalan jika tidak ada tantangan yang dipicu.
   - **Tantangan Dipicu:** Sejumlah validator (n) dipilih secara acak untuk memverifikasi output asserter.

3. Validasi:

    Setiap validator secara independen menghitung hasil dan membandingkannya dengan output asserter.

   - **Cocok:** Jika semua hasil cocok, baik asserter maupun validator diberi imbalan.
   - **Tidak Cocok:** Proses arbitrase menentukan kejujuran asserter dan validator.

4. **Hukuman:** Node yang tidak jujur dihukum, sementara validator yang jujur menerima bagian imbalan mereka.

## SpML

Protokol spML (sampling-based Machine Learning) adalah implementasi dari protokol Proof of Sampling (PoSP) dalam jaringan inferensi AI terdesentralisasi.

### Langkah Kunci

1. **Input Pengguna**: Pengguna mengirimkan input mereka ke server yang dipilih secara acak (asserter) bersama dengan tanda tangan digital mereka.
2. **Output Server**: Server menghitung output dan mengirimkannya kembali ke pengguna bersama dengan hash dari hasilnya.
3. **Mekanisme Tantangan**:
   - Dengan probabilitas yang telah ditentukan (p), sistem memicu tantangan di mana server lain (validator) dipilih secara acak untuk memverifikasi hasil.
   - Jika tidak ada tantangan yang dipicu, asserter menerima imbalan (R) dan proses berakhir.
4. **Verifikasi**:
   - Jika tantangan dipicu, pengguna mengirimkan input yang sama ke validator.
   - Validator menghitung hasil dan mengirimkannya kembali ke pengguna bersama dengan hash.
5. **Perbandingan**:
   - Pengguna membandingkan hash dari output asserter dan validator.
   - Jika hash cocok, baik asserter maupun validator diberi imbalan, dan pengguna menerima diskon pada biaya dasar.
   - Jika hash tidak cocok, pengguna menyiarkan kedua hash ke jaringan.
6. **Arbitrase**:
   - Jaringan memberikan suara untuk menentukan kejujuran asserter dan validator berdasarkan ketidaksesuaian.
   - Node yang jujur diberi imbalan, sementara yang tidak jujur dihukum (slashed).

### Komponen dan Mekanisme Kunci
- **Eksekusi ML Deterministik**: Menggunakan aritmatika titik tetap dan perpustakaan titik mengambang berbasis perangkat lunak untuk memastikan hasil yang konsisten dan dapat direproduksi.
- **Desain Tanpa Status**: Memperlakukan setiap kueri sebagai independen, mempertahankan tanpa status sepanjang proses ML.
- **Partisipasi Tanpa Izin**: Memungkinkan siapa saja untuk bergabung dengan jaringan dan berkontribusi dengan menjalankan server AI.
- **Operasi Off-chain**: Inferensi AI dihitung di luar rantai untuk mengurangi beban pada blockchain, dengan hasil dan tanda tangan digital disampaikan langsung kepada pengguna.
- **Operasi On-chain**: Fungsi kritis, seperti perhitungan saldo dan mekanisme tantangan, ditangani di dalam rantai untuk memastikan transparansi dan keamanan.

### Keuntungan spML
- **Keamanan Tinggi**: Mencapai keamanan melalui insentif ekonomi, memastikan node bertindak jujur karena potensi hukuman untuk ketidakjujuran.
- **Beban Komputasi Rendah**: Validator hanya perlu membandingkan hash dalam kebanyakan kasus, mengurangi beban komputasi selama verifikasi.
- **Skalabilitas**: Dapat menangani aktivitas jaringan yang luas tanpa penurunan kinerja yang signifikan.
- **Kesederhanaan**: Mempertahankan kesederhanaan dalam implementasi, meningkatkan kemudahan integrasi dan pemeliharaan.

### Perbandingan dengan Protokol Lain
- **Optimistic Fraud Proof (opML)**:
  - Bergantung pada disinsentif ekonomi untuk perilaku curang dan mekanisme penyelesaian sengketa.
  - Rentan terhadap aktivitas curang jika tidak cukup validator yang jujur.
- **Zero Knowledge Proof (zkML)**:
  - Memastikan keamanan tinggi melalui bukti kriptografi.
  - Menghadapi tantangan dalam skalabilitas dan efisiensi karena beban komputasi yang tinggi.
- **spML**:
  - Menggabungkan keamanan tinggi melalui insentif ekonomi, beban komputasi rendah, dan skalabilitas tinggi.
  - Menyederhanakan proses verifikasi dengan berfokus pada perbandingan hash, mengurangi kebutuhan untuk perhitungan kompleks selama tantangan.

## Ringkasan

Protokol Proof of Sampling (PoSP) secara efektif menyeimbangkan kebutuhan untuk memberikan insentif kepada pelaku baik dan mencegah pelaku buruk, memastikan keamanan dan keandalan keseluruhan sistem terdesentralisasi. Dengan menggabungkan imbalan ekonomi dengan hukuman yang ketat, PoSP menciptakan lingkungan di mana perilaku jujur tidak hanya didorong tetapi juga diperlukan untuk sukses. Seiring pertumbuhan AI terdesentralisasi, protokol seperti PoSP akan sangat penting dalam menjaga integritas dan kepercayaan sistem canggih ini.

- source: https://cuckoo.network/blog/2024/06/17/proof-of-sampling-posp-protocol-decentralized-ai
- telegram: https://cuckoo.network/tg
- discord: https://cuckoo.network/dc
