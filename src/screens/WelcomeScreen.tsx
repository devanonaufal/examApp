import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Welcome: undefined;
  MainTab: { screen?: string } | undefined; // ← Tambahkan MainTab!
  Exam: undefined;
  Result: { answers: (number | null)[] };
  History?: undefined;
  Profile?: undefined;
  About?: undefined;
};

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.appTitle}>examApp</Text>
      <Text style={styles.subtitle}>Aplikasi Ujian Online Sekolah</Text>
      <TouchableOpacity
        style={styles.startBtn}
        onPress={() => navigation.replace('MainTab', { screen: 'Home' })}
      >
        <Text style={styles.startBtnText}>Mulai</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f8fc', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 120, height: 120, marginBottom: 32 },
  appTitle: { fontSize: 28, fontFamily: 'AlbertSans-Bold', color: '#0984e3', marginBottom: 6 },
  subtitle: { fontSize: 16, fontFamily: 'AlbertSans-Regular', color: '#636e72', marginBottom: 28 },
  startBtn: {
    backgroundColor: '#00b894',
    paddingHorizontal: 32,
    paddingVertical: 14,
    borderRadius: 20,
    elevation: 2,
    marginTop: 12
  },
  startBtnText: { color: '#fff', fontSize: 18, fontWeight: 'bold', fontFamily: 'AlbertSans-Bold' }
});

export default WelcomeScreen;
