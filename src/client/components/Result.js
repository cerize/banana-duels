import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default class Result extends React.Component {
  render() {
    if (this.props.result === 'winner') {
      return (
        <Image source={require('../images/winner.jpg')} style={styles.backgroundImage}>
          <Text
            onPress={() => {this.props.goTo('home')}}
            style={styles.button}>
            Exit
          </Text>
        </Image>
      )
    } else {
      return (
        <Image source={require('../images/loser.jpg')} style={styles.backgroundImage}>
          <Text
            onPress={() => {this.props.goTo('home')}}
            style={styles.button}>
            Exit
          </Text>
        </Image>
      )
    }
  }
}

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null, // or 'stretch'
  },
  button: {
    position: 'absolute',
    bottom:0,
    left:0,
    backgroundColor: 'blue',
    height: 100,
    width: 200,
    textAlign: 'center',
  }
});
