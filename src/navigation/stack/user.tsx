import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';

const UserScreen = ({route}) => {
  const navigation = useNavigation();

  const {userIdx, userName, userLastName} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>user</Text>
      <Button
        title="To Home Screen"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Text>User Idx: {JSON.stringify(userIdx)}</Text>
      <Text>User Name: {JSON.stringify(userName)}</Text>
      <Text>User Lastame: {JSON.stringify(userLastName)}</Text>
    </View>
  );
};

export default UserScreen;
