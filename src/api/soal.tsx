// examApp/src/api/soal.tsx

export type Soal = {
  id: number;
  question: string;
  desc?: string;          // Deskripsi atau petunjuk (opsional)
  options: string[];
  answer: string;
  explanation?: string;   // Penjelasan/pembahasan (opsional)
  image?: any;            // Gambar ilustrasi soal (opsional, gunakan require() jika lokal)
};

export const soalData: Soal[] = [
  {
    id: 1,
    question: "Berapakah hasil 5 + 7?",
    desc: "Jawablah menggunakan angka.",
    options: ["10", "11", "12", "13"],
    answer: "12",
    explanation: "Penjumlahan 5 + 7 = 12."
    // image: require('../assets/images/exam/soal1.png'), // contoh jika ada gambar
  },
  {
    id: 2,
    question: "Siapa penemu bola lampu?",
    desc: "Pilih nama penemu yang benar.",
    options: ["Edison", "Newton", "Einstein", "Tesla"],
    answer: "Edison",
    explanation: "Thomas Alva Edison dikenal sebagai penemu bola lampu pijar."
    // image: require('../assets/images/exam/soal2.png'),
  },
  {
    id: 3,
    question: "Perhatikan gambar berikut! Ini adalah ...",
    desc: "Jawab berdasarkan gambar di atas.",
    image: require('../assets/images/exam/gambar1.png'), // ← Gambar lokal, pastikan file ini ada
    options: ["Katak", "Ikan", "Ular", "Burung"],
    answer: "Katak",
    explanation: "Katak memiliki bentuk tubuh dan kaki belakang panjang yang khas untuk melompat."
  }
  // Tambahkan soal lain di sini, dengan atau tanpa explanation/gambar.
];
