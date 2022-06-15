import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator()

export default function Home() {
  return (
   <View style={styles.container}>
   <Text style={{fontWeight:"bold", fontSize:30, textAlign:'center'}}>Supa menu</Text>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
