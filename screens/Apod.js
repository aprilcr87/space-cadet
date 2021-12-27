import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';

const Apod = () => {


    return(
        <View style={styles.screen}>
            <Text style={styles.text}>Apod</Text>
            {/* <Card>
            <Card.Title>HELLO WORLD</Card.Title>
            <Card.Divider />
            <Card.Image
              style={{ padding: 0 }}
              source={{
                uri:
                  'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
              }}
            />
            <Text style={{ marginBottom: 10 }}>
              The idea with React Native Elements is more about component
              structure than actual design.
            </Text>
          </Card> */}
        </View>
    );
}

Apod.navigationOptions = {
    headerTitle: 'Astronomy picture of the day'
};

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