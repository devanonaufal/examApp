import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Alert,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { soalData } from '../api/soal';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Exam: undefined;
  Result: { answers: (number | null)[] };
};

type ExamScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Exam'>;
type Props = {
  navigation: ExamScreenNavigationProp;
};

const ExamScreen: React.FC<Props> = ({ navigation }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(soalData.length).fill(null));
  const soal = soalData[current];
  const selected = answers[current];

  const handleSelect = (idx: number) => {
    const newAnswers = [...answers];
    newAnswers[current] = idx;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (current < soalData.length - 1) {
      setCurrent(current + 1);
    } else {
      const belumDijawab = answers.some((ans) => ans === null);
      if (belumDijawab) {
        Alert.alert(
          'Konfirmasi',
          'Masih ada soal yang belum dijawab. Yakin ingin menyelesaikan ujian?',
          [
            { text: 'Batal', style: 'cancel' },
            {
              text: 'Yakin',
              onPress: () => navigation.replace('Result', { answers }),
            },
          ]
        );
      } else {
        navigation.replace('Result', { answers });
      }
    }
  };

  const handlePrev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  return (
    <View style={styles.container}>
      {/* PANEL INFO UJIAN */}
      <View style={styles.infoPanel}>
        <Text style={styles.infoTitle}>Ujian: Matematika</Text>
        <Text style={styles.infoSub}>Kelas: 9A</Text>
      </View>

      <Image
        source={require('../assets/images/logo/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.progress}>
        <Text style={styles.progressText}>
          Soal {current + 1} dari {soalData.length}
        </Text>
      </View>

      <View style={styles.barWrapper}>
        <FlatList
          data={soalData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, idx) => idx.toString()}
          contentContainerStyle={{ paddingVertical: 4, paddingHorizontal: 8 }}
          renderItem={({ index }) => {
            const isActive = index === current;
            const isEmpty = answers[index] === null;
            return (
              <TouchableOpacity
                style={[
                  styles.numBox,
                  isActive && styles.numActive,
                  isEmpty && styles.numEmpty,
                ]}
                onPress={() => setCurrent(index)}
              >
                <Text
                  style={[
                    styles.numText,
                    isActive && styles.numTextActive,
                    isEmpty && styles.numTextEmpty,
                  ]}
                >
                  {index + 1}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.question}>{soal.question}</Text>
        {soal.desc && (
          <Text style={styles.desc}>{soal.desc}</Text>
        )}
        {soal.image && (
          <Image
            source={soal.image}
            style={styles.examImage}
            resizeMode="contain"
          />
        )}
        <FlatList
          data={soal.options}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={[
                styles.option,
                selected === index && styles.optionSelected
              ]}
              onPress={() => handleSelect(index)}
            >
              <View style={styles.rowOpsi}>
                <View style={[
                  styles.badge,
                  selected === index && styles.badgeActive
                ]}>
                  <Text style={[
                    styles.badgeText,
                    selected === index && styles.badgeTextActive
                  ]}>
                    {String.fromCharCode(65 + index)}
                  </Text>
                </View>
                <Text style={[
                  styles.optionText,
                  selected === index && styles.optionTextSelected
                ]}>
                  {item}
                </Text>
                {selected === index && (
                  <Text style={styles.checkMark}>✓</Text>
                )}
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(_, idx) => idx.toString()}
        />
      </View>

      <View style={styles.rowButton}>
        <TouchableOpacity
          style={[styles.navBtn, current === 0 && styles.disabledBtn]}
          onPress={handlePrev}
          disabled={current === 0}
        >
          <Text style={styles.nextText}>Sebelumnya</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navBtn}
          onPress={handleNext}
        >
          <Text style={styles.nextText}>
            {current === soalData.length - 1 ? 'Selesai' : 'Selanjutnya'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#f6f8fc', justifyContent: 'center', alignItems: 'center', padding: 16
  },
  infoPanel: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  infoTitle: {
    fontSize: 16,
    color: '#0984e3',
    fontFamily: 'AlbertSans-Bold',
    marginBottom: 2,
  },
  infoSub: {
    fontSize: 13,
    color: '#636e72',
    fontFamily: 'AlbertSans-Regular',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
    alignSelf: 'center'
  },
  progress: {
    marginBottom: 6,
  },
  progressText: {
    fontSize: 15,
    color: '#636e72',
    fontFamily: 'AlbertSans-Bold',
    textAlign: 'center',
  },
  barWrapper: {
    flexDirection: 'row',
    marginBottom: 12,
    alignSelf: 'center',
  },
  numBox: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f1f2f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
    borderWidth: 2,
    borderColor: '#dfe4ea',
  },
  numActive: {
    backgroundColor: '#0984e3',
    borderColor: '#0984e3',
  },
  numEmpty: {
    borderColor: '#d63031',
  },
  numText: {
    fontSize: 16,
    color: '#636e72',
    fontFamily: 'AlbertSans-Bold',
  },
  numTextActive: {
    color: '#fff',
  },
  numTextEmpty: {
    color: '#d63031',
  },
  card: {
    width: '100%', backgroundColor: '#fff', borderRadius: 18, padding: 24, shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.07, shadowRadius: 8, elevation: 4, marginBottom: 30
  },
  question: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222f3e',
    marginBottom: 12,
    textAlign: 'center',
    fontFamily: 'AlbertSans-Bold',
  },
  desc: {
    fontSize: 14,
    color: '#636e72',
    fontFamily: 'AlbertSans-Regular',
    marginBottom: 12,
    textAlign: 'center',
  },
  examImage: {
    width: 180,
    height: 120,
    marginBottom: 12,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#e9ecef',
  },
  // TAMBAHAN STYLE UNTUK LABEL OPSI & CHECKLIST
  rowOpsi: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  badge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#dfe6e9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  badgeActive: {
    backgroundColor: '#00b894',
  },
  badgeText: {
    fontSize: 15,
    color: '#636e72',
    fontFamily: 'AlbertSans-Bold',
  },
  badgeTextActive: {
    color: '#fff',
  },
  checkMark: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 'auto',
    backgroundColor: '#00b894',
    borderRadius: 12,
    width: 24,
    height: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    lineHeight: 24,
  },
  option: {
    backgroundColor: '#f3f6fa', borderRadius: 10, paddingVertical: 14, paddingHorizontal: 20,
    marginBottom: 12, borderWidth: 1, borderColor: '#e3e7ee'
  },
  optionSelected: {
    backgroundColor: '#00b894', borderColor: '#00b894'
  },
  optionText: {
    fontSize: 16, color: '#636e72', fontFamily: 'AlbertSans-Regular',
  },
  optionTextSelected: {
    color: '#fff', fontWeight: 'bold', fontFamily: 'AlbertSans-Bold',
  },
  rowButton: {
    flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: 20
  },
  navBtn: {
    flex: 1,
    backgroundColor: '#0984e3',
    paddingVertical: 14,
    borderRadius: 18,
    elevation: 2,
    marginHorizontal: 6,
    alignItems: 'center',
  },
  disabledBtn: {
    backgroundColor: '#b2bec3'
  },
  nextText: {
    color: '#fff', fontWeight: 'bold', fontSize: 16, fontFamily: 'AlbertSans-Bold',
  }
});

export default ExamScreen;
