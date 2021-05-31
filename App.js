import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

// if IOS -> UIView
// if Android -> AndroidView
export default function App() {
  return (
      <View style={{ 
        backgroundColor: 'whitesmoke',
        flex: 1,
        flexDirection: "row", //horizontal
        justifyContent: "center", //main-axis
        alignItems: "center", //secondary-axis
        flexWrap: "wrap"
      }}
      >
        <View style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100
        }}
        />
          <View style={{
            backgroundColor: "gold",
            width: 100,
            height: 100
          }}
          />
          <View style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100
          }}
          />
          <View style={{
            backgroundColor: "grey",
            width: 100,
            height: 100
          }}
          />
          <View style={{
            backgroundColor: "greenyellow",
            width: 100,
            height: 100
          }}
          />
      </View>
  );
}