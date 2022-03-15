import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Touchable } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={{width:128, resizeMode:'contain', bottom:250}} source={require('./assets/img/logo.png')} />
      <Text style={styles.maintext}>Velkommen!{'\n'} Kjør vekk med en av 100+ biler i Oslo </Text>
      <StatusBar style="auto"/>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53A2BE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {
    color:'#fff',
    bottom: 350, 
    fontSize:32, 
    textAlign:"center", 
    fontWeight:'500',
  }
});
