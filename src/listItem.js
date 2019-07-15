import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ListItem = (props) => {
  return (
    props.items.map((item, id) => (
      <TouchableOpacity 
        key={id} 
        style={styles.listItemStyle}
        onPress={() => props.delete(id)}
      >
        <Text>{item}</Text>
      </TouchableOpacity>
    ))
    
  )
}

const styles = StyleSheet.create({
  listItemStyle: {
    backgroundColor: 'grey',
    alignItems: 'center',
    padding: 10,
    width: '100%',
    marginTop: 5
  },
})
 
export default ListItem;