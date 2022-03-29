// Car Selection Page

// Home
import React from 'react';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
import { Button } from 'react-native-ios-kit';
import { NavigationContainer } from '@react-navigation/native';
import MapView from 'react-native-maps';


export function CarScreen({navigation}) {
  return (
    <View style={styles.container}>
    {/*Render our MapView*/}
      <MapView
        style={styles.map}
        //specify our coordinates.
        initialRegion={{
          latitude: 59.911491,
          longitude: 10.757933,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
        }}
      />
     <Button style={styles.button} inline rounded
    onPress={() => navigation.navigate('Login')}
    >
  <Text style={styles.text}>
    Gå Tilbake
    </Text> 
</Button>
    
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: "space-around",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
    button: {
    alignItems: 'center',
    top:300,
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
