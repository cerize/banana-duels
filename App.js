import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';
import Home from './src/client/components/Home.js';


import Login from './src/client/components/Login.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      status: 'loggedOff'
    }

    // Creating the socket-client instance will automatically connect to the server.
    this.socket = io('http://192.168.0.23:3000', {reconnect: true});
    this.socket.on('connect', function() {
    })
  }

  componentDidMount() {
    setInterval(() => { 
      this.socket.emit('test', {data: 'foo'})
    }, 1000)
  }

  getComponentToRender() {
    
  }

  render() {
    return (
      <Home />
    );
  }
}


