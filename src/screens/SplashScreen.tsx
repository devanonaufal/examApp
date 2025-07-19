import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';

type SplashScreenProps = {
  navigation: any;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('DeviceCheck'); // ← Sekarang ke DeviceCheckScreen!
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>examApp</Text>
      <ActivityIndicator size="large" color="#0984e3" style={{ marginTop: 30 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f8fc', alignItems: 'center', justifyContent: 'center' },
  logo: { width: 120, height: 120, marginBottom: 24 },
  title: { fontSize: 28, fontFamily: 'AlbertSans-Bold', color: '#0984e3', marginBottom: 10 },
});

export default SplashScreen;
