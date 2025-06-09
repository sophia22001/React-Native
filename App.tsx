/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, Text, Alert, ScrollView} from 'react-native';
import Header from './src/header';
import Generator from './src/generator';
import NumList from './src/numlist';

const stateArr = {
  appName: 'My First App',
  random: [36, 999],
};

const App = () => {
  const [state, setState] = useState(stateArr);

  const onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setState(prevState => {
      return {...prevState, random: [...prevState.random, randomNum]};
    });
  };

  const onNumDelete = position => {
    const newArray = state.random.filter((num, index) => {
      return position !== index;
    });
    setState(prevState => ({
      ...prevState,
      random: newArray,
    }));
  };

  return (
    <View style={styles.mainView}>
      <Header name={state.appName} />
      <View>
        <Text style={styles.mainText} onPress={() => Alert.alert('helloworld')}>
          Hello World
        </Text>
      </View>

      <Generator add={onAddRandomNum} />

      <ScrollView
        style={{width: '100%'}}
        // onMomentumScrollBegin={() => Alert.alert('begin')}
        // onMomentumScrollEnd={() => Alert.alert('begin')}>
        // onScroll={() => Alert.alert('Scrolling')}

        //</View>onContentSizeChange={(width, height) => Alert.alert(height.toString())}
        bounces={false}>
        <NumList num={state.random} onDelete={onNumDelete} />
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center',
    //justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
  },
});
