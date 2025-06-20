import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const MessageTab = () => {
  return (
    <View style={styles.container}>
      <Text>Message</Text>
    </View>
  );
};

export default MessageTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
