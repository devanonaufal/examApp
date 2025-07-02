import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import JadwalScreen from '../screens/JadwalScreen';
import AboutScreen from '../screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type MainTabParamList = {
  Home: undefined;
  History: undefined;
  Jadwal: undefined;
  About: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const MainTab = ({ route }: { route?: any }) => {
  const initialTab = route?.params?.screen ?? 'Home';

  return (
    <Tab.Navigator
      initialRouteName={initialTab}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#0984e3',
        tabBarInactiveTintColor: '#b2bec3',
        tabBarLabelStyle: { fontFamily: 'AlbertSans-Bold', fontSize: 13 },
        tabBarStyle: { paddingVertical: 6, height: 60 },
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'History') iconName = 'time-outline';
          else if (route.name === 'Jadwal') iconName = 'calendar-outline';
          else if (route.name === 'About') iconName = 'information-circle-outline';
         
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarLabel: 'Riwayat' }} />
      <Tab.Screen name="Jadwal" component={JadwalScreen} options={{ tabBarLabel: 'Jadwal' }} />
      <Tab.Screen name="About" component={AboutScreen} options={{ tabBarLabel: 'About' }} />
    </Tab.Navigator>
  );
};

export default MainTab;
