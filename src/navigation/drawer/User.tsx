import React from 'react';
import {Image, Text} from 'react-native';
import UserIcon from '../../../assets/images/user.png';

const UserDrawer = ({navigation}) => {
  const drawerStyle = () => {
    navigation.setOptions({
      drawerIcon: () => (
        <Image source={UserIcon} style={{width: 30, height: 30}} />
      ),
    });
  };
  drawerStyle();
  return <Text>User</Text>;
};

export default UserDrawer;
