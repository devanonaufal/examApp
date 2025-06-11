import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
// Import data JSON
import ujianData from '../assets/data/ujian.json';

type HomeScreenProps = {
  navigation: any;
};

type Ujian = {
  id: number;
  title: string;
  desc: string;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [data, setData] = useState<Ujian[]>([]);

  useEffect(() => {
    setData(ujianData);
  }, []);

  const renderItem = ({ item }: { item: Ujian }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Exam', { ujianId: item.id })}
    >
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.desc}</Text>
      <Text style={styles.mulai}>Mulai</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Ujian</Text>
      
      {/* Tombol Riwayat Ujian */}
      <TouchableOpacity
        style={styles.menuBtn}
        onPress={() => navigation.replace('History')}
      >
        <Text style={styles.menuBtnText}>Riwayat Ujian</Text>
      </TouchableOpacity>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#fff', paddingHorizontal: 18, paddingTop: 32,
  },
  header: {
    fontSize: 26, fontWeight: 'bold', color: '#2d3436', marginBottom: 10,
    alignSelf: 'center'
  },
  menuBtn: {
    backgroundColor: '#0984e3',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  menuBtnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'AlbertSans-Bold',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#f2f2f2', borderRadius: 12, padding: 20, marginBottom: 14,
    elevation: 2,
  },
  title: {
    fontSize: 20, fontWeight: 'bold', color: '#00b894', marginBottom: 5,
  },
  desc: {
    fontSize: 14, color: '#636e72', marginBottom: 8,
  },
  mulai: {
    color: '#0984e3', fontWeight: 'bold', alignSelf: 'flex-end',
  }
});

export default HomeScreen;
