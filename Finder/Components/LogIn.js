import React, {Component} from 'react';
import {Text, View, TextInput} from 'react-native';
export default class LogIn extends Component {
  render () {
    return (
      <View style={{margin: 90}}>

        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          placeholder="username........"
        />

      </View>
    );
  }
}
