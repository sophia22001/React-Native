import React from 'react';
import {Alert, Image, StyleSheet} from 'react-native';

const ImageLoad = () => {
  return (
    <Image
      style={styles.image}
      source={{uri: 'https://picsum.photos/id/237/200/300'}}
      //source={Train}
      resizeMode="contain"
      onLoadEnd={() => Alert.alert('Image Loaded!!')}
    />
  );
};

export default ImageLoad;

const styles = StyleSheet.create({
  image: {
    backgroundColor: 'red',
    width: '100%',
    height: 700,
  },
});
