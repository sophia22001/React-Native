import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const Input = () => {
  const inputState = {
    myTextInput: 'sadadsdf',
  };

  const [state, setState] = useState(inputState);

  const onChangeInput = event => {
    setState({myTextInput: event});
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
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});
