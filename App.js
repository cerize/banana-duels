import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import io from 'socket.io-client';
import Home from './src/client/components/Home.js';
import Waiting from './src/client/components/Waiting.js'
import Duel from './src/client/components/Duel.js'
import Result from './src/client/components/Result.js'


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      view: 'loser'
      // view: 'home'
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

  _splat = () => {
    this.socket.emit('splat', {data: 'foo'})
  }

  componentDidMount() {
    setInterval(() => { 
      this.socket.emit('test', {data: 'foo'})
    }, 1000)
  }

  _getComponentToRender = () => {
    switch(this.state.view) {
      case 'home':
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
          <Duel splat={this._splat}/>
        );
        break;
      case 'winner':
        return (
          <Result result="winner" goTo={this._goTo}/>
        );
        break;
      case 'loser':
        return (
          <Result result="loser" goTo={this._goTo}/>
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


