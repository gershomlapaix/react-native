import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './components/Auth/Register';
import LoginScreen from './components/Auth/Login';
import RestaurantsList from './components/Pages/RestaurantsList';
import HomeScreen from './components/Pages/Home';
import BottomNavScreen from './components/Pages/BottomNav';
import { AuthContextProvider } from './components/context/AuthContext';
import AppRoutes from './AppRoutes';

const AuthContext = React.createContext();

// splash screen
function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

export default function () {
  return (
    <AuthContextProvider>
      <AppRoutes />
    </AuthContextProvider>
  );
}
