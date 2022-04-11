// Home
import React from 'react';
import { StyleSheet, Text, View, Image, Linking, TextInput, SafeAreaView, DatePickerIOS} from 'react-native';
import { Button } from 'react-native-ios-kit';
import { NavigationContainer } from '@react-navigation/native';

const styles = require('../styles/styles')

export function RegisterScreen({navigation}) {

  return(
    <View style={{backgroundColor:"#4361EE", flex: 1, justifyContent: "space-evenly", alignItems: "center"}}>
      <SafeAreaView>
      <TextInput 
      style={styles.input}
      placeholder="Fullt Navn"
      />
      <TextInput
        style={styles.input}
        placeholder="E-post"
      />
      <TextInput
        style={styles.input}
        placeholder="Verifiser E-post "
      />
       <TextInput
        style={styles.input}
        placeholder="Mobilnummer"
         keyboardType='numeric'
         maxLength={9}
      />
    </SafeAreaView>
    <Button 
style={styles.button} inline rounded 
onPress={() => navigation.navigate('Maps')}>

<Text style={styles.text}>Register</Text>
</Button>
    </View>
  );
}