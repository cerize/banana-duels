import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    // let pic = require('./images/home.png')
    return (
      <View style={styles.container}>
      <Image source={require('./images/home.png')} style={{width: '100%'}}/>
      <Text style={styles.text}>Welcome to Banana Duels!!!</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  }
});
