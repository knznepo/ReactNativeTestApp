import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { Container, Text, Header } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

/*
 * Components
 */
import ListScreen from './components/GetList.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <ListScreen />
      </Container>
    );
  }
}
