import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator, Alert, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import RNFS from 'react-native-fs';

// Cek root manual Android (tanpa library npm root check)
async function isRootedAndroid() {
  if (Platform.OS !== 'android') return false;
  const rootPaths = [
    '/system/app/Superuser.apk',
    '/system/xbin/su',
    '/system/bin/su',
    '/system/sd/xbin/su',
    '/system/bin/failsafe/su',
    '/data/local/xbin/su',
    '/data/local/bin/su',
    '/data/local/su',
  ];
  for (const path of rootPaths) {
    try {
      const exists = await RNFS.exists(path);
      if (exists) return true;
    } catch (e) {}
  }
  return false;
}

const APP_LATEST_VERSION = '1.0';

type ChecklistItem = { label: string; ok: boolean; errMsg?: string };

const DeviceCheckScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    { label: `Versi aplikasi terbaru (v${APP_LATEST_VERSION})`, ok: false },
    { label: 'Device tidak di root / modifikasi', ok: false },
    { label: 'Penyimpanan Kosong >= 2GB', ok: false }
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        // 1. Cek versi aplikasi
        const appVersion = DeviceInfo.getVersion();
        const isLatest = appVersion === APP_LATEST_VERSION;

        // 2. Root check Android (manual), iOS selalu false
        let rooted = false;
        if (Platform.OS === 'android') {
          rooted = await isRootedAndroid();
        }

        // 3. Cek free space
        const fsInfo = await RNFS.getFSInfo();
        const freeGB = fsInfo.freeSpace / (1024 * 1024 * 1024);
        const isSpaceOk = freeGB >= 2;

        setChecklist([
          {
            label: `Versi aplikasi terbaru (v${APP_LATEST_VERSION})`,
            ok: isLatest,
            errMsg: isLatest ? '' : `Versi aplikasi kamu: v${appVersion}`
          },
          {
            label: 'Device tidak di root / modifikasi',
            ok: !rooted,
            errMsg: rooted ? 'Device kamu terdeteksi root/modifikasi (Android)' : ''
          },
          {
            label: 'Penyimpanan Kosong >= 2GB',
            ok: isSpaceOk,
            errMsg: isSpaceOk ? '' : `Sisa penyimpanan: ${freeGB.toFixed(2)} GB`
          }
        ]);
      } catch (err) {
        Alert.alert('Gagal cek device', 'Pastikan izin sudah diberikan dan coba lagi.');
      }
      setLoading(false);
    })();
  }, []);

  const semuaOk = checklist.every(c => c.ok);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/device_check.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.card}>
        <Text style={styles.title}>Memeriksa{'\n'}Perangkat ...</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#6D90EF" style={{ marginVertical: 28 }} />
        ) : (
          <View style={{ marginVertical: 20, width: '100%' }}>
            {checklist.map((item, i) => (
              <View key={i} style={styles.row}>
                <Text style={{ fontSize: 24, marginRight: 10 }}>
                  {item.ok ? '✅' : '❌'}
                </Text>
                <View>
                  <Text style={[styles.checkLabel, !item.ok && { color: '#d63031' }]}>{item.label}</Text>
                  {!item.ok && item.errMsg ? (
                    <Text style={styles.errMsg}>{item.errMsg}</Text>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
        )}
        <TouchableOpacity
          style={[styles.button, { opacity: semuaOk ? 1 : 0.5 }]}
          disabled={!semuaOk}
          onPress={() => navigation.replace('Login')}
        >
          <Text style={styles.buttonText}>Lanjutkan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#6D90EF', alignItems: 'center' },
  image: { width: '80%', height: 270, marginTop: 28, alignSelf: 'center' },
  card: { width: '100%', backgroundColor: '#fff', marginTop: -25, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 28, alignItems: 'center', flex: 1 },
  title: { fontSize: 28, color: '#222f3e', fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  row: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 18 },
  checkLabel: { fontSize: 17, color: '#222f3e', fontFamily: 'AlbertSans-Bold' },
  errMsg: { fontSize: 13, color: '#d63031', marginLeft: 2, marginTop: 2, fontFamily: 'AlbertSans-Regular' },
  button: { backgroundColor: '#6D90EF', paddingHorizontal: 38, paddingVertical: 16, borderRadius: 14, marginTop: 28, alignItems: 'center', width: '100%' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 }
});

export default DeviceCheckScreen;