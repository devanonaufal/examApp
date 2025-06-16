import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { soalData } from '../api/soal';
import AsyncStorage from '@react-native-async-storage/async-storage';

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Exam: undefined;
  Result: { answers: (number | null)[] };
  History: undefined;
  Profile: undefined;
  About: undefined;
  MainTab?: { screen?: string };  
};


type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Result'>;
type ResultScreenRouteProp = RouteProp<RootStackParamList, 'Result'>;

type Props = {
  navigation: ResultScreenNavigationProp;
  route: ResultScreenRouteProp;
};

const ResultScreen: React.FC<Props> = ({ route, navigation }) => {
  const { answers } = route.params;

  // Hitung skor
  const score = soalData.reduce((acc, soal, idx) => {
    const userAnswerIndex = answers[idx];
    const userAnswer = userAnswerIndex !== null && userAnswerIndex !== undefined
      ? soal.options[userAnswerIndex]
      : undefined;
    const benar = userAnswer === soal.answer;
    return acc + (benar ? 1 : 0);
  }, 0);

  // Simpan riwayat ke AsyncStorage
  useEffect(() => {
    const saveHistory = async () => {
      try {
        const now = new Date();
        const newHistory = {
          id: now.getTime().toString(),
          namaUjian: 'Ujian Matematika',
          tanggal: now.toLocaleDateString(),
          skor: score,
          total: soalData.length,
        };
        const oldHistory = await AsyncStorage.getItem('history');
        let history = oldHistory ? JSON.parse(oldHistory) : [];
        history.unshift(newHistory);
        await AsyncStorage.setItem('history', JSON.stringify(history));
      } catch (e) {
        console.error('Gagal menyimpan riwayat ujian', e);
      }
    };
    saveHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hasil Ujian</Text>
      <Text style={styles.score}>Skor: {score} / {soalData.length}</Text>

      <FlatList
        data={soalData}
        renderItem={({ item, index }) => {
          const userAnswerIndex = answers[index];
          const userAnswer = userAnswerIndex !== null && userAnswerIndex !== undefined
            ? item.options[userAnswerIndex]
            : undefined;
          const isCorrect = userAnswer === item.answer;

          return (
            <View style={styles.item}>
              <Text style={styles.question}>{index + 1}. {item.question}</Text>
              <Text
                style={[
                  styles.answer,
                  userAnswer === undefined
                    ? {}
                    : isCorrect
                      ? styles.correct
                      : styles.wrong
                ]}
              >
                Jawaban Anda: {userAnswer ?? 'Belum dijawab'}
              </Text>
              <Text style={styles.answer}>Kunci: {item.answer}</Text>
              {item.explanation && (
                <Text style={styles.explanation}>
                  Pembahasan: {item.explanation}
                </Text>
              )}
            </View>
          );
        }}
        keyExtractor={(_, idx) => idx.toString()}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.replace('MainTab')}
      >
        <Text style={styles.buttonText}>Kembali ke Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#00b894', marginTop: 10 }]}
        onPress={() => navigation.replace('MainTab', { screen: 'History' })}
      >
        <Text style={styles.buttonText}>Lihat Riwayat Ujian</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 18 },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00b894',
    marginBottom: 8,
    alignSelf: 'center',
    fontFamily: 'AlbertSans-Bold',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0984e3',
    marginBottom: 20,
    alignSelf: 'center',
    fontFamily: 'AlbertSans-Bold',
  },
  item: {
    backgroundColor: '#f4f7fa',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
    elevation: 2,
  },
  question: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6,
    fontFamily: 'AlbertSans-Bold',
  },
  answer: {
    fontSize: 14,
    marginBottom: 2,
    fontFamily: 'AlbertSans-Regular',
  },
  correct: { color: '#00b894', fontWeight: 'bold' },
  wrong: { color: '#d63031', fontWeight: 'bold' },
  explanation: {
    fontSize: 13,
    color: '#636e72',
    fontStyle: 'italic',
    marginTop: 2,
    fontFamily: 'AlbertSans-Regular',
  },
  button: {
    marginTop: 16,
    backgroundColor: '#0984e3',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
  },
});

export default ResultScreen;
