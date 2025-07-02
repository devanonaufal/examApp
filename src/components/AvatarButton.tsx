import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../App'; 

const AvatarButton: React.FC = () => {
  // Gunakan StackNavigationProp supaya typesafe!
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      style={styles.avatarContainer}
      onPress={() => navigation.navigate('Profile')}
      activeOpacity={0.8}
    >
      <Image
        source={require('../assets/images/avatar/default_avatar.png')}
        style={styles.avatar}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    position: 'absolute',
    top: 32,
    right: 18,
    zIndex: 99,
    backgroundColor: '#fff',
    borderRadius: 50,
    elevation: 4,
    padding: 2,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#dfe6e9'
  },
});

export default AvatarButton;
