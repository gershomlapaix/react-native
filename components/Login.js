import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.formContent}>
          <View style={styles.welcome}>
            <View style={styles.appName}>
              <Text style={styles.appNameText1}>Supa</Text>
              <Text style={styles.appNameText2}>Menu</Text>
            </View>
            <Text style={{marginVertical:10, marginBottom:15}}>Welcome ...</Text>
            <Text>Please fill in the information</Text>
          </View>

          <View style={{ position: 'relative' }}>
            <TextInput placeholder="Your email" style={styles.formInput} />
            <Ionicons
              name="mail-outline"
              size={24}
              color="black"
              style={{ position: 'absolute', top: 15, left: 20 }}
            />
          </View>

          <View style={{ position: 'relative' }}>
            <TextInput placeholder="password" style={styles.formInput} />
            <Feather
              name="lock"
              size={24}
              color="black"
              style={{ position: 'absolute', top: 15, left: 20 }}
            />
          </View>

          <View style={styles.actions}>
            <Pressable style={styles.btn}>
              <Text style={styles.btnText}>Sign in</Text>
            </Pressable>
          </View>

          <View style={styles.actions}>
            <Text style={{ marginVertical: 10, fontWeight: '700' }}>OR</Text>

            <Pressable style={styles.loginWith}>
              <Ionicons
                name="logo-google"
                size={24}
                color="black"
                style={{ position: 'absolute', top: 15, left: 20 }}
              />
              <Text style={styles.loginWith}>Login with google</Text>
            </Pressable>

            <Pressable style={styles.loginWith}>
              <Ionicons
                name="logo-facebook"
                size={24}
                color="blue"
                style={{ position: 'absolute', top: 15, left: 20 }}
              />
              <Text style={styles.loginWith}>Login with google</Text>
            </Pressable>

            <Pressable>
              <Text style={styles.forgotBtnText}>Forgot password?</Text>
            </Pressable>

            <View style={styles.actionsRegister}>
              <Text>Don't have an account? </Text>

              <Pressable>
                <Text style={styles.registerBtnText}>Register</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7941D',
    height: '100%',
    width: '100%',
  },

  welcome: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'space-around',
    flexDirection: 'column',
    height: '25%',
  },

  appName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    fontWeight: 400,
  },

  appNameText1: {
    fontSize: '55',
  },

  appNameText2: {
    fontSize: '55',
    color: '#F7941D',
  },

  form: {
    marginTop: 100,
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopEndRadius: 50,
    height: '100%',
  },
  formContent: {
    paddingHorizontal: 20,
  },

  btn: {
    backgroundColor: '#F7941D',
    paddingHorizontal: '37%',
    paddingVertical: 20,
    marginVertical: 20,
    borderRadius: 10,
  },

  btnText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },

  formInput: {
    borderWidth: 1.5,
    borderColor: '#cccccc',
    padding: 15,
    paddingLeft: 60,
    borderRadius: 10,
    marginBottom: 20,
  },

  actions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  actionsRegister: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  registerBtnText: {
    color: '#F7941D',
    fontWeight: '700',
  },

  forgotBtnText: {
    color: '#F7941D',
    fontWeight: '700',
    marginVertical:6
  },

  loginWith: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#f0efed',
    paddingHorizontal: 55,
    paddingVertical: 6,
    marginVertical: 5,
    borderRadius: 6,
  },
});

export default Login;
