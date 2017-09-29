import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default class Result extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../images/duel.jpg')} style={styles.image}>
            <Text
                onPress={() => {this.props.splat()}}
                style={styles.paragraph}>
                
                SHOOT!
            
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
    bottom: 100,
    height: 100,
    width: 200,
    lineHeight: 100,
    backgroundColor: '#f30a4b',
    fontSize: 30,
    borderColor: 'white',
    borderWidth: 2,
    color: 'white',
    fontWeight: 'bold'
  },
});