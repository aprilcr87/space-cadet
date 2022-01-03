import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text } from 'react-native-elements';
import { apodUrl } from '../service';

const Apod = () => {
    const [apodInfo, setApodInfo] = useState({});

    useEffect(() => {
        async function fetchApod() {
            let response = await fetch(apodUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  }
            });
            response = await response.json();
            setApodInfo(response);
          }
      
          fetchApod();
      }, []);

    return(
        <View style={styles.screen}>
            {apodInfo ? <Card>
              <Card.Title>{apodInfo.title}</Card.Title>
              <Text>{apodInfo.date}</Text>
              <Card.Divider />
              <Card.Image
                style={{ padding: 0, height: 200, resizeMode: 'contain' }}
                source={{ uri: apodInfo.url }}
              />
              <Text style={{ marginBottom: 10 }}>
                {apodInfo.explanation}
              </Text>
              <Text>{apodInfo.copyright}</Text>
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