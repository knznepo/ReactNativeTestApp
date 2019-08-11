import React, { Component } from 'react';
import { FlatList, Alert } from 'react-native';
import { View, List, Left, ListItem, Body, Thumbnail, H2, Text, Button } from 'native-base';

export default class UsersScreen extends React.Component {

  static navigationOptions = {
    title: 'Users'
  }

  constructor(props) {
    super(props);
    this.state = { isLoading: true }
  }

  // on component load
  componentDidMount() {
    {/* fetch json data */}
    return fetch('https://randomuser.me/api/?results=20')
      .then( (response) => response.json() )
      .then( (responseJson) => {

        {/* add fetched json to scope variable */}
        this.setState({
          isLoading: false, // remove loading state
          dataSource: responseJson.results
        }, function() {
          console.log('json loaded');
          console.log(responseJson.results)
        });
      })
      .catch((error) => {
        console.error(error);
      })
  }

  // display details function
  getDetails = (item) => {
    {/* pass item parameter to UserDetailsScreen.js */}
    this.props.navigation.navigate('UserDetails', item);
  }

  // sub render
  _renderListItem = (item) => {
    return(
      <ListItem
        avatar
        onPress={ () => this.getDetails(item) }
        >
        <Left>
          <Thumbnail source={{ uri: item.picture.large }} />
        </Left>

        <Body>
          <Text>{item.name.first} {item.name.last}</Text>
          <Text note>{item.location.street}, {item.location.country}</Text>
        </Body>
      </ListItem>
    );
  }

  render() {

    if ( this.state.isLoading ) {
      {/* show loading state */}
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <H2 style={{ textAlign: 'center' }}>Fetching data...</H2>
        </View>
      )
    }

    return (
      <View>
        <List
          dataArray={this.state.dataSource}
          renderRow={this._renderListItem}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
