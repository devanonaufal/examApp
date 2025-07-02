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
      <Text style={styles.desc}>Developer: Tim examApp</Text>
      <Text style={styles.desc}>Kontak: support@examapp.com</Text>
      <Text style={styles.copy}>© 2025 examApp</Text>
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
});

export default AboutScreen;
