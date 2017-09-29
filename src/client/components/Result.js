import React from 'react';
import { Image, StyleSheet, Text, View, Button } from 'react-native';

export default class Result extends React.Component {

  render() {
    if (this.props.result === 'winner') {
      return (
        <View style={styles.container}>
          <Image source={require('../images/winner.jpg')} style={styles.image}>
            <View style={styles.row}>
              <Text
                onPress={() => {this.props.goTo('waiting')}}
                style={styles.paragraph}>
                AGAIN
              </Text>
              <Text
                onPress={() => {this.props.goTo('home')}}
                style={styles.paragraph2}>
                EXIT
              </Text>
            </View>
          </Image>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Image source={require('../images/loser.jpg')} style={styles.image}>
            <View style={styles.row}>
              <Text
                onPress={() => {this.props.goTo('waiting')}}
                style={styles.paragraph}>
                AGAIN
              </Text>
              <Text
                onPress={() => {this.props.goTo('home')}}
                style={styles.paragraph2}>
                EXIT
              </Text>
            </View>
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
  row: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  paragraph: {
    textAlign: 'center',
    height: 50,
    width: 130,
    lineHeight:50,
    marginTop: 570,
    backgroundColor: 'transparent',
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white'
  },
  paragraph2: {
    textAlign: 'center',
    height: 50,
    width: 130,
    lineHeight:50,
    marginTop: 570,
    marginLeft: 20,
    backgroundColor: 'transparent',
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    color: 'white'
  },
});
