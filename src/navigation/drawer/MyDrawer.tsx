import React from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import HomeIcon from '../../../assets/images/home.png';
import {CommonActions} from '@react-navigation/native';

const MyDrawer = ({navigation}) => {
  const navigateToScreen = route => () => {
    // navigation.dispatch(
    //   CommonActions.navigate({
    //     name: route,
    //     params: {},
    //   }),
    // );
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.container}>
        <View>
          <View style={styles.imageContainer}>
            <Image source={HomeIcon} style={{width: 30, height: 30}} />
          </View>
          <Text style={styles.sectionHeading}>Section 1</Text>
          <View style={styles.navSectionStyle}>
            <Text
              style={styles.navItemStyle}
              onPress={navigateToScreen('Home')}>
              Home
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={navigateToScreen('User')}>
              User
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={() => Alert.alert('Help Window')}>
              Help
            </Text>
            <Text
              style={styles.navItemStyle}
              onPress={() => Alert.alert('Info Window')}>
              Info
            </Text>
          </View>
        </View>
      </ScrollView>
      <View>
        <Text style={{paddingLeft: 10, paddingBottom: 30}}>
          Copyright @ Yujin, 2025.
        </Text>
      </View>
    </View>
  );
};

export default MyDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
  },
  imageContainer: {
    alignItems: 'center',
    padding: 50,
  },
  sectionHeading: {
    color: 'white',
    backgroundColor: '#ef9de4',
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontWeight: 'bold',
  },
  navSectionStyle: {
    backgroundColor: '#04b6ff',
  },
  navItemStyle: {
    padding: 10,
    color: '#fff',
  },
});
