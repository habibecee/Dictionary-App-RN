import React from 'react';
import Text from './Text';
import {fonts} from '../utils/constants';
import {StyleSheet} from 'react-native';
import Box from './Box';
import theme from '../utils/theme';
import Button from './Button';

export const SimpleCard = ({children, ...props}) => {
  return (
    <Button borderRadius="normal" style={styles.Container} {...props}>
      {children}
    </Button>
  );
};

export const SimpleCardTitle = ({children}) => {
  return <Text style={styles.Title}>{children}</Text>;
};

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'flex-start',
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.cardBorderColor,
    backgroundColor: 'white',
    padding: 16,
  },

  Title: {
    fontSize: 16,
    fontFamily: fonts.bold,
    color: theme.colors.textDark,
  },
});
