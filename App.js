import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
window.navigator.userAgent = "react-native";
// import websocketClient from './websocket_client';
import SocketIOClient from 'socket.io-client/socket.io;


export default class App extends React.Component {
  constructor(props) {
    super(props);
  
    // Creating the socket-client instance will automatically connect to the server.
    this.socket = SocketIOClient('http://localhost:5000', {jsonp: false});
  }

  componentDidMount() {
    this.socket.emit('channel-name', 'Hello world!');
  }

  render() {
    // let pic = require('./images/home.png')
    return (
      <View style={styles.container}>
      <Image source={require('./src/client/images/home.png')} style={{width: '100%'}}/>
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
