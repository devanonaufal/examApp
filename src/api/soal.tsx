// src/api/soal.tsx

export type Soal = {
  id: number;
  ujianId: number;        
  question: string;
  desc?: string;          
  options: string[];
  answer: string;
  explanation?: string;   
  image?: any;            
};

export const soalData: Soal[] = [
  {
    id: 1,
    ujianId: 1, // Matematika
    question: "Berapakah hasil 5 + 7?",
    desc: "Jawablah menggunakan angka.",
    options: ["10", "11", "12", "13"],
    answer: "12",
    explanation: "Penjumlahan 5 + 7 = 12.",
    // image: require('../assets/images/exam/soal1.png'),
  },
  {
    id: 2,
    ujianId: 2, // IPA
    question: "Siapa penemu bola lampu?",
    desc: "Pilih nama penemu yang benar.",
    options: ["Edison", "Newton", "Einstein", "Tesla"],
    answer: "Edison",
    explanation: "Thomas Alva Edison dikenal sebagai penemu bola lampu pijar.",
    // image: require('../assets/images/exam/soal2.png'),
  },
  {
    id: 3,
    ujianId: 1, // Matematika
    question: "Perhatikan gambar berikut! Ini adalah ...",
    desc: "Jawab berdasarkan gambar di atas.",
    // image: require('../assets/images/exam/gambar1.png'),
    options: ["Katak", "Ikan", "Ular", "Burung"],
    answer: "Katak",
    explanation: "Katak memiliki bentuk tubuh dan kaki belakang panjang yang khas untuk melompat."
  }
  // Tambahkan soal lain di sini, pastikan semua ada ujianId!
];
