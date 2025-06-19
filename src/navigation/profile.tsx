import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

const ProfileScreen = ({route}) => {
  const navigation = useNavigation();

  const [userName, setUserName] = React.useState(route.params?.name || 'Guest');

  // 헤더 타이틀을 동적으로 설정
  useEffect(() => {
    navigation.setOptions({
      title: userName, // userName이 변경될 때마다 헤더 타이틀 업데이트
    });
  }, [navigation, userName]);

  const handleNameChange = () => {
    const newName = 'Updated User';
    setUserName(newName);
    // navigation.setParams를 사용하여 라우트 파라미터 업데이트
    // 이로 인해 useRoute()로 접근하는 params도 업데이트되고,
    // useLayoutEffect  P내부의 title도 다시 설정됩니다.
    navigation.setParams({name: newName});
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome, {userName}!</Text>
      <Button title="Update Name" onPress={handleNameChange} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Change the title" />
    </View>
  );
};

export default ProfileScreen;
