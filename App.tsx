import React from 'react';
import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {Image, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeDrawer from './src/navigation/drawer/Home';
import UserDrawer from './src/navigation/drawer/User';
import CustomDrawerContent from './src/navigation/drawer/CustomDrawerContent';
import HomeIcon from './assets/images/home.png';
import MyDrawer from './src/navigation/drawer/MyDrawer';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerType: 'front',
          drawerPosition: 'right',
          drawerStyle: {
            //backgroundColor: '#c6cbef',
            width: 200,
          },
          drawerActiveTintColor: 'white',
          drawerActiveBackgroundColor: '#003CB3',
        }}
        drawerContent={props => <MyDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={HomeDrawer}
          options={{
            drawerIcon: () => (
              <Image source={HomeIcon} style={{width: 30, height: 30}} />
            ),
          }}
        />
        <Drawer.Screen name="User" component={UserDrawer} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
