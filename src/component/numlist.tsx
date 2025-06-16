import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const NumList = ({num, onDelete}) => {
  return num.map((item, index) => (
    <TouchableOpacity
      style={styles.numlist}
      key={index}
      onPress={() => onDelete(index)}>
      <Text>{item}</Text>
    </TouchableOpacity>
  ));
};

export default NumList;

const styles = StyleSheet.create({
  numlist: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    padding: 5,
    width: '100%',
    marginTop: 5,
  },
});
