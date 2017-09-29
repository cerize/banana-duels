import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Waiting from './Waiting'

export default class Home extends React.Component {
  render() {
    return (
    <Image source={require('../images/home.jpg')} style={styles.backgroundImage}>
      <Text
        onPress={() => {this.props.goTo('waiting')}}
        style={styles.button}>
        
        Cancel
        
      </Text>
    </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null, // or 'stretch'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
  button: {
    position: 'absolute',
    bottom:0,
    left:0,
    backgroundColor: 'blue',
    height: 100,
    width: 200,
    textAlign: 'center',
    zIndex: 10,
  }
});