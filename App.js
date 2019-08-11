import React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';
import AppNavigator from './navigation/AppNavigator.js';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
