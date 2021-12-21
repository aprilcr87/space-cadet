import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Space Cadet!</Text>
      <ImageBackground source={require('./assets/history-in-hd-unsplash.jpg')} resizeMode="cover" style={styles.image}>
        
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    position: 'absolute',
    zIndex: 1,
    top: 50
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: '100%',
    width: '100%'
  }
});
