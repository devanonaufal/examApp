import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { soalData } from '../api/soal';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../App'; 

type Props = StackScreenProps<RootStackParamList, 'SoalList'>;

const SoalListScreen: React.FC<Props> = ({ navigation, route }) => {
  const { ujianId } = route.params;
  const filteredSoal = soalData.filter(s => s.ujianId === ujianId);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Daftar Soal Ujian</Text>
      <FlatList
        data={filteredSoal}
        keyExtractor={(_, idx) => idx.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate('DetailSoal', {
                soalIndex: index,
                ujianId
              })
            }
          >
            <Text style={styles.nomor}>Soal {index + 1}</Text>
            <Text style={styles.question}>{item.question}</Text>
            {item.desc && <Text style={styles.desc}>{item.desc}</Text>}
            <Text style={styles.detailLink}>Lihat Detail</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 40 }}
        ListEmptyComponent={
          <Text style={{ textAlign: 'center', color: '#636e72', marginTop: 30 }}>
            Belum ada soal untuk ujian ini.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 18 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#0984e3', marginBottom: 12, alignSelf: 'center' },
  card: { backgroundColor: '#f6f8fc', borderRadius: 12, padding: 16, marginBottom: 14 },
  nomor: { fontWeight: 'bold', color: '#636e72', marginBottom: 3 },
  question: { fontSize: 16, fontWeight: 'bold', color: '#222f3e', marginBottom: 5 },
  desc: { fontSize: 14, color: '#636e72', marginBottom: 6, fontStyle: 'italic' },
  detailLink: { color: '#0984e3', fontWeight: 'bold', marginTop: 8 }
});

export default SoalListScreen;
