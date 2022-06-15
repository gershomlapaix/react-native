import * as React from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const Login = ()=>{
  return(
    <>
    <View style = {styles.container}>
      <View style={styles.form}>
       <View style={styles.formContent}>
        <View style={styles.appName}>
          <Text style={styles.appNameText1}>Supa</Text>
          <Text style={styles.appNameText2}>Menu</Text>
        </View>
       <Text>Welcome ...</Text>
       <Text>Please fill in the information</Text>

       <TextInput placeholder="Full name" style={styles.formInput}/>
       <TextInput placeholder="Phone number" style={styles.formInput}/>
       <TextInput placeholder="Your email" style={styles.formInput}/>

       </View>
      </View>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F7941D',
    height:'100%',
    width:'100%'
  },

  appName:{
    display:"flex",
    flexDirection:'row',
  },

  appNameText1:{
    fontSize:'55'
  },

  appNameText2:{
    fontSize:'55',
    color:'#F7941D'
  },

  form:{
    marginTop:120,
    backgroundColor:"#fff",
    width:"100%",
    borderTopLeftRadius:50,
    borderTopEndRadius:50,
    height:"100%"
  },
  formContent:{
    marginTop:50,
    paddingHorizontal:20
  },

  formInput:{
    borderWidth:2,
    padding:25,
    borderRadius:25,
    marginBottom:20
  }
})

export default Login;