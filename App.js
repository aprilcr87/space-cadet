import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Header from './components/Header';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import SpaceNavigator from './navigation/SpaceNavigator';
import spaceReducer from './store/spaceReducer';

const rootReducer = combineReducers({
  spaceJunk: spaceReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <Provider store={store}> */}
          <SpaceNavigator />
        {/* </Provider> */}
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
