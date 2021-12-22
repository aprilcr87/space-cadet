import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {

    return(
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Space Cadet</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D6AD60'
  },
  headerTitle: {
    fontSize: 20
  }
  });

export default Header;