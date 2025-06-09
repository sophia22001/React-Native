/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  Text,
} from 'react-native';

const App = () => {
  const inputState = {
    myTextInput: 'sadadsdf',
    alphabet: ['a', 'b', 'c', 'd'],
  };

  const [state, setState] = useState(inputState);

  const onChangeInput = event => {
    setState(prevState => ({
      ...prevState,
      myTextInput: event,
    }));
  };

  const onAddTextInput = () => {
    setState(prevState => {
      return {
        ...prevState,
        myTextInput: '',
        alphabet: [...prevState.alphabet, prevState.myTextInput],
      };
    });
  };
  return (
    <View style={styles.mainView}>
      <TextInput
        style={styles.input}
        value={state.myTextInput}
        onChangeText={onChangeInput}
        multiline={true}
        //maxLength={30}
        autoCapitalize={'none'}
      />
      <Button title="Add Text Input" onPress={onAddTextInput} />

      <ScrollView style={{width: '100%'}}>
        <View>
          {state.alphabet.map((item, index) => (
            <Text style={styles.mainText} key={index}>
              {item}
            </Text>
          ))}
        </View>
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
    margin: 20,
    backgroundColor: 'pink',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});
