import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default class Result extends React.Component {
  render() {
    if (this.props.result === 'winner') {
      return (
        <View style={styles.container}>
          <Image source={require('../images/winner.jpg')} style={styles.image}>
            <Text
              onPress={() => {this.props.goTo('home')}}
              style={styles.paragraph}>
              EXIT
            </Text>
          </Image>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Image source={require('../images/loser.jpg')} style={styles.image}>
            <Text
              onPress={() => {this.props.goTo('home')}}
              style={styles.paragraph}>
              EXIT
            </Text>
          </Image>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  image: {
    flexGrow:1,
    height:null,
    width:null,
    alignItems: 'center',
    justifyContent:'center',
    resizeMode: 'stretch' 
  },
  paragraph: {
    textAlign: 'center',
    position: 'absolute',
    bottom: 150,
    height: 50,
    width: 150,
    lineHeight:50,
    backgroundColor: 'transparent',
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white'
  },
});
