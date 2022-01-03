import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const MarsRover = () => {
    return(
        <View style={styles.screen}>
            <Text style={styles.text}>Events</Text>
        </View>
    );
};

MarsRover.navigationOptions = {
    headerTitle: 'Mars Rover photos',
    headerStyle: {
      backgroundColor: Colors.gold
    }
};

const styles = StyleSheet.create({});

export default MarsRover;