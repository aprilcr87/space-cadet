import React from "react";
import { View, StyleSheet, Text, Button, ImageBackground } from "react-native";
import Colors from '../constants/Colors';

const Home = (props) => {
  return (
    <ImageBackground
      source={require("../assets/history-in-hd-unsplash.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <View style={styles.screen}>
        <View style={styles.container}>
          <View style={styles.buttonCard}>
            <Text style={styles.buttonCardText}>Astronomy Picture of the Day</Text>
            <Button
              title="Apod"
              color="#B68D40"
              onPress={() => {
                props.navigation.navigate({ routeName: "Apod" });
              }}
            />
          </View>
          <View style={styles.buttonCard}>
            <Text style={styles.buttonCardText}>Asteroids</Text>
            <Button
              title="NeoWs"
              color="#B68D40"
              onPress={() => {
                props.navigation.navigate({ routeName: "Asteroids" });
              }}
            />
          </View>
          <View style={styles.buttonCard}>
            <Text style={styles.buttonCardText}>
              Mars Rover Photos
            </Text>
            <Button
              title="Rover"
              color="#B68D40"
              onPress={() => {
                props.navigation.navigate({ routeName: "Rover" });
              }}
            />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

Home.navigationOptions = {
  headerTitle: 'Welcome to Space Cadet',
  headerStyle: {
    backgroundColor: Colors.gold
  }
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    width: "100%",
  },
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 30,
    marginVertical: 10,
    color: "#B68D40",
  },
  container: {
    width: 250,
    height: 600,
    maxWidth: "80%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonCard: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: "rgba(20, 15, 15, .77)",
    elevation: 5,
  },
  buttonCardText: {
    fontSize: 23,
    color: 'white',
    fontWeight: 'bold',    
    fontStyle: 'italic',
    textAlign: 'center',
    paddingBottom: 10
  }
});

export default Home;
