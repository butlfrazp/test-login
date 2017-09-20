import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ListView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import * as firebase from 'firebase';
import { ImagePicker } from 'expo';
import _ from 'lodash';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: firebase.auth().currentUser.uid,
      messages: null
    }
  }

  componentWillMount() {
    if (this.state.images) {
      this.createDataSource(this.state)
    }
    firebase.database().ref(this.state.user).on('value', snapshot => {
      const newMessages = _.map(snapshot.val(), (val, uid) => {
        return { ...val, uid};
      });
      this.setState({ messages: newMessages })
    });
  }


  renderListView = () => {
    if (this.state.messages) {
      return this.state.messages.map(element => {
        return (<Text key={element.uid}>{element.message}</Text>)
      })
    }else{
      return <Text>No messages for {this.state.user}</Text>
    }
  }

  render() {
    const {
      container,
      footer
    } = styles;
    return (
      <View style={container}>
        {this.renderListView()}
        <View style={footer}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Message')}>
            <Text style={{color: 'white'}}>Create Message</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'cornsilk',
  },
  footer: {
    position: 'absolute',
    height: 80,
    width: SCREEN_WIDTH,
    bottom: 0,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default Home;
