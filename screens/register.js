// Registration Page


import React from 'react';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
import { Button } from 'react-native-ios-kit';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/stack';

export default function App() {
    return (
      <View style={styles.container}>
    <Text style={styles.maintext}>Kjør vekk med en av 100+ biler i Oslo </Text>
    <Text style={styles.kjor} >Book, Åpne, Kjør</Text>
      <Button style={styles.button} inline rounded onPress={ ()=>{ Linking.openURL('Register')}}>
    <Text style={styles.text}>
      Kom i gang
      </Text>
  </Button>
      </View>
    );
  }