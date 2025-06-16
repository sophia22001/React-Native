import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const Generator = ({add}) => {
  return (
    <View style={styles.generator}>
      <Button title="Add Number" onPress={() => add()} />
    </View>
  );
};

export default Generator;

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#D197CF',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});
