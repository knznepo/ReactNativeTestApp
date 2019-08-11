import * as React from 'react';
import { View, StylesSheet } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Button, Text, Title, Label } from 'native-base';

import HomeScreen from '../screens/HomeScreen.js';
import UsersScreen from '../screens/UsersScreen.js';
import UserDetailsScreen from '../screens/UserDetailsScreen.js';

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Users: {
    screen: UsersScreen
  },
  UserDetails: {
    screen: UserDetailsScreen
  }
});

export default createAppContainer(MainStack);
