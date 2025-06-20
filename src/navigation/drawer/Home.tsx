import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';

const HomeDrawer = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>home</Text>
      <Button title="To User" onPress={() => navigation.navigate('User')} />
      <Button title="To Custon" onPress={() => navigation.navigate('Custom')} />
    </View>
  );
};

export default HomeDrawer;
