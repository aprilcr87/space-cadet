import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Card, Divider, Text } from "react-native-elements";
import { apodUrl } from "../service";
import Colors from '../constants/Colors';

const Apod = () => {
  const [apodInfo, setApodInfo] = useState({});

  useEffect(() => {
    async function fetchApod() {
      let response = await fetch(apodUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setApodInfo(response);
    }

    fetchApod();
  }, []);

  return (
    <View style={styles.screen}>
      {apodInfo ? (
        <Card containerStyle={styles.card}>
          <Card.Title>{apodInfo.title}</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0, height: 200, resizeMode: "contain", marginBottom: 25 }}
            source={{ uri: apodInfo.url }}
          />
          <Text style={{ marginBottom: 10 }}>{apodInfo.explanation}</Text>
          <View style={styles.vertical}>
            <Text>{apodInfo.copyright}</Text>
            <Divider orientation="vertical" />
            <Text>{apodInfo.date}</Text>
          </View>
        </Card>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

Apod.navigationOptions = {
  headerTitle: "Astronomy picture of the day",
  headerStyle: {
    backgroundColor: Colors.gold
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    backgroundColor: 'black'
  },
  card: {
    backgroundColor: '#F4EBD0'
  },
  text: {
    color: "red",
  },
  vertical: {
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});

export default Apod;
