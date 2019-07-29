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

import Generator from './generator';
import ListItem from './listItem';

class HomeScreen extends Component {

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
