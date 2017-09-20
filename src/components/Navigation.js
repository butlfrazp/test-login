import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import Login from './Login';
import Home from './Home';
import Message from './Message';

const Navigation = StackNavigator({
  Auth: {
    screen: Login
  },
  Home: {
    screen: Home
  },
  Message: {
    screen: Message
  }
});

export default Navigation;
