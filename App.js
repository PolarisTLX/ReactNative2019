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
    screen: HomeScreen,
    // can also come here to apply style to just the home screen navbar:
    // navigationOptions: ({ navigation }) => ({
    //   title: `Home`,
    // }),
  },
  Users: {
    screen: UserScreen
  }
},{
  initialRouteName: 'Home',
  // to apply uniform header style to all screens:
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e'
    },
    headerTintColor:'blue',
    headerTitleStyle: {
      flex: 1,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'white'
    }
  },
  // mode: 'modal',  //does not work on android
  onTransitionStart:() => { 
    alert("This is a Navigation 'onTransitionStart' function") 
  }

})

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
  },
});

export default createAppContainer(AppNavigator);
