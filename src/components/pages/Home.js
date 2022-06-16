import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from '../Auth/Register'
import LoginScreen from '../Auth/Login';
import RestaurantsList from './RestaurantsList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <View>
   <Text>supa menu</Text>
   </View>
  );
}
