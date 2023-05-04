import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

import Box from './Box';
import bg from '../assets/images/dictionary.png';

const Bg = ({children, ...props}) => {
  return (
    <Box
      as={ImageBackground}
      source={bg}
      style={styles.ImageBackground}
      {...props}>
      {children}
    </Box>
  );
};

const styles = StyleSheet.create({
  ImageBackground: {
    flex: 1,
    zIndex: 1,
    width: '100%',
    height: '100%',
  },
});

export default Bg;
