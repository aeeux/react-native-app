import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';

// if IOS -> UIView
// if Android -> AndroidView
export default function App() {
  return (
    <ViewImageScreen />
  );
}