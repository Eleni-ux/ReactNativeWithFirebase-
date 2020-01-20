import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Home from './screens/Home';

import SignIn from './screens/SignIn';
import List from './screens/List';

export default class App extends Component {
  render() {
    console.disableYellowBox = true;
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    SignIn: {screen: SignIn},
    List: {screen: List},
  },
  {
    initialRouteName: 'Home',
  },
);
const AppContainer = createAppContainer(AppNavigator);
