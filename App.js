import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from './components/Header';

import SpaceNavigator from './navigation/SpaceNavigator';

export default function App() {
  return (
    <View style={styles.container}>
        {/* <Header /> */}
        <StatusBar style="auto" />
        <SpaceNavigator />
      
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
