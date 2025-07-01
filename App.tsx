import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import DeviceCheckScreen from './src/screens/DeviceCheckScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import ExamScreen from './src/screens/ExamScreen';
import ResultScreen from './src/screens/ResultScreen';
import SoalListScreen from './src/screens/SoalListScreen';
import DetailSoalScreen from './src/screens/DetailSoalScreen';
import MainTab from './src/navigation/MainTab';
import ProfileScreen from './src/screens/ProfileScreen';

export type RootStackParamList = {
  Splash: undefined;
  DeviceCheck: undefined;
  Welcome: undefined;
  MainTab: { screen?: string } | undefined;
  SoalList: { ujianId: number };
  DetailSoal: { soalIndex: number; ujianId: number };
  Exam: undefined;
  Result: { answers: (number | null)[] };
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DeviceCheck" component={DeviceCheckScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainTab" component={MainTab} options={{ headerShown: false }} />
        <Stack.Screen name="SoalList" component={SoalListScreen} options={{ headerShown: true, title: 'Daftar Soal' }} />
        <Stack.Screen name="DetailSoal" component={DetailSoalScreen} options={{ headerShown: true, title: 'Detail Soal' }} />
        <Stack.Screen name="Exam" component={ExamScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: true, title: 'Profil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
