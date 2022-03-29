// Home
import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, SafeAreaView} from 'react-native';
import { Button } from 'react-native-ios-kit';
import { NavigationContainer } from '@react-navigation/native';

const styles = require('../styles/styles')

export function RegisterScreen({navigation}) {

  return(
    <View style={{backgroundColor:"#272D2D", flex: 1, justifyContent: "space-evenly", alignItems: "center"}}>
      <SafeAreaView>
      <TextInput 
      style={styles.input}
      placeholder="Fullt Navn"
      />
      <TextInput
        style={styles.input}
        placeholder="epost"
        keyboardType="numeric"
      />
    </SafeAreaView>
    <Button 
style={styles.button} inline rounded 
onPress={() => navigation.navigate('Register')}>

<Text style={styles.text}>Register</Text>
</Button>
    </View>
  );
}