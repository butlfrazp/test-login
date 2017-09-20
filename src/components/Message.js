import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { Input } from './common';
import * as firebase from 'firebase';

export default class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      user: firebase.auth().currentUser.uid
    }
  }

  onTextSubmit = ({message}) => {
    firebase.database().ref(this.state.user).push().set({
      message
    })
    .then(() => {
      this.setState({ message: '' });
      this.props.navigation.goBack();
    })
    .catch(error => {
      alert(error);
    })
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Input
          title="Message"
          value={this.state.message}
          onChangeText={message => this.setState({message})}
        />
        <TouchableOpacity onPress={this.onTextSubmit.bind(this, this.state)}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
