import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Alert, Button, Linking} from 'react-native';
import LogoTitle from './LogoTitle';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => Linking.openURL('https://www.google.com')}
        icon={() => <LogoTitle />}
      />
      <DrawerItem label="Info" onPress={() => Alert.alert('Info Window')} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
