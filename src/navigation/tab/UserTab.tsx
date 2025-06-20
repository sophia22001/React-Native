import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserTab = () => {
  return (
    <View style={styles.container}>
      <Text>User</Text>
    </View>
  );
};

export default UserTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
