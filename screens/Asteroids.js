import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Asteroids = () => {
    return(
        <View style={styles.screen}>
            <Text style={styles.text}>Asteroids</Text>
        </View>
    );
};

Asteroids.navigationOptions = {
    headerTitle: 'Near Earth Object Web service'
};

const styles = StyleSheet.create({});

export default Asteroids;