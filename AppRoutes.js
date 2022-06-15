import * as React from 'react';
import axios from 'axios';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './components/Auth/Register';
import LoginScreen from './components/Auth/Login';
import RestaurantsList from './components/Pages/RestaurantsList';
import HomeScreen from './components/Pages/Home';
import BottomNavScreen from './components/Pages/BottomNav';
import AssetExample from './components/AssetExample';

// splash screen
function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Supa menu app' }}
          />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Bnav" component={BottomNavScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
