import * as React from 'react';
import { View, StylesSheet } from 'react-native';
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Button, Text, Title, Label } from 'native-base';

import HomeScreen, { ModalScreen } from '../screens/HomeScreen.js';
import UsersScreen from '../screens/UsersScreen.js';
import UserDetailsScreen from '../screens/UserDetailsScreen.js';
import MyTabsScreen from '../screens/MyTabsScreen.js';

const MainStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Users: {
    screen: UsersScreen
  },
  UserDetails: {
    screen: UserDetailsScreen
  },
  MyTabs: {
    screen: MyTabsScreen
  }
},
  {
    initialRouteName: 'Home',
    /* add style on header */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#6b52ae',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    },
  }
);


const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack
    },
    MyModal: {
      screen: ModalScreen
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
)
export default createAppContainer(RootStack);
