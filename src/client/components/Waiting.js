import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default class Result extends React.Component {
  render() {
    return (
        <Image source={require('../images/waiting.jpg')} style={styles.backgroundImage}>
            <Button title='cancel' style={styles.button}>Cancel</Button>
        </Image>
    );
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
