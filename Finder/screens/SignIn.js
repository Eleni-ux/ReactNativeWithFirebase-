import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';

import {db} from './Config';

let addItem = item => {
  db.ref('/items').push({
    name: item,
  });
};

export default class SignIn extends Component {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  handleSubmit = () => {
    if (
      this.state.first_name != '' &&
      this.state.email != '' &&
      this.state.last_name != '' &&
      this.state.padssword != ''
    ) {
      addItem(this.state.first_name);
      addItem(this.state.last_name);
      addItem(this.state.email);
      addItem(this.state.password);
      Alert.alert('Signed In successfully');
    } else if (
      this.state.first_name == '' &&
      this.state.last_name == '' &&
      this.state.email == '' &&
      this.state.padssword == ''
    ) {
      Alert.alert('Please fill out all the fields');
    } else if (this.state.first_name == '') {
      Alert.alert('Please Enter your First Name');
    } else if (this.state.last_name == '') {
      Alert.alert('Please Enter your Last Name');
    } else if (this.state.email == '') {
      Alert.alert('Please Enter your email');
    } else if (this.state.password == '') {
      Alert.alert('Please Enter your Password');
    }
  };

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          placeholder="first name"
          style={styles.itemInput}
          onChangeText={text => this.setState({first_name: text})}
        />
        <TextInput
          placeholder="Last name"
          style={styles.itemInput}
          onChangeText={text => this.setState({last_name: text})}
        />
        <TextInput
          placeholder="email"
          style={styles.itemInput}
          onChangeText={text => this.setState({email: text})}
        />
        <TextInput
          placeholder="password"
          style={styles.itemInput}
          onChangeText={text => this.setState({password: text})}
        />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#CCCCCC',
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center',
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});
