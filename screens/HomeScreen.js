import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar, Image, StyleSheet } from 'react-native';
import { Container, Content, Text, Header, Button, Icon, View } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <Container>
        {/* add image sample */}
        <Image source={require('../assets/images/knzcc.jpg')} style={{ width: null, height: 160 }} resizeMode={'contain'} />

        <Button bordered danger style={styles.myButton}
          onPress={ () => alert('Hello Word') }
          >
          <Text>Alert</Text>
          <Icon name='logo-apple'></Icon>
        </Button>

        {/* Sample Navigation: Go to user list page */}
        <Button bordered style={styles.myButton}
          onPress={ () => this.props.navigation.navigate('Users') }
          >
          <Text>User List</Text>
          <Icon name='person'></Icon>
        </Button>

        {/* Sample FullScreen Modal */}
        <Button
          onPress={ () => this.props.navigation.navigate('MyModal') }
          style={styles.myButton} warning>
          <Text>FullScreen Modal</Text>
          <Icon name='paw'></Icon>
        </Button>

        {/* Ssample TabBased navigation */}
        <Button
          onPress={ () => this.props.navigation.navigate('MyTabs') }
          style={styles.myButton} success borderd>
          <Text>TabBased</Text>
        </Button>
      </Container>
    );
  }
}


/*
 * fullscreen modal
 */
export class ModalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
        >
          <Text>Dismiss</Text>
        </Button>
      </View>
    )
  }
}

/*
 * Sample CSS
 */
const styles = StyleSheet.create({

  myButton: {
    margin: 10
  }

});
