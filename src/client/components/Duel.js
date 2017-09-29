import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default class Result extends React.Component {
  render() {
    return (
        <Image source={require('../images/duel.jpg')} style={styles.backgroundImage}>
            <Text
                onPress={() => {this.props.splat()}}
                style={styles.button}>
                
                Splat
            
            </Text>
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
