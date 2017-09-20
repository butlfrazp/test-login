import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/components/Navigation';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCV-ilh0mNxJ0XB4CCCgzUd8FV6u_p3r1o",
    authDomain: "mobiledevs-chat.firebaseapp.com",
    databaseURL: "https://mobiledevs-chat.firebaseio.com",
    projectId: "mobiledevs-chat",
    storageBucket: "mobiledevs-chat.appspot.com",
    messagingSenderId: "5529976121"
  };
  firebase.initializeApp(config);

export default class App extends React.Component {
  render() {
    return (
      <Navigation />
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
});
