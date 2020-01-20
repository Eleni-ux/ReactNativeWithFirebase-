import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

export default class Home extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#6d7fd9',
      color: 'white',
    },
  };
  render() {
    return (
      <View style={{marginTop: 130, marginLeft: 50, marginRight: 50}}>
        <Button
          style={{padding: 90}}
          title="Sign Up"
          onPress={() => this.props.navigation.navigate('SignIn')}
        />
        <Button
          style={{marginTop: 90}}
          title="Log In"
          color="green"
          onPress={() => this.props.navigation.navigate('List')}
        />
      </View>
    );
  }
}
