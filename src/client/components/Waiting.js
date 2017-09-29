import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default class Result extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/waiting.jpg')} style={styles.image}>
          <Text
            onPress={() => {this.props.goTo('home')}}
            style={styles.paragraph}>
            
            CANCEL
            
          </Text>
        </Image>
      </View>
    );
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