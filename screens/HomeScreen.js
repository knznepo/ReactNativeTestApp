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

      </Container>
    );
  }
}

{/* Sample CSS */}
const styles = StyleSheet.create({

  myButton: {
    margin: 10
  }

});
