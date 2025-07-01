// src/screens/ProfileScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/avatar/default_avatar.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nama Pengguna</Text>
      <Text style={styles.info}>Email: pengguna@email.com</Text>
      <Text style={styles.info}>Kelas: 9A</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#dfe6e9', marginBottom: 18 },
  name: { fontSize: 22, fontWeight: 'bold', color: '#222f3e', marginBottom: 10 },
  info: { fontSize: 15, color: '#636e72', marginBottom: 6 }
});

export default ProfileScreen;
