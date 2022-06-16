import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function RestaurantsList({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <View style={styles.header}>
          <Pressable style={{ width: '10%', marginLeft: 10 }}>
            <AntDesign name="leftcircleo" size={24} color="black" />
          </Pressable>
          <TextInput placeholder="Search..." />
        </View>

        <View
          style={{
            borderBottomColor: '#cccccc',
            borderWidth: 0.8,
            marginTop: 20,
          }}></View>

        <View style={styles.mainContent}>
          <Text style={{ fontWeight: '600', fontSize: 20, color: '#F7941D' }}>
            Nearby Restaurant
          </Text>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: '#cccccc',
              padding: 15,
              borderRadius: 10,
            }}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginRight: 16,
                borderRadius: 15,
              }}
              source={{
                uri: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
            />
            <View>
              <Text
                style={{ fontWeight: '600', fontSize: 18, marginBottom: 8 }}>
                Choose Kigali
              </Text>
              <Text
                style={{ fontWeight: '600', fontSize: 16, color: '#808080' }}>
                World, Africa, Pizzeria, Coffee
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: '#cccccc',
              padding: 15,
              borderRadius: 10,
            }}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginRight: 16,
                borderRadius: 15,
              }}
              source={{
                uri: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
            />
            <View>
              <Text
                style={{ fontWeight: '600', fontSize: 18, marginBottom: 8 }}>
                Choose Kigali
              </Text>
              <Text
                style={{ fontWeight: '600', fontSize: 16, color: '#808080' }}>
                World, Africa, Pizzeria, Coffee
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: '#cccccc',
              padding: 15,
              borderRadius: 10,
            }}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginRight: 16,
                borderRadius: 15,
              }}
              source={{
                uri: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
            />
            <View>
              <Text
                style={{ fontWeight: '600', fontSize: 18, marginBottom: 8 }}>
                Choose Kigali
              </Text>
              <Text
                style={{ fontWeight: '600', fontSize: 16, color: '#808080' }}>
                World, Africa, Pizzeria, Coffee
              </Text>
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              backgroundColor: '#cccccc',
              padding: 15,
              borderRadius: 10,
            }}>
            <Image
              style={{
                width: 80,
                height: 80,
                marginRight: 16,
                borderRadius: 15,
              }}
              source={{
                uri: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
              }}
            />
            <View>
              <Text
                style={{ fontWeight: '600', fontSize: 18, marginBottom: 8 }}>
                Choose Kigali
              </Text>
              <Text
                style={{ fontWeight: '600', fontSize: 16, color: '#808080' }}>
                World, Africa, Pizzeria, Coffee
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },

  containerContent: {
    marginTop: 60,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'space-evenly',
  },

  mainContent: {
    marginTop: 15,
    marginHorizontal: 20,
  },
});
