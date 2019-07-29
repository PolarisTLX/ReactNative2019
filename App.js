import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/home';
import UserScreen from './src/users';


class App extends Component {

  render() {
    return (
      <View style={styles.mainView}>
        <SafeAreaView>

        </SafeAreaView>
      </View>
    );
  }
};

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Users: {
    screen: UserScreen
  }
},{
  initialRouteName: 'Home'
})

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
  },
});

export default createAppContainer(AppNavigator);
