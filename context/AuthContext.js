import * as React from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { Text, View, StyleSheet } from 'react-native';

const AuthContext = React.createContext();

function AuthContextProvider(props) {
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

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        console.log(data)
        const response = await axios.post(
          'http://196.223.240.154:8099/supapp/api/auth/signin',
          {
            login: data.username,
            password: data.password,
          }
        );
        console.log(response)
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      getState: () => state
    }),
    [state]
  );

  return (
    <AuthContext.Provider value={authContext}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
