import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const Home = () => {
    return(
        <View style={styles.screen}>
            <Text style={styles.title}>Hello</Text>
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button title="Apod" onPress={() => {}} />
                    <Button title="NeoWs" onPress={() => {}} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        color: '#B68D40'
    },
    container: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    }
});

export default Home;