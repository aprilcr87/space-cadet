import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Header from '../components/Header';

const Apod = () => {
    return(
        <View style={styles.screen}>
            <Text style={styles.text}>Hello</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    text: {
        color: 'red'
    }
});

export default Apod;