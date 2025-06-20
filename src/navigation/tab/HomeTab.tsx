import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from '@react-native-vector-icons/ionicons';

const HomeTab = () => {
  const HomeVectorIcon = <Icon name="home-outline" size={30} />;

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <View>{HomeVectorIcon}</View>
    </View>
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
