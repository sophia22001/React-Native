import React, {useState} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

const PickerCompo = () => {
  const [country, setCountry] = useState('korea');
  const [value, setValue] = useState(50);

  return (
    <View style={styles.container}>
      <Slider
        style={{height: 40, width: 300}}
        value={value}
        minimumValue={0}
        maximumValue={100}
        onValueChange={val => setValue(val)}
        maximumTrackTintColor="red"
        minimumTrackTintColor="blue"
        step={10}
      />
      <Text style={styles.input}>{value} </Text>

      <ActivityIndicator
        style={{paddingTop: 200}}
        size="large"
        color="green"
        animating={true}
      />

      <Picker
        style={{height: 50, width: 250}}
        itemStyle={{fontSize: 16, color: 'black'}}
        selectedValue={country}
        onValueChange={(val, index) => setCountry(val)}>
        <Picker.Item label="Korea" value="korea" />
        <Picker.Item label="Canada" value="canada" />
        <Picker.Item label="Canada2" value="canada2" />
      </Picker>
    </View>
  );
};

export default PickerCompo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
  },
});
