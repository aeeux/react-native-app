import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

// if IOS -> UIView
// if Android -> AndroidView
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1}>Hello React Native!</Text>
      <Image source={{ 
        width: 200,
        height: 200,
        uri:"https://images.unsplash.com/photo-1530018352490-c6eef07fd7e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=661&q=80" }} />
      <StatusBar style="auto" />
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
