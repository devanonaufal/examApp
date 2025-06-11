export type Soal = {
  id: number;
  question: string;
  desc?: string;          // deskripsi/petunjuk (optional)
  image?: any;            // untuk gambar ilustrasi soal (optional)
  options: string[];
  answer: string;
};

export const soalData: Soal[] = [
  {
    id: 1,
    question: "Berapakah hasil 5 + 7?",
    desc: "Jawablah menggunakan angka.",
    options: ["10", "11", "12", "13"],
    answer: "12"
  },
  {
    id: 2,
    question: "Siapa penemu bola lampu?",
    desc: "Pilih nama penemu yang benar.",
    options: ["Edison", "Newton", "Einstein", "Tesla"],
    answer: "Edison"
  },
  {
    id: 3,
    question: "Perhatikan gambar berikut! Ini adalah ...",
    desc: "Jawab berdasarkan gambar di atas.",
    //image: require('../assets/images/exam/gambar1.png'), // path ke gambar lokal kamu
    options: ["Katak", "Ikan", "Ular", "Burung"],
    answer: "Katak"
  }
  // ... tambahkan soal lain, image & desc opsional saja
];
