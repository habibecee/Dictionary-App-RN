import React from 'react';
import Text from './Text';
import {fonts} from '../utils/constants';
import {StyleSheet} from 'react-native';
import Box from './Box';
import theme from '../utils/theme';
import Button from './Button';

export const CardContainer = ({children, ...props}) => {
  return (
    <Button borderRadius="normal" style={styles.Container} {...props}>
      <Box style={styles.Body}>{children}</Box>
    </Button>
  );
};

export const CardTitle = ({children}) => {
  return <Text style={styles.Title}>{children}</Text>;
};

export const CardSummary = ({children}) => {
  return <Text style={styles.Summary}>{children}</Text>;
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 12,
  },

  Body: {
    flex: 1,
    borderLeftWidth: 3,
    borderLeftColor: theme.colors.cardBorderColor,
    paddingLeft: 12,
  },

  Title: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: theme.colors.textDark,
  },

  Summary: {
    fontSize: 14,
    fontFamily: fonts.regular,
    color: theme.colors.textMedium,
    marginTop: 8,
  },
});
