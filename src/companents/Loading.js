import React from 'react';
import Box from './Box';
import {StyleSheet} from 'react-native';
import Text from './Text';
import {fonts} from '../utils/constants';
import theme from '../utils/theme';

export const Loading = ({...props}) => {
  return <Box width={160} style={styles.LoadingContainer} {...props} />;
};

const styles = StyleSheet.create({
  LoadingContainer: {
    backgroundColor: theme.colors.light,
    // width: 160,
    height: 16,
  },
});
