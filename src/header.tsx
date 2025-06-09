import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  //     TouchableWithoutFeedback,
  Alert,
} from 'react-native';

type HeaderProps = {
  name: string;
};

const Header = (props: HeaderProps) => {
  return (
    <TouchableOpacity
      style={styles.header}
      //onPress={() => Alert.alert('helloworld')}
      //onLongPress={() => Alert.alert('helloworld')}
      //onPressIn={() => Alert.alert('helloworld')}
      onPressOut={() => Alert.alert('helloworld')}>
      <View>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>

    // <TouchableWithoutFeedback onPress={() => alert('helloworld')}>
    //   <View style={styles.header}>
    //     <Text>{props.name}</Text>
    //   </View>
    // </TouchableWithoutFeedback>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});
