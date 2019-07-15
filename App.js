import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';


import Generator from './src/generator';
import ListItem from './src/listItem';


class App extends Component {

  state = {
    random: [20, 837]
  };

  onAddRandom = () => {
    const random = Math.floor(Math.random()*100)+1;
    this.setState(prevState => {
      return {
        random:[...prevState.random, random]
      };
    });
  };

  deleteItem = (position) => {
    // alert(index);
    const newArray = this.state.random.filter((item, index) => {
      return position != index
    })
    this.setState({
      random:newArray
    })
  }

  render() {
    return (
      <View style={styles.mainView}>
        <SafeAreaView>
          <Generator add={this.onAddRandom} />
          <ListItem 
            items={this.state.random}
            delete={this.deleteItem}
          />
        </SafeAreaView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'white',
  },
});

export default App;
