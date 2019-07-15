import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Generator = (props) => {
  return (
    <TouchableOpacity
      style={styles.generateStyle}
      onPress={() => props.add()}
    >
      <View>
        <Text style={styles.genTextStyle}>Click To Add A New Number</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  generateStyle: {
    backgroundColor: '#00bcd4',
    padding: 10,
    width: '100%',
    alignItems:'center',
  },
  genTextStyle: {
    fontSize: 24,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Generator;
