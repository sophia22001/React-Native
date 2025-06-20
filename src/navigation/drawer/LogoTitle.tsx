import React from 'react';
import HelpIcon from '../../../assets/images/question.png';
import {Image} from 'react-native';

const LogoTitle = () => {
  return <Image source={HelpIcon} style={{width: 30, height: 30}} />;
};

export default LogoTitle;
