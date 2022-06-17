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
import BottomNavScreen from './components/pages/BottomNav';
import AssetExample from './components/AssetExample';
import AuthContext from './components/context/AuthContext';

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
  const { getState } = React.useContext(AuthContext);
  const state = getState();
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {
        //   state.isLoading ? (
        //   <Stack.Screen name="Splash" component={SplashScreen} />
        // ) : 
        
        state.userToken == null ? (
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: 'Sign in',
              // When logging out, a pop animation feels intuitive
              animationTypeForReplace: state.isSignout ? 'pop' : 'push',
            }}
          />
        ) : (
          <Stack.Screen name="Bnav" component={BottomNavScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
