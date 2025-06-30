import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AboutScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Bagian Tentang Aplikasi */}
      <Image
        source={require('../assets/images/logo/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.appTitle}>examApp</Text>
      <Text style={styles.version}>Versi 1.0.0</Text>
      <Text style={styles.desc}>Aplikasi Ujian Online untuk Sekolah.</Text>
      <Text style={styles.desc}>Developer: Tim examApp (isi sesuai tim/sekolahmu)</Text>
      <Text style={styles.desc}>Kontak: support@examapp.com</Text>
      <Text style={styles.copy}>© 2025 examApp</Text>

      {/* Spacer */}
      <View style={{ height: 26 }} />

      {/* Bagian Profil */}
      <View style={styles.profileCard}>
        <Image
          source={require('../assets/images/avatar/default_avatar.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Nama Peserta</Text>
        <Text style={styles.info}>Kelas: 9A</Text>
        <Text style={styles.info}>NIS: 123456789</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 22 },
  logo: { width: 80, height: 80, marginBottom: 16 },
  appTitle: { fontSize: 26, fontFamily: 'AlbertSans-Bold', color: '#0984e3', marginBottom: 8 },
  version: { fontSize: 14, color: '#636e72', fontFamily: 'AlbertSans-Regular', marginBottom: 12 },
  desc: { fontSize: 15, color: '#636e72', textAlign: 'center', fontFamily: 'AlbertSans-Regular', marginBottom: 8 },
  copy: { fontSize: 13, color: '#b2bec3', marginTop: 20 },
  profileCard: {
    marginTop: 20,
    backgroundColor: '#f6f8fc',
    padding: 18,
    borderRadius: 18,
    alignItems: 'center',
    width: '100%',
  },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 12, backgroundColor: '#dfe6e9' },
  name: { fontSize: 20, fontFamily: 'AlbertSans-Bold', color: '#222f3e', marginBottom: 4 },
  info: { fontSize: 15, color: '#636e72', fontFamily: 'AlbertSans-Regular', marginBottom: 2 }
});

export default AboutScreen;
