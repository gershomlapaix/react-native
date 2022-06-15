import * as React from 'react'
import { Text, View, StyleSheet, TextInput, Button, Pressable } from 'react-native';

const Login = ()=>{
  return(
    <>
    <View style = {styles.container}>
      <View style={styles.form}>
       <View style={styles.formContent}>
        <View style={styles.welcome}>
         <View style={styles.appName}>
          <Text style={styles.appNameText1}>Supa</Text>
          <Text style={styles.appNameText2}>Menu</Text>
        </View>
       <Text>Welcome ...</Text>
       <Text>Please fill in the information</Text>

        </View>
       <TextInput placeholder="Full name" style={styles.formInput}/>
       <TextInput placeholder="Phone number" style={styles.formInput}/>
       <TextInput placeholder="Your email" style={styles.formInput}/>

        <View style={styles.actions}>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Proceed</Text>
            </Pressable>

          <Text>OR</Text>
          <Text>If you have a PMG account</Text>

         <Pressable style={styles.btn}>
            <Text>Sign in</Text>
            </Pressable>

            <View style={styles.actionsRegister}>
            <Text>Don't have an account? </Text>

            <Pressable style={styles.btn}>
            <Text>Register</Text>
            </Pressable>
            </View>
        </View>
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

  welcome:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    alignContent:'space-around',
    flexDirection:'column',
    height:'25%'
  },

  appName:{
    display:"flex",
    flexDirection:'row',
    justifyContent:'center',
    fontWeight:400
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

  btn:{
    backgroundColor:"#F7941D",
    paddingHorizontal:"37%",
    paddingVertical:20,
    marginVertical:20,
    borderRadius:10
  },

  btnText:{
    color:"white",
    fontSize:20,
    fontWeight:"700"
  },

  formInput:{
    borderWidth:2,
    padding:15,
    borderRadius:10,
    marginBottom:20
  },

  actions:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  },

  actionsRegister:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  }
})

export default Login;