import React, { useState, useEffect, useCallback } from "react";
import { Button, View, ScrollView, StyleSheet } from "react-native";
import { Card, Divider, Text, ListItem } from "react-native-elements";
import DateTimePicker from "@react-native-community/datetimepicker";
import _ from 'lodash';
import Colors from "../constants/Colors";
import { buildNeoUrl } from "../service";

const Asteroids = () => {
  const [asteroidsList, setAsteroidsList] = useState({});
  const [date, setDate] = useState(new Date(Date.now()));
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [show, setShow] = useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    let formattedStartDate = formatDate(currentDate);
    let calculatedEndDate = subtractDays(currentDate, 7);
    setStartDate(formattedStartDate);
    setEndDate(calculatedEndDate.toISOString().substring(0, 10));
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const fetchNeo = useCallback(() => {
    console.log(startDate, endDate);
    async function fetchNeoByDate() {
      let neoUrl = buildNeoUrl(startDate, endDate);
      let response = await fetch(neoUrl, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setAsteroidsList(response.near_earth_objects);
    }
    fetchNeoByDate();
  }, [startDate, endDate]);

  function formatDate(date) {
    return (date.getFullYear() + '-' + date.getMonth() + 1) + '-' + date.getDate();
  }

  function subtractDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() - days);
    return result;
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <View style={styles.buttonContainer}>
            <Text style={styles.text}>Search based on closet approach to Earth</Text>
          <Text style={styles.subText}>
            Choose a start{" "}
            <Button onPress={showDatepicker} title="Date" color="#122620" /> and
            we'll show you Neos for that week (7 days after start date)
          </Text>
          <Button
            onPress={fetchNeo}
            color="#B68D40"
            title="Launch"
          />
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
      </View>
      
        <View style={styles.list}>
          <Text style={styles.text}>Close approach dates</Text>
        {startDate !== '' && asteroidsList ? (_.map(asteroidsList, function(value, key) {
          return(<ListItem.Accordion
            key={key}
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title>{key}</ListItem.Title>
                </ListItem.Content>
              </>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
          <ScrollView>
            {value.map((v) => (
              <ListItem key={v.id} bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>Name: {v.name}</ListItem.Title>
                  <Text>Is hazardous: {v.is_potentially_hazardous_asteroid == true ? 'true' : 'false'}</Text>
                  <Card.Divider />
                  <ListItem.Subtitle>Relative Velocity</ListItem.Subtitle>
                  <Text>Kilometers per hour: {v.close_approach_data[0].relative_velocity.kilometers_per_hour}</Text>
                  <Text>Miles per hour: {v.close_approach_data[0].relative_velocity.miles_per_hour}</Text>
                  <Card.Divider />
                  <ListItem.Subtitle>Miss Distance</ListItem.Subtitle>
                  <Text>Kilometers: {v.close_approach_data[0].miss_distance.kilometers}</Text>
                  <Text>Miles: {v.close_approach_data[0].miss_distance.miles}</Text>
                  <Card.Divider />
                </ListItem.Content>
              </ListItem>
            ))}
          </ScrollView>
        </ListItem.Accordion>);
        })) : <Text>No asteroids for these dates</Text>}
        </View>
    </View>
  );
};

Asteroids.navigationOptions = {
  headerTitle: "Near Earth Object Web service",
  headerStyle: {
    backgroundColor: Colors.gold
  }
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 5,
    alignItems: "center",
  },
  inputContainer: {
      alignItems: 'center'
  },
  text: {
    fontSize: 20,
    textAlign: 'center'
  },
  subText: {
      fontSize: 15
  },
  buttonContainer: {
    width: '80%'
  },
  list: {
    width: '90%',
    marginTop: 15,
    borderTopWidth: 1,
    borderColor: 'grey',
  }
});

export default Asteroids;
