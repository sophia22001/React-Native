import React from 'react';
import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, StyleSheet} from 'react-native';
import HomeTab from './src/navigation/tab/HomeTab';
import UserTab from './src/navigation/tab/UserTab';
import MessageTab from './src/navigation/tab/MessageTab';

import HomeIcon from './assets/images/home.png';
import UserIcon from './assets/images/user.png';
import MessageIcon from './assets/images/messenger.png';

import Icon from '@react-native-vector-icons/ionicons';
const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconName;

  if (name === 'Home') {
    iconName = 'home';
  } else if (name === 'User') {
    iconName = 'people';
  } else if (name === 'Message') {
    iconName = 'mail';
  }
  const iconSize = focused ? 30 : 20;
  return <Icon name={iconName} size={iconSize} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarActiveBackgroundColor: 'skyblue',
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'white',
          tabBarStyle: {
            backgroundColor: '#c6cbef',
          },
          tabBarLabel: route.name,
          tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
        })}>
        <Tab.Screen name="Home" component={HomeTab} />
        <Tab.Screen name="User" component={UserTab} />
        <Tab.Screen name="Message" component={MessageTab} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
