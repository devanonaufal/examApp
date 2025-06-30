import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { soalData } from '../api/soal';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; // Path ke App.tsx (cek jika beda)

type Props = StackScreenProps<RootStackParamList, 'DetailSoal'>;

const DetailSoalScreen: React.FC<Props> = ({ navigation, route }) => {
  // Ambil index dan ujianId dari params
  const { soalIndex, ujianId } = route.params;

  // Filter soal untuk ujian tersebut saja
  const soalUjian = soalData.filter(s => s.ujianId === ujianId);

  const soal = soalUjian[soalIndex];

  if (!soal) return <Text style={{ padding: 32 }}>Soal tidak ditemukan!</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Detail Soal</Text>
      <View style={styles.card}>
        <Text style={styles.nomor}>Soal {soalIndex + 1}</Text>
        <Text style={styles.question}>{soal.question}</Text>
        {soal.desc && <Text style={styles.desc}>{soal.desc}</Text>}
        <View>
          {soal.options.map((opsi, i) => (
            <Text key={i} style={styles.opsi}>
              {String.fromCharCode(65 + i)}. {opsi}
            </Text>
          ))}
        </View>
        <Text style={styles.kunci}>Kunci: {soal.answer}</Text>
        {soal.explanation && (
          <Text style={styles.pembahasan}>Pembahasan: {soal.explanation}</Text>
        )}
      </View>
      <View style={styles.rowButton}>
        <TouchableOpacity
          style={[styles.btn, soalIndex === 0 && styles.disabled]}
          disabled={soalIndex === 0}
          onPress={() => navigation.replace('DetailSoal', { soalIndex: soalIndex - 1, ujianId })}
        >
          <Text style={styles.btnText}>Sebelumnya</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.replace('SoalList', { ujianId })}
        >
          <Text style={styles.btnText}>Daftar Soal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, soalIndex === soalUjian.length - 1 && styles.disabled]}
          disabled={soalIndex === soalUjian.length - 1}
          onPress={() => navigation.replace('DetailSoal', { soalIndex: soalIndex + 1, ujianId })}
        >
          <Text style={styles.btnText}>Selanjutnya</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 18 },
  header: { fontSize: 22, fontWeight: 'bold', color: '#0984e3', alignSelf: 'center', marginBottom: 14 },
  card: { backgroundColor: '#f6f8fc', borderRadius: 12, padding: 16, marginBottom: 18 },
  nomor: { fontWeight: 'bold', color: '#636e72', marginBottom: 3 },
  question: { fontSize: 16, fontWeight: 'bold', color: '#222f3e', marginBottom: 5 },
  desc: { fontSize: 14, color: '#636e72', marginBottom: 6, fontStyle: 'italic' },
  opsi: { fontSize: 15, color: '#636e72', marginBottom: 2 },
  kunci: { color: '#00b894', fontWeight: 'bold', marginTop: 5 },
  pembahasan: { color: '#636e72', fontStyle: 'italic', marginTop: 2, fontSize: 13 },
  rowButton: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 },
  btn: { backgroundColor: '#0984e3', borderRadius: 10, padding: 12, flex: 1, marginHorizontal: 5, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  disabled: { backgroundColor: '#b2bec3' },
});

export default DetailSoalScreen;
