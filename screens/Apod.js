import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { apod } from '../data/mockData';

const Apod = () => {

    return(
        <View style={styles.screen}>
            {apod ? <Card>
              <Card.Title>{apod.title}</Card.Title>
              <Text>{apod.date}</Text>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0, height: 200, resizeMode: 'contain' }}
                source={{ uri: apod.url }}
              />
              <Text style={{ marginBottom: 10 }}>
                {apod.explanation}
              </Text>
              <Text>{apod.copyright}</Text>
          </Card> : ''}
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