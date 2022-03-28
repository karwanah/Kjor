
import React from 'react';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
import { Button } from 'react-native-ios-kit';
import Register from './screens/Register';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';


export default function App() {
  return (
    <View style={styles.container}>
  <Text style={styles.maintext}>Kjør vekk med en av 100+ biler i Oslo </Text>
      <Image style={{width:100, resizeMode:'contain', bottom:200}} source={require('./assets/img/logo.png')} />
  <Text style={styles.kjor} >Book, Åpne, Kjør</Text>
    <Button style={styles.button} inline rounded
    onPress={() => navigation.navigate('Register')}
    >
  <Text style={styles.text}>
    Kom i gang
    </Text>
</Button>
    </View>
    
  );
}

// STYLE VARIABLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#272D2D',
    alignItems: 'center',
    justifyContent: "space-evenly",
  },
  maintext: {
    bottom: -150, 
    fontSize:28, 
    width:300,
    textAlign:"center", 
    fontWeight:'normal',
    color:"#fff",
  },
  kjor:{
    bottom: 50, 
    fontSize:38, 
    textAlign:"center", 
    fontWeight:'600',
    color:"#0FFF95",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderColor:0,
    borderRadius: 40,
    elevation: 4,
    width: 270,
    height: 85,
    backgroundColor: '#001A23',
    bottom:25,  
  },
  text: {
    textAlign:'center',
    fontSize:22,
    fontWeight: 'bold',
    color: 'white',
  },
  
});
