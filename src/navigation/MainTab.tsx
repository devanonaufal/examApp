import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import HistoryScreen from '../screens/HistoryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AboutScreen from '../screens/AboutScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

export type MainTabParamList = {
  Home: undefined;
  History: undefined;
  Profile: undefined;
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
          if (route.name === 'History') iconName = 'time-outline';
          if (route.name === 'Profile') iconName = 'person-outline';
          if (route.name === 'About') iconName = 'information-circle-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="History" component={HistoryScreen} options={{ tabBarLabel: 'Riwayat' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ tabBarLabel: 'Profil' }} />
      <Tab.Screen name="About" component={AboutScreen} options={{ tabBarLabel: 'Tentang' }} />
    </Tab.Navigator>
  );
};

export default MainTab;