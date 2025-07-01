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
    ujianId: 1, // Ujian Matematika
    question: "Berapakah hasil 5 + 7?",
    desc: "Jawablah menggunakan angka.",
    options: ["10", "11", "12", "13"],
    answer: "12",
    explanation: "Penjumlahan 5 + 7 = 12."
  },
  {
    id: 2,
    ujianId: 1, // Ujian Matematika
    question: "7 × 8 = ...",
    options: ["54", "56", "58", "64"],
    answer: "56",
    explanation: "7 x 8 = 56."
  },
  {
    id: 3,
    ujianId: 2, // Ujian IPA
    question: "Siapa penemu bola lampu?",
    options: ["Edison", "Newton", "Einstein", "Tesla"],
    answer: "Edison",
    explanation: "Thomas Alva Edison dikenal sebagai penemu bola lampu pijar."
  },
  // dst...
];
