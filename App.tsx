import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import DeviceCheckScreen from './src/screens/DeviceCheckScreen'; // Tambah
import WelcomeScreen from './src/screens/WelcomeScreen';
import ExamScreen from './src/screens/ExamScreen';
import ResultScreen from './src/screens/ResultScreen';
import MainTab from './src/navigation/MainTab';

export type RootStackParamList = {
  Splash: undefined;
  DeviceCheck: undefined;  // Tambah
  Welcome: undefined;
  MainTab: { screen?: string } | undefined;
  Exam: undefined;
  Result: { answers: (number | null)[] };
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
        <Stack.Screen name="Exam" component={ExamScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
