import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './src/components/Auth/Register';
import LoginScreen from './src/components/Auth/Login';
import RestaurantsList from './src/components/Pages/RestaurantsList';
import HomeScreen from './src/components/Pages/Home';
import BottomNavScreen from './src/components/Pages/BottomNav';
import AssetExample from './src/components/AssetExample';

const AuthContext = React.createContext();

// splash screen
function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };

    case 'SIGN_IN':
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };

    case 'SIGN_OUT':
      return {
        ...prevState,
        isSignout: true,
        userToken: action.token,
      };
  }
};

export default function App() {
  const [state, dispatch] = React.useReducer(
    reducer,
    { isLoading: true, isSignout: true, userToken: null } // initial state
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await SecureStore.getItemAsync('user-token');
      } catch (err) {
        console.log(err);
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(() => ({
    signin: async (data) => {
      dispatch({ type: 'SIGN_IN', token: 'dummy-token' });
    },
    signOut: () => dispatch({ type: 'SIGN_OUT' }),
    signUp: async (data) => {
      dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
    },
  }));

  return (
    <AuthContext.Provider value={authContext}>
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
    </AuthContext.Provider>
  );
}
