import React from 'react';
import Box from './Box';
import {StyleSheet} from 'react-native';
import Text from './Text';
import {fonts} from '../utils/constants';
import theme from '../utils/theme';

export const DetailItemContainer = ({
  children,
  border,
  order,
  type,
  ...props
}) => {
  return (
    <Box style={styles.Container} {...props} borderTopWidth={border ? 1 : 0}>
      <Box style={styles.SubContainer}>
        {order && <Text style={styles.SubNumber}> 123 </Text>}
      </Box>
      <Box style={styles.SubContainer}>
        {type && <Text style={styles.SubTitle}>ITEM NAME</Text>}
      </Box>
      <Box style={styles.SubChild}>{children}</Box>
    </Box>
  );
};

export const DetailItemTitle = ({children, ...props}) => {
  return <Text style={styles.Title}>{children}</Text>;
};

export const DetailItemSummary = ({children, ...props}) => {
  return <Text style={styles.Summary}>{children}</Text>;
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.colors.logoBgLight,
    borderRadius: 10,
    borderColor: theme.colors.logoColor,
    marginTop: 24,
    paddingVertical: 20,
    paddingHorizontal: 28,
    shadowColor: theme.colors.cardBorderColor,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  SubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  SubChild: {
    marginTop: 8,
    padding: 8,
    backgroundColor: theme.colors.logoBgLight,
    borderRadius: 10,
    shadowColor: theme.colors.logoColor,
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {
      width: -1,
      height: 2,
    },
  },

  SubNumber: {
    fontFamily: fonts.bold,
    color: theme.colors.textLight,
    fontSize: 16,
    // textAlign: 'left',
    marginLeft: -25,
    marginTop: -14,
    marginBottom: 10,
  },
  SubTitle: {
    fontFamily: fonts.bold,
    color: theme.colors.subText,
    fontSize: 16,
    marginLeft: 8,
  },
  Title: {
    fontFamily: fonts.bold,
    color: theme.colors.textMedium,
    fontSize: 14,
    marginTop: 10,
  },

  Summary: {
    fontFamily: fonts.regular,
    color: theme.colors.textLight,
    fontSize: 14,
    marginLeft: 10,
    marginTop: 12,
  },
});
