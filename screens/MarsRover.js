import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MarsRover = () => {
    return(
        <View style={styles.screen}>
            <Text style={styles.text}>Events</Text>
        </View>
    );
};

MarsRover.navigationOptions = {
    headerTitle: 'Mars Rover photos'
};

const styles = StyleSheet.create({});

export default MarsRover;