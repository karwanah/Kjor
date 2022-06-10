// Car Selection Page

// Home
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  SafeAreaView,
} from 'react-native';
import { Button } from 'react-native-ios-kit';
import { NavigationContainer } from '@react-navigation/native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

export function CarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        mapPadding={{ top: 0, right: 20, left: 0, bottom: 150}}
        provider="google"
        customMapStyle={customStyle}
        rotateEnabled='false'
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.map}
        initialRegion={{
          latitude: 59.911491,
          longitude: 10.757933,
          latitudeDelta: 0.15,
          longitudeDelta: 0.15,
        }}>
        <MapView.Marker
          coordinate={{ latitude: 59.911491, longitude: 10.757933 }}
          title={'Mercedes S-Klasse 2019'}
          description={'Automatic, 360 Camera, Luxury'}>
          <Image
            source={require('../assets/img/carlogo.png')}
            style={{ height: 40, width: 40 }}
          />
        </MapView.Marker>
        <MapView.Marker
          coordinate={{ latitude: 59.931491, longitude: 10.789933 }}
          title={'Mercedes S-Klasse 2019'}
          description={'Automatic, 360 Camera, Luxury'}>
          <Image
            source={require('../assets/img/carlogo.png')}
            style={{ height: 40, width: 40 }}
          />
        </MapView.Marker>
        <MapView.Marker
          coordinate={{ latitude: 59.92081, longitude: 10.727933 }}
          title={'Mercedes S-Klasse 2019'}
          description={'Automatic, 360 Camera, Luxury'}>
          <Image
            source={require('../assets/img/carlogo.png')}
            style={{ height: 40, width: 40 }}
          />
        </MapView.Marker>
      </MapView>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-evenly',
          alignItems: 'center',
          alignContent: 'center',
          flexDirection: 'row',
          marginTop: 600,
          zIndex:0,
        }}>
        <Button
          style={styles.button}
          inline
          rounded
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.text}>Logg inn</Text>
        </Button>
        <Button
          style={styles.button1}
          inline
          rounded
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.text}>Registrer</Text>
        </Button>
      </View>
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    //the container will fill the whole screen.
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
  button: {
    alignItems: 'center',
    top: 0,
    justifyContent: 'center',
    borderColor: 0,
    borderRadius: 10,
    elevation: 4,
    width: 160,
    height: 70,
    backgroundColor: '#4464AD',
    bottom: 50,
  },
  button1: {
    alignItems: 'center',
    top: 0,
    justifyContent: 'center',
    borderColor: 0,
    borderRadius: 10,
    elevation: 4,
    width: 160,
    height: 70,
    backgroundColor: '#000',
    bottom: 50,
  },
  text: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    color: 'white',
  },
});


const customStyle = 
[
   {
        "featureType": "water",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b5cbe4"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#efefef"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#83a5b0"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#bdcdd3"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e3eed3"
            }
        ]
    },
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "road"
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {},
    {
        "featureType": "road",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    }
]