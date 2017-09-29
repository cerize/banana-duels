import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import SocketIOClient from 'socket.io-client';


import Login from './src/client/components/Login.js';

export default class App extends React.Component {
  constructor(props){
    super(props);

    // Creating the socket-client instance will automatically connect to the server.
    this.socket = io('http://192.168.0.23:5000', {reconnect: true});
    this.socket.on('connect', function() {
    })
  }

  render() {
    return (
      <Home />
    );
  }
}


