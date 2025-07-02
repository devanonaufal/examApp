import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const LoginScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'siswa' && password === '123456') {
      navigation.replace('Welcome');
    } else {
      Alert.alert('Login Gagal', 'Username atau password salah!');
    }
  };

  return (
    <View style={styles.container}>
      {/* LOGO */}
      <Image
        source={require('../assets/images/logo/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login examApp</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        autoCapitalize="none"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>
      <Text style={styles.info}>Username: <Text style={{ fontWeight: 'bold' }}>siswa</Text></Text>
      <Text style={styles.info}>Password: <Text style={{ fontWeight: 'bold' }}>123456</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 24 },
  logo: { width: 88, height: 88, marginBottom: 16 },
  title: { fontSize: 24, color: '#0984e3', fontWeight: 'bold', marginBottom: 28 },
  input: { width: '100%', borderColor: '#b2bec3', borderWidth: 1, borderRadius: 10, padding: 12, marginBottom: 16 },
  button: { backgroundColor: '#0984e3', padding: 15, borderRadius: 14, width: '100%', alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  info: { color: '#636e72', fontSize: 13, marginTop: 12 }
});

export default LoginScreen;
