import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

type ProfileScreenProps = {
  navigation: any;
};

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/avatar/default_avatar.png')}
        style={styles.avatar}
      />
      <Text style={styles.name}>Nama Peserta</Text>
      <Text style={styles.info}>Kelas: 9A</Text>
      <Text style={styles.info}>NIS: 123456789</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.replace('MainTab', { screen: 'Home' })}
      >
        <Text style={styles.btnText}>Kembali ke Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 18, backgroundColor: '#dfe6e9' },
  name: { fontSize: 22, fontFamily: 'AlbertSans-Bold', color: '#222f3e', marginBottom: 6 },
  info: { fontSize: 15, color: '#636e72', fontFamily: 'AlbertSans-Regular', marginBottom: 4 },
  btn: { backgroundColor: '#0984e3', padding: 14, borderRadius: 14, marginTop: 26 },
  btnText: { color: '#fff', fontFamily: 'AlbertSans-Bold', fontSize: 16 }
});

export default ProfileScreen;
