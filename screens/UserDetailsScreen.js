import React, { Component } from 'react';
import { Image } from 'react-native'
import { View, List, ListItem, Thumbnail, Text, Button, Content } from 'native-base';

export default class UserDetailsScreen extends React.Component {

  static navigationOptions = {
    title: 'User Details'
  }

  render() {

    {
      /*
        get passed parameter from userscreen.js
        ex. const name = navigation.getParam('name', 'default content here');

        if parameter is object
        navigation.getParam('name','').first
      */
    }

    const { navigation } = this.props;
    const fullName = navigation.getParam('name','').first + ' ' + navigation.getParam('name', '').last;

    return (
      <Content>

        <View style={{ flex: 1, alignItems: 'center', marginTop: 30 }}>
          <Image
            style={{ width: 300, height: 300, borderRadius: 300/2 }}
            source={{ uri: navigation.getParam('picture','').large }}
          />
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 20,
              textTransform: 'uppercase'
            }}
            >
            {fullName}
          </Text>
        </View>

        <List>
          <ListItem>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Email</Text>
            <Text style={{ flex: 2 }}>{navigation.getParam('email','')}</Text>
          </ListItem>
          <ListItem>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Age</Text>
            <Text style={{ flex: 2 }}>{navigation.getParam('dob','').age}</Text>
          </ListItem>
          <ListItem>
            <Text style={{ flex: 1, fontWeight: 'bold' }}>Cellphone</Text>
            <Text style={{ flex: 2 }}>{navigation.getParam('cell','')}</Text>
          </ListItem>
        </List>

      </Content>
    );
  }
}
