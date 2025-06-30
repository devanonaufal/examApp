import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import jadwalData from '../assets/data/jadwal.json';

type Jadwal = {
  id: number;
  mapel: string;
  tanggal: string;
  waktu: string;
};

type Props = {
  navigation: any;
};

const JadwalScreen: React.FC<Props> = ({ navigation }) => {
  const [data, setData] = useState<Jadwal[]>([]);

  useEffect(() => {
    setData(jadwalData);
  }, []);

  const renderItem = ({ item }: { item: Jadwal }) => (
    <View style={styles.card}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 2 }}>
        <Ionicons name="calendar-outline" size={19} color="#0984e3" style={{ marginRight: 7 }} />
        <Text style={styles.mapel}>{item.mapel}</Text>
      </View>
      <Text style={styles.tanggal}>Tanggal: {item.tanggal}</Text>
      <Text style={styles.waktu}>Waktu: {item.waktu}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Exam')}
      >
        <Text style={styles.btnText}>Masuk</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Jadwal Ujian</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: 18, paddingTop: 32 },
  header: { fontSize: 26, fontWeight: 'bold', color: '#2d3436', marginBottom: 10, alignSelf: 'center' },
  card: { backgroundColor: '#f4f7fa', borderRadius: 14, padding: 16, marginBottom: 14, elevation: 2 },
  mapel: { fontSize: 18, fontWeight: 'bold', color: '#00b894' },
  tanggal: { fontSize: 15, color: '#636e72', marginBottom: 4 },
  waktu: { fontSize: 15, color: '#636e72', marginBottom: 10 },
  btn: { backgroundColor: '#0984e3', padding: 10, borderRadius: 8, alignSelf: 'flex-end' },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 15 }
});

export default JadwalScreen;
