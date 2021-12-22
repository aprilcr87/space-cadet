import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from './components/Header';
import Home from './screens/Home';

const theme = {
  colors: {
    ten: '#B68D40',
    cream: '#F4EBD0',
    charcoal: '#122620',
    gold: '#D6AD60'
  }
};

export default function App() {
  return (
    <View style={styles.container}>
        <Header />
      <ImageBackground source={require('./assets/history-in-hd-unsplash.jpg')} resizeMode="cover" style={styles.image}>
        <StatusBar style="auto" />
        <Home />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: "center",
    height: '100%',
    width: '100%'
  }
});
