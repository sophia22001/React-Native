import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native';

const CreatePostScreen = () => {
  const navigation = useNavigation();
  const [postText, setPostText] = useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.popTo('Home', {post: postText});
        }}
      />
    </>
  );
};

export default CreatePostScreen;
