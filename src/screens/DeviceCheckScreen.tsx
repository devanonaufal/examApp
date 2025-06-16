import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const checklist = [
  { label: 'Versi aplikasi terbaru (v1.0.0)', ok: true },
  { label: 'Device tidak di root / modifikasi', ok: true },
  { label: 'Penyimpanan Kosong >= 2GB', ok: true },
];

type Props = {
  navigation: any;
};

const DeviceCheckScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/device_check.png')} // gunakan gambar sesuai asset-mu!
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <Text style={styles.title}>Memeriksa{'\n'}Perangkat ...</Text>
        <View style={{ marginVertical: 20 }}>
          {checklist.map((item, i) => (
            <View key={i} style={styles.row}>
              <Text style={styles.icon}>✅</Text>
              <Text style={styles.checkLabel}>{item.label}</Text>
            </View>
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace('Welcome')}
        >
          <Text style={styles.buttonText}>Lanjutkan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#6D90EF', alignItems: 'center' },
  image: {
    width: '80%',
    height: 270,
    marginTop: 28,
    marginBottom: 0,
    alignSelf: 'center'
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    marginTop: -25,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 28,
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: '#222f3e',
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center'
  },
  row: {
    flexDirection: 'row', alignItems: 'center', marginBottom: 14,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  checkLabel: {
    fontSize: 17,
    color: '#222f3e',
    fontFamily: 'AlbertSans-Bold'
  },
  button: {
    backgroundColor: '#6D90EF',
    paddingHorizontal: 38,
    paddingVertical: 16,
    borderRadius: 14,
    marginTop: 28,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 }
});

export default DeviceCheckScreen;
