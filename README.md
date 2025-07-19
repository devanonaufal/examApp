# examApp

Aplikasi Ujian Online untuk Sekolah berbasis React Native.

---

## Daftar Isi

1. [Deskripsi Proyek](#deskripsi-proyek)
2. [Fitur Utama](#fitur-utama)
3. [Struktur Proyek](#struktur-proyek)
4. [Panduan Instalasi](#panduan-instalasi)
5. [Panduan Menjalankan](#panduan-menjalankan)
6. [Akun Demo](#akun-demo)
7. [Teknologi yang Digunakan](#teknologi-yang-digunakan)
8. [Kontribusi](#kontribusi)
9. [Kontak](#kontak)

---

## Deskripsi Proyek

examApp merupakan aplikasi mobile yang didesain khusus untuk membantu sekolah dalam menyelenggarakan ujian secara online, menyediakan navigasi yang intuitif dan pengalaman pengguna yang nyaman.

---

## Fitur Utama

* **Splash Screen**: Halaman pembuka dengan logo aplikasi.
* **Device Check**: Pemeriksaan kondisi perangkat (versi aplikasi, kondisi root, dan ruang penyimpanan).
* **Login & Autentikasi**: Proses login sederhana dengan kredensial pengguna.
* **Welcome Screen**: Halaman sambutan setelah berhasil login.
* **Navigasi Utama**: Bottom navigation untuk mengakses Home, Riwayat, Jadwal, dan Tentang aplikasi.
* **Daftar Ujian**: Tampilan daftar ujian dengan detail soal dan pembahasan.
* **Pengerjaan Ujian**: Halaman ujian dengan timer untuk mengerjakan soal.
* **Profil Pengguna**: Tampilan data pengguna diakses melalui avatar profil.
* **Tentang Aplikasi**: Informasi mengenai aplikasi dan developer.

---

## Struktur Proyek

```
src/
├── api/
│   └── soal.tsx
├── assets/
│   ├── images/
│   │   ├── logo/
│   │   ├── avatar/
│   │   └── exam/
│   └── data/
│       └── ujian.json
├── components/
│   └── AvatarButton.tsx
├── navigation/
│   └── MainTab.tsx
└── screens/
    ├── AboutScreen.tsx
    ├── DeviceCheckScreen.tsx
    ├── DetailSoalScreen.tsx
    ├── ExamScreen.tsx
    ├── HistoryScreen.tsx
    ├── HomeScreen.tsx
    ├── JadwalScreen.tsx
    ├── LoginScreen.tsx
    ├── ProfileScreen.tsx
    ├── ResultScreen.tsx
    ├── SoalListScreen.tsx
    ├── SplashScreen.tsx
    └── WelcomeScreen.tsx

App.tsx
```

---

## Panduan Instalasi

1. Clone repository:

```bash
git clone https://github.com/devanonaufal/examApp.git
```

2. Instal dependensi:

```bash
npm install
```

---

## Panduan Menjalankan

* Jalankan Metro server:

```bash
npx react-native start --reset-cache
```

* Jalankan aplikasi pada emulator atau device fisik:

**Android**:

```bash
npx react-native run-android
```

**iOS**:

```bash
npx react-native run-ios
```

---

## Akun Demo

Gunakan akun berikut untuk mencoba aplikasi:

* **Username**: `siswa`
* **Password**: `123456`

---

## Teknologi yang Digunakan

* React Native
* TypeScript
* React Navigation
* React Native Vector Icons
* Metro Bundler

---

## Kontribusi

Kami terbuka terhadap kontribusi dalam pengembangan aplikasi ini. Silakan ajukan pull request atau hubungi kami langsung untuk kolaborasi.

---

## Kontak

Tim Pengembang examApp
Email: [devanonaufal@gmail.com](mailto:admin@sphixray.com)

---

© 2025 examApp | Semua Hak Dilindungi.
