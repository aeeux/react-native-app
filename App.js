import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions, StyleSheet, SafeAreaView, Statusbar, Platform, View } from 'react-native';


// if IOS -> UIView
// if Android -> AndroidView
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ 
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: '30%',
        }}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "center",
    alignItems: "center",
  },
});
