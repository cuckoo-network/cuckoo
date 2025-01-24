---
title: "Makalah Putih Agen Google"
tags: [agen AI, arsitektur kognitif, makalah putih Google]
keywords: [AI, agen, arsitektur kognitif, Google, sistem AI]
authors: [lark]
description: Makalah putih Google mengungkap potensi transformatif agen AI, menunjukkan kemampuan mereka untuk memahami, bernalar, dan mempengaruhi dunia nyata. Temukan bagaimana agen ini berbeda dari model AI tradisional melalui akses informasi real-time, kemampuan mengambil tindakan, dan integrasi alat.
image: "https://cuckoo-portal-frontend.onrender.com/api/og?title=Makalah%20Putih%20Agen%20Google"
---

# Makalah Putih Agen Google

Sementara model bahasa seperti GPT-4 dan Gemini telah menarik perhatian publik dengan kemampuan percakapannya, revolusi yang lebih mendalam sedang terjadi: kebangkitan agen AI. Seperti yang dijelaskan dalam makalah putih terbaru Google, agen ini bukan hanya chatbot pintar – mereka adalah sistem AI yang dapat secara aktif memahami, bernalar tentang, dan mempengaruhi dunia nyata.

![](https://cuckoo-portal-frontend.onrender.com/api/og?title=Makalah%20Putih%20Agen%20Google)

## Evolusi Kemampuan AI

Pikirkan model AI tradisional seperti profesor yang sangat berpengetahuan terkurung di ruangan tanpa internet atau telepon. Mereka dapat memberikan wawasan brilian, tetapi hanya berdasarkan apa yang mereka pelajari sebelum memasuki ruangan. Agen AI, di sisi lain, seperti profesor dengan serangkaian alat modern lengkap di tangan mereka – mereka dapat mencari informasi terkini, mengirim email, membuat perhitungan, dan mengoordinasikan tugas-tugas kompleks.

Inilah yang membedakan agen dari model tradisional:

- **Informasi Real-time**: Sementara model terbatas pada data pelatihan mereka, agen dapat mengakses informasi terkini melalui alat eksternal dan API
- **Pengambilan Tindakan**: Agen tidak hanya menyarankan tindakan – mereka dapat mengeksekusinya melalui panggilan fungsi dan interaksi API
- **Manajemen Memori**: Agen mempertahankan konteks di berbagai interaksi, belajar dari setiap pertukaran untuk meningkatkan respons mereka
- **Integrasi Alat**: Kemampuan bawaan untuk menggunakan alat eksternal dan API dibangun ke dalam arsitektur mereka, bukan ditambahkan sebagai pemikiran belakangan

## Bagaimana Agen Berpikir: Arsitektur Kognitif

![](https://cuckoo-network.b-cdn.net/google-agent-1-arch.webp)

Keajaiban sebenarnya dari agen terletak pada "arsitektur kognitif" mereka – sistem yang mengatur bagaimana mereka bernalar dan membuat keputusan. Makalah putih ini merinci tiga pendekatan kunci:

1. **ReAct**: Kerangka kerja di mana agen bergantian antara bernalar tentang situasi mereka dan mengambil tindakan konkret. Bayangkan seorang koki yang terus-menerus mengevaluasi kemajuan mereka dan menyesuaikan strategi memasak mereka.

2. **Chain-of-Thought**: Agen memecah masalah kompleks menjadi langkah-langkah yang lebih kecil dan dapat dikelola, menunjukkan pekerjaan mereka sepanjang jalan. Ini mirip dengan bagaimana seorang matematikawan menyelesaikan persamaan kompleks langkah demi langkah.

3. **Tree-of-Thoughts**: Agen menjelajahi beberapa jalur solusi yang mungkin secara bersamaan, seperti pemain catur yang mempertimbangkan langkah-langkah berbeda dan konsekuensinya.

![](https://cuckoo-network.b-cdn.net/google-agent-2-reasoning-in-the-orchestration-layer.webp)

Berikut adalah contoh nyata dari makalah putih tentang bagaimana agen dapat menangani permintaan pemesanan penerbangan:

```
Pengguna: "Saya ingin memesan penerbangan dari Austin ke Zurich"

Pikiran Agen: Saya harus mencari penerbangan terlebih dahulu
Tindakan: [Memanggil API pencarian penerbangan]
Pengamatan: Beberapa opsi penerbangan ditemukan

Pikiran Agen: Saya harus memeriksa harga dan rute terbaik
Tindakan: [Menganalisis hasil pencarian]
Pengamatan: Ditemukan koneksi dan harga optimal

Pikiran Agen: Pengguna membutuhkan ringkasan opsi yang jelas
Jawaban Akhir: "Berikut adalah opsi penerbangan terbaik..."
```

## Peralatan Agen: Bagaimana Mereka Berinteraksi dengan Dunia

Makalah putih ini mengidentifikasi tiga cara berbeda agen dapat berinteraksi dengan sistem eksternal:

### 1. Ekstensi

Ini adalah **alat sisi agen yang memungkinkan panggilan API langsung**. Anggap mereka sebagai tangan agen – mereka dapat menjangkau dan berinteraksi langsung dengan layanan eksternal. Makalah putih Google menunjukkan bagaimana ini sangat berguna untuk operasi real-time seperti memeriksa harga penerbangan atau prakiraan cuaca.

![](https://cuckoo-network.b-cdn.net/google-agent-3-extension.webp)

### 2. Fungsi
Berbeda dengan ekstensi, **fungsi berjalan di sisi klien**. Ini memberikan lebih banyak kontrol dan keamanan, menjadikannya ideal untuk operasi sensitif. Agen menentukan apa yang perlu dilakukan, tetapi eksekusi sebenarnya terjadi di bawah pengawasan klien.

![](https://cuckoo-network.b-cdn.net/google-agent-8-function.webp)

Perbedaan antara ekstensi dan fungsi:

![](https://cuckoo-network.b-cdn.net/google-agent-9-diff-extensions-functions.webp)

### 3. Penyimpanan Data

Ini adalah perpustakaan referensi agen, menyediakan akses ke data terstruktur dan tidak terstruktur. Menggunakan basis data vektor dan embedding, agen dapat dengan cepat menemukan informasi yang relevan dalam kumpulan data yang luas.
![](https://cuckoo-network.b-cdn.net/google-agent-4-data-store.webp)

![](https://cuckoo-network.b-cdn.net/google-agent-5-data-store-details.webp)

## Bagaimana Agen Belajar dan Meningkat

Makalah putih ini menguraikan tiga pendekatan menarik untuk pembelajaran agen:

1. **Pembelajaran dalam Konteks**: Seperti koki yang diberi resep baru dan bahan-bahan, agen belajar menangani tugas baru melalui contoh dan instruksi yang diberikan saat runtime.

2. **Pembelajaran Berbasis Pengambilan**: Bayangkan seorang koki dengan akses ke perpustakaan buku masak yang luas. Agen dapat secara dinamis menarik contoh dan instruksi yang relevan dari penyimpanan data mereka.

   ![](https://cuckoo-network.b-cdn.net/google-agent-6-rag-workflow.webp)

3. **Penyetelan Halus**: Ini seperti mengirim koki ke sekolah kuliner – pelatihan sistematis pada jenis tugas tertentu untuk meningkatkan kinerja secara keseluruhan.

## Membangun Agen Siap Produksi

Bagian paling praktis dari makalah putih ini membahas penerapan agen dalam lingkungan produksi. Menggunakan platform Vertex AI Google, pengembang dapat membangun agen yang menggabungkan:

- Pemahaman bahasa alami untuk interaksi pengguna
- Integrasi alat untuk tindakan dunia nyata
- Manajemen memori untuk respons kontekstual
- Sistem pemantauan dan evaluasi

![](https://cuckoo-network.b-cdn.net/google-agent-7-e2e-built-with-vertex.webp)

## Masa Depan Arsitektur Agen

Mungkin yang paling menarik adalah konsep "**rantai agen**" – menggabungkan agen khusus untuk menangani tugas-tugas kompleks. Bayangkan sistem perencanaan perjalanan yang menggabungkan:

- Agen pemesanan penerbangan
- Agen rekomendasi hotel
- Agen perencanaan aktivitas lokal
- Agen pemantauan cuaca

Masing-masing berspesialisasi dalam domainnya tetapi bekerja sama untuk menciptakan solusi yang komprehensif.

## Apa Artinya Ini untuk Masa Depan

Kemunculan agen AI mewakili pergeseran mendasar dalam kecerdasan buatan – dari sistem yang hanya dapat berpikir menjadi sistem yang dapat berpikir dan melakukan. Meskipun kita masih dalam tahap awal, arsitektur dan pendekatan yang diuraikan dalam makalah putih Google memberikan peta jalan yang jelas tentang bagaimana AI akan berkembang dari alat pasif menjadi peserta aktif dalam memecahkan masalah dunia nyata.

Bagi pengembang, pemimpin bisnis, dan penggemar teknologi, memahami agen AI bukan hanya tentang mengikuti tren – ini tentang mempersiapkan masa depan di mana AI menjadi mitra kolaboratif sejati dalam upaya manusia.

*Bagaimana Anda melihat agen AI mengubah industri Anda? Bagikan pemikiran Anda di komentar di bawah.*
