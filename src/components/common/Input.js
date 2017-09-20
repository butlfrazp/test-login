import React from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions
} from 'react-native';

const INPUT_WIDTH = Dimensions.get('window').width * 0.8

const Input = (props) => {
  const {
    input
  } = styles
  return (
    <View>
      <Text>{props.title ? props.title : 'Title'}</Text>
      <TextInput
        style={input}
        onChangeText={props.onChangeText}
        value={props.value}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  )
}

const styles = {
  input: {
    height: 40,
    width: INPUT_WIDTH,
    borderColor: '#4a4a4a',
    borderWidth: 1,
    borderRadius: 10
  }
}

export { Input };
