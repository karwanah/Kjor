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
import { Mong9po } from '../backend/connection';
import { PROVIDER_GOOGLE, PROVIDER_DEFAULT } from 'react-native-maps';

export function CarScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        mapPadding={{ top: 0, right: 10, left: 0, bottom: 150 }}
        provider="google"
        customMapStyle={customStyle}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.map}
        initialRegion={{
          latitude: 59.911491,
          longitude: 10.757933,
          latitudeDelta: 0.2,
          longitudeDelta: 0.2,
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
          zIndex: 2,
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
    zIndex: 1,
  },
  button: {
    alignItems: 'center',
    top: 0,
    justifyContent: 'center',
    borderColor: 0,
    borderRadius: 20,
    elevation: 4,
    width: 140,
    height: 65,
    backgroundColor: '#000',
    bottom: 25,
  },
  button1: {
    alignItems: 'center',
    top: 0,
    justifyContent: 'center',
    borderColor: 0,
    borderRadius: 15,
    elevation: 4,
    width: 140,
    height: 65,
    backgroundColor: '#4464AD',
    bottom: 25,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '300',
    color: 'white',
  },
});


 const customStyle = [
    {
      elementType: 'geometry',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ffb606',
        },
      ],
    },
    {
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#242f3e',
        },
      ],
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ffb606',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [
        {
          color: '#263c3f',
        },
      ],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#00ff00',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        {
          color: '#38414e',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#212a37',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#9ca5b3',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [
        {
          color: '#746855',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#1f2835',
        },
      ],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#f3d19c',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [
        {
          color: '#2f3948',
        },
      ],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#d59563',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#515c6d',
        },
      ],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#17263c',
        },
      ],
    },
  ];

