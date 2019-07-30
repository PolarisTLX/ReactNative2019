import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './src/home';
import UserScreen from './src/users';

import LogoTitle from './src/logo';

class App extends Component {

  render() {
    return (
      <View style={styles.mainView}>
        <SafeAreaView>
          <Text></Text>
        </SafeAreaView>
      </View>
    );
  }
};

// check the curly braces all match!!!
const AppNavigator = createBottomTabNavigator({
  // Home: HomeScreen,
  // Users:UserScreen,
  // to expant on a screen specifically:
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => ({
      //.....
    })
  },
  Users:UserScreen,
}, {
  initialRouteName:'Home',
  order: ['Users', 'Home'],
  tabBarOptions:{
    activeTintColor:'red',
    activeBackgroundColor:'blue',
    inactiveTintColor: 'yellow',
    inactiveBackgroundColor: 'grey',
    // showLabel: false  //hides the text on that nav-button
    style: {
      // backgroundColor: 'green'
    },
    labelStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom: 10      
    }
  },
    defaultNavigationOptions: ({navigation})=>({

      //not working:      
      tabBarIcon:({focused,horizontal,tintColor})=>{
        return <Image 
                  source={LogoTitle} 
                  style={{width:30, height:30}}
                />

        // // also there is way to make a different icon in each navbutton
        // if(routeName === 'Users'){
        //   //return some image
        // } else {
        //   //return some other image
        // }
      },


    // how to capture info on where the User is going and perform actions based on that:
    tabBarOnPress:({navigation, defaultHandler})=>{
      alert(navigation)

      // this can be used to overide behavior of bottomnavbar:
      if(navigation.state.key === 'Users'){
        // if they clicked on 'Users', allow them to go to 'Users', 
        // or perform other things in between:

        // perhaps check if they are authenticated.  
        // if they are not, can re-direct them to the login screen.

        //alert('Hello')

        navigation.navigate('Users')
      } else {
        defaultHandler();
      }
    }
  })
});

// const AppNavigator = createStackNavigator({
//   Home: {
//     screen: HomeScreen,
//     // can also come here to apply style to just the home screen navbar:
//     // navigationOptions: ({ navigation }) => ({
//     //   title: 'Home Screen',
//     //   to apply an image logo instead of a title:
//     //   headerTitle: LogoTitle
//     // }),
//   },
//   Users: {
//     screen: UserScreen
//   }
// },{
//   initialRouteName: 'Home',
//   // to apply uniform header style to all screens:
//   defaultNavigationOptions: {
//     headerStyle: {
//       backgroundColor: '#f4511e'
//     },
//     headerTintColor:'blue',
//     headerTitleStyle: {
//       flex: 1,
//       textAlign: 'center',
//       fontWeight: 'bold',
//       color: 'white'
//     },

//   },
//   // mode: 'modal',  //does not work on android
//   onTransitionStart:() => { 
//     alert("This is a Navigation 'onTransitionStart' function") 
//   }
// })

// const styles = StyleSheet.create({
//   mainView: {
//     flex: 1,
//     paddingTop: 50,
//     backgroundColor: 'white',
//   },
// });

export default createAppContainer(AppNavigator);
