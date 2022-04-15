
// Home
import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, SafeAreaView, DatePickerIOS} from 'react-native';
import { Button } from 'react-native-ios-kit';
import { NavigationContainer } from '@react-navigation/native';
import Login from 'react-native-login';


const styles = require('../styles/styles')
export function LoginScreen({navigation}) {

  return(
    <View style={{backgroundColor:"#4361EE", flex: 1, justifyContent: "space-evenly", alignItems: "center", alignContent:"center"}}>
      <SafeAreaView style={{alignItems:"center"}}>
       <Image style={{width:100, resizeMode:'contain', bottom:0}} 
       source={require('../assets/img/logo.png')} 
      />
      
      <TextInput
        style={styles.input}
      placeholder="E-post"
      />
         <TextInput 
      style={styles.input}
      placeholder="Passord"
      
      />

    </SafeAreaView>
 <SafeAreaView style={{bottom:50}}> 
         <Button style={styles.loginbutton} inline rounded
onPress={() => navigation.navigate('Maps')}>

<Text style={styles.logintext}>Login</Text>
</Button>
 <Button
onPress={() => navigation.navigate('Register')}>

<Text style={styles.registertext}>Register</Text>

</Button>

 </SafeAreaView>

    </View>
  );
}