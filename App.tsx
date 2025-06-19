import React from 'react';
import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeDrawer from './src/navigation/drawer/Home';
import UserDrawer from './src/navigation/drawer/User';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeDrawer} />
        <Drawer.Screen name="User" component={UserDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
