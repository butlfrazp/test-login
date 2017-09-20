import React, {Component} from 'react';
import {
  View,
  Text
} from 'react-native';
import {
  Input,
  Button
} from './common';
import * as firebase from 'firebase';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onButtonDidTapped = ({ email, password }) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(error => {
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(error => alert(error))
      .then(user => {
        this.setState({ email: '', password: ''});
        this.props.navigation.navigate('Home');
      })
    })
    .then(user => {
      this.setState({ email: '', password: ''});
      this.props.navigation.navigate('Home');
    });
  }

  render() {
    const {
      container
    } = styles;
    return (
      <View style={container}>
        <Text>Login</Text>
        <Input
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <Input
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          secureTextEntry
        />
        <Button
          onPress={this.onButtonDidTapped.bind(this, this.state)}
        />
      </View>
    )
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8'
  }
}

export default Login;
