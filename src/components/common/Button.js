import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const BUTTON_WIDTH = Dimensions.get('window').window * 0.8;

const Button = (props) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.container}
    >
      <Text>Create</Text>
    </TouchableOpacity>
  )
}

const styles = {
  container: {
    height: 40,
    width: BUTTON_WIDTH,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export { Button };
