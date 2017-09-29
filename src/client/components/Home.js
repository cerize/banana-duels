import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Waiting from './Waiting'

export default class Home extends React.Component {
  render() {
      {/*<View style={styles.container}>
        <Image source={require('../images/home.png')} style={{width: '100%'}}/>
        <Text style={styles.text}>Welcome to Banana Duels!!!</Text>
      </View>*/}
    return (
      <Waiting />
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