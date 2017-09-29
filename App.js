import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';
import Home from './src/client/components/Home.js';
import Waiting from './src/client/components/Waiting.js'
import Duel from './src/client/components/Duel.js'



import Login from './src/client/components/Login.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'loggedOff'
    }

    // Creating the socket-client instance will automatically connect to the server.
    this.socket = io('http://192.168.0.23:3000', {reconnect: true});
    this.socket.on('connect', function() {
    })
    this.socket.on('duel', function() {
      this.setState({view: 'duel'})
    })
  }

  _goTo = (view) => {
    console.log('ccccc', view);
    this.setState({view})
  }

  componentDidMount() {
    setInterval(() => { 
      this.socket.emit('test', {data: 'foo'})
    }, 1000)
  }

  _getComponentToRender = () => {
    switch(this.state.view) {
      case 'loggedOff':
        return (
          <Home goTo={this._goTo}/>
        );
        break;
      case 'waiting':
        return (
          <Waiting goTo={this._goTo}/>
        );
        break;
      case 'duel':
        return (
          <Duel goTo={this._goTo}/>
        );
        break;
      default:
         return(
           <Text>Defaulttttttt</Text>
         )
  }
  }

  render() {
    return (
      this._getComponentToRender()
    );
  }
}


