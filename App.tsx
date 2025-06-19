import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Alert, Button, Image, StyleSheet} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/navigation/home';
import UserScreen from './src/navigation/user';
import ProfileScreen from './src/navigation/profile';
import CreatePostScreen from './src/navigation/CreatePost';
import HomeIcon from './assets/images/home.png';

const Stack = createNativeStackNavigator();

const HeaderImage = () => {
  return <Image source={HomeIcon} style={{width: 30, height: 30}} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Screen',
            headerTitle: HeaderImage,
            headerRight: () => (
              <Button
                title="Info"
                onPress={() => Alert.alert('This is a button!')}
              />
            ),
          }}
        />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
