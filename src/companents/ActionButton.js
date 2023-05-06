import React from 'react';
import Button from './Button';
import {StyleSheet} from 'react-native';
import theme from '../utils/theme';
import Text from './Text';
import {fonts} from '../utils/constants';

export const ActionButton = ({children, ...props}) => {
  return (
    <Button style={styles.Button} {...props}>
      {children}
    </Button>
  );
};

export const ActionTitle = ({children, ...props}) => {
  return (
    <Text style={styles.Title} {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  Button: {
    backgroundColor: 'white',
    borderRadius: theme.radii.full,
    minWidth: theme.sizes.actionButton,
    height: theme.sizes.actionButton,
    shadowColor: '#000',
    shadowOpacity: 0.16,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    paddingHorizontal: 8,
  },

  Title: {
    color: theme.colors.textLight,
    fontFamily: fonts.bold,
    marginRight: 8,
    marginLeft: 8,
  },
});
