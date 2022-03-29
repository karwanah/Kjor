
import React from 'react';
import { StyleSheet, Text, View, Image, Linking} from 'react-native';
import { Button } from 'react-native-ios-kit';
import {enableScreens} from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import AnimatedLogo from 'react-native-logo-animation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screen Imports (export functions)
import {MainScreen} from './screens/MainScreen';
import {RegisterScreen} from './screens/RegisterScreen';
// STYLE VARIABLE

const styles = require('./styles/styles')

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator   screenOptions={{headerShown: false}}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
