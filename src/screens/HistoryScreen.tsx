import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Exam: undefined;
  Result: { answers: (number | null)[] };
  History: undefined;
};

type HistoryScreenNavigationProp = StackNavigationProp<RootStackParamList, 'History'>;
type Props = {
  navigation: HistoryScreenNavigationProp;
};

const dummyHistory = [
  { id: '1', namaUjian: 'Ujian Matematika', tanggal: '10 Juni 2025', skor: 8 },
  { id: '2', namaUjian: 'Ujian IPA', tanggal: '11 Juni 2025', skor: 7 },
];

const HistoryScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Ujian</Text>
      <FlatList
        data={dummyHistory}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.examName}>{item.namaUjian}</Text>
            <Text style={styles.detail}>{item.tanggal} | Skor: {item.skor}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity style={styles.btn} onPress={() => navigation.replace('Home')}>
        <Text style={styles.btnText}>Kembali ke Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f8fc', padding: 16 },
  title: { fontSize: 24, fontFamily: 'AlbertSans-Bold', color: '#0984e3', marginBottom: 18, alignSelf: 'center' },
  item: {
    backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 10,
    shadowColor: '#000', shadowOpacity: 0.06, shadowRadius: 5, elevation: 1,
  },
  examName: { fontSize: 16, fontFamily: 'AlbertSans-Bold', color: '#222f3e' },
  detail: { fontSize: 14, fontFamily: 'AlbertSans-Regular', color: '#636e72', marginTop: 2 },
  btn: { backgroundColor: '#00b894', padding: 14, borderRadius: 14, alignItems: 'center', marginTop: 24 },
  btnText: { color: '#fff', fontFamily: 'AlbertSans-Bold', fontSize: 16 }
});

export default HistoryScreen;
