import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    StyleSheet
} from 'react-native';

export default class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: ''
        }
    }

    handleChange = (e) => {
        this.setState({ username: e.target.value });
    }

    render() {
        const { setUsername } = this.props.setUsername;
        return (
            <ScrollView style={{padding: 30}}>
                <Text 
                    style={{fontSize: 27}}>
                    Login
                </Text>
                <TextInput onChangeText={(text) => this.setState({username: text}) } placeholder='Username' />
                <View style={{margin:7}} />
                <Button 
                        onPress={() => setUsername(this.state.username)}
                        title="Submit"
                    />
                </ScrollView>
            )
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