import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

class UserScreen extends Component {

  static navigationOptions = {
    title:'Users',
    // below made generix to all headers on App.js:
    // headerStyle: {
    //   backgroundColor: '#f4511e'
    // },
    // headerTintColor:'blue',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    //   color: 'white'
    // }
  }
  
  render() {

    console.log(this.props);
    // console.warn(this.props);  // cool alternative that appears right on the bottom of the Emulator

    const userId = this.props.navigation.getParam('userId');
    // if the info doesn't get passsed properly, or there is some kind of error with the data you are expecting:
    // then add a default value like so:
    // const userId = this.props.navigation.getParam('userId', 'N/A');
    const userName = this.props.navigation.getParam('userName');
    const userLastName = this.props.navigation.getParam('userLastName');

    return (
      <View>
        <SafeAreaView>
          <Text>I am the Users Screen</Text>
          <Text>User ID: {userId}</Text>
          <Text>User First Name: {userName}</Text>
          <Text>User Last Name: {userLastName}</Text>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home', {
                message: 'Hello sent back from Users screen'
              })
            }
          />
          <Button
            title="Go Back"
            onPress={() => this.props.navigation.goBack()}
          />
        </SafeAreaView>
      </View>
    );
  }
};


export default UserScreen;
