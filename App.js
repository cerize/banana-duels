import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import SocketIOClient from 'socket.io-client';


import Login from './src/client/components/Login.js';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      test: ''
      username: '',
      login: false
    };
    // Creating the socket-client instance will automatically connect to the server.
    this.socket = io('http://localhost:5000', {jsonp: false});
    this.socket.on('connect', function() {
        this.setState({ test: 'connected' });
    })
    // this.socket.on('message', (message) => {
    //   // React will automatically rerender the component when a new message is added.
    //   this.setState({ messages: { hello: 'world' } });
    // });
  }

  setUsername = (username) => {
    this.setState({
      username: username,
      login: true
    })
  }

  render() {
    // let pic = require('./images/home.png')
      {/*<View style={styles.container}>
      <Image source={require('./src/client/images/home.png')} style={{width: '100%'}}/>
      <Text style={styles.text}>Welcome to Banana Duels!!!</Text>

      </View>*/}
    return (
      <View>
        { (!this.state.login) ? <Login setUsername={this.setUsername} /> : <Text style={styles.text}> {this.state.username} </Text>}
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
