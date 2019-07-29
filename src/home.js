import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Image
} from 'react-native';

import Generator from './generator';
import ListItem from './listItem';

import LogoTitle from './logo';
import hamLogo from './images/hamlogo.png';

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home Screen',
    // to apply an image logo instead of a title:
    headerTitle: LogoTitle,
    // these logos cannot be just some string or image, they must be a component or JSX:
    headerLeft: (
      <Button title={"B"}/>
    ),
    headerRight: (
      // <Button onPress={() => this.props.navigation.navigate('Users')}>
        <Image
          source={hamLogo}
          style={{ width: 30, height: 30 }}
        />
      // </Button>
    ),
    // headerBackTitle: "Replaced the arrow!" // not on android?
    // headerTitleStyle: {
    //   flex: 1,
    //   textAlign: 'center',
    //   alignItems: 'center'
    // }
  };

  state = {
    random: [20, 837]
  };

  onAddRandom = () => {
    const random = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, random]
      };
    });
  };

  deleteItem = (position) => {
    // alert(index);
    const newArray = this.state.random.filter((item, index) => {
      return position != index
    })
    this.setState({
      random: newArray
    })
  }

  render() {
    return (
      <View>
        <SafeAreaView>
          <Text>I am the Home Screen</Text>

          <Generator add={this.onAddRandom} />
          <ListItem
            items={this.state.random}
            delete={this.deleteItem}
          />

          <Button 
            title="Go to users"
            // onPress={() => this.props.navigation.navigate('Users')}
            onPress={
              () => this.props.navigation.navigate('Users',{
                userId: 12,
                userName: 'Betty',
                userLastName: 'Cooper'
              })
            }
          />
          <Text>{this.props.navigation.getParam('message','N/A')}</Text>
        </SafeAreaView>
      </View>
    );
  }
};


export default HomeScreen;
