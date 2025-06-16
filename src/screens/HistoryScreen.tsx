import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type HistoryItem = {
  id: string;
  namaUjian: string;
  tanggal: string;
  skor: number;
  total: number;
};

type Props = {
  navigation: any;
};

const HistoryScreen: React.FC<Props> = ({ navigation }) => {
  const [history, setHistory] = useState<HistoryItem[]>([]);

  // Ambil dan refresh history dari AsyncStorage
  const fetchHistory = useCallback(async () => {
    try {
      const res = await AsyncStorage.getItem('history');
      setHistory(res ? JSON.parse(res) : []);
    } catch {
      setHistory([]);
    }
  }, []);

  useEffect(() => {
    fetchHistory();
    const unsubscribe = navigation.addListener('focus', fetchHistory);
    return unsubscribe;
  }, [navigation, fetchHistory]);

  const clearHistory = async () => {
    await AsyncStorage.removeItem('history');
    setHistory([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Riwayat Ujian</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.namaUjian}</Text>
            <Text style={styles.date}>{item.tanggal}</Text>
            <Text style={styles.skor}>Skor: {item.skor} / {item.total}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
        ListEmptyComponent={
          <Text style={styles.empty}>Belum ada riwayat ujian.</Text>
        }
        contentContainerStyle={{ flexGrow: 1 }}
      />
      {history.length > 0 && (
        <TouchableOpacity style={styles.clearBtn} onPress={clearHistory}>
          <Text style={styles.clearBtnText}>Hapus Semua Riwayat</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={styles.homeBtn}
        onPress={() => navigation.replace('MainTab', { screen: 'Home' })}  // ← Navigasi ke Home tab
      >
        <Text style={styles.homeBtnText}>Kembali ke Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: {
    fontSize: 22, fontWeight: 'bold', color: '#0984e3', marginBottom: 16, alignSelf: 'center',
    fontFamily: 'AlbertSans-Bold'
  },
  card: {
    backgroundColor: '#f1f2f6', padding: 18, borderRadius: 12, marginBottom: 12, elevation: 1
  },
  title: { fontSize: 18, fontWeight: 'bold', color: '#00b894', fontFamily: 'AlbertSans-Bold' },
  date: { fontSize: 14, color: '#636e72', marginBottom: 4, fontFamily: 'AlbertSans-Regular' },
  skor: { fontSize: 16, color: '#222f3e', fontWeight: 'bold', fontFamily: 'AlbertSans-Bold' },
  empty: { textAlign: 'center', marginTop: 40, color: '#636e72', fontFamily: 'AlbertSans-Regular' },
  clearBtn: {
    backgroundColor: '#d63031', borderRadius: 16, alignItems: 'center', marginTop: 8, paddingVertical: 12
  },
  clearBtnText: { color: '#fff', fontSize: 15, fontWeight: 'bold', fontFamily: 'AlbertSans-Bold' },
  homeBtn: {
    backgroundColor: '#0984e3', borderRadius: 16, alignItems: 'center', marginTop: 16, paddingVertical: 14
  },
  homeBtnText: { color: '#fff', fontSize: 16, fontWeight: 'bold', fontFamily: 'AlbertSans-Bold' }
});

export default HistoryScreen;
