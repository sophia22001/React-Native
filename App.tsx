import React from 'react';
import './gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image, StyleSheet} from 'react-native';
import HomeScreen from './src/navigation/tab/HomeTab';
import HomeTab from './src/navigation/tab/HomeTab';
import UserTab from './src/navigation/tab/UserTab';
import MessageTab from './src/navigation/tab/MessageTab';

import HomeIcon from './assets/images/home.png';
import UserIcon from './assets/images/user.png';
import MessageIcon from './assets/images/messenger.png';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconImagePath;

  if (name === 'Home') {
    iconImagePath = HomeIcon;
  } else if (name === 'User') {
    iconImagePath = UserIcon;
  } else if (name === 'Message') {
    iconImagePath = MessageIcon;
  }

  return (
    <Image
      style={{width: focused ? 28 : 23, height: focused ? 28 : 23}}
      source={iconImagePath}
    />
  );
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
