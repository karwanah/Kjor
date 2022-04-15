import React from 'react';
import { StyleSheet, Text, View, Image, Linking } from 'react-native';
import { Button } from 'react-native-ios-kit';
import { enableScreens } from 'react-native-screens';
import { NavigationContainer } from '@react-navigation/native';
import AnimatedLogo from 'react-native-logo-animation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Screen Imports (export functions)
import { MainScreen } from './screens/MainScreen';
import { RegisterScreen } from './screens/RegisterScreen';
import { CarScreen } from './screens/CarScreen';
import { LoginScreen } from './screens/LoginScreen';
import { initializeApp } from 'firebase/app';

// STYLE VARIABLE

const styles = require('./styles/styles');

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Maps" component={CarScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
