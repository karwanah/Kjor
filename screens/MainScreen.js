// Home
import React from 'react';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
import { Button } from 'react-native-ios-kit';
import { NavigationContainer } from '@react-navigation/native';

const styles = require('../styles/styles')

export function MainScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={{width:100, resizeMode:'contain', bottom:0}} source={require('../assets/img/logo.png')} />
  <Text style={styles.kjor} >Book, Åpne, Kjør</Text>
    <Button style={styles.button} inline rounded
    onPress={() => navigation.navigate('Login')}
    >
  <Text style={styles.text}>
    Kom i gang
    </Text>
</Button>
    </View>
  );
}
