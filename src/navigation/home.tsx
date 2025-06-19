import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert, Button, Text, View} from 'react-native';

const HomeScreen = ({route}) => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>home</Text>
    </View>
  );
};

export default HomeScreen;
