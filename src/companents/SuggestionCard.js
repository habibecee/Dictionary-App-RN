import React from 'react';
import {ActivityIndicator} from 'react-native';

import theme from '../utils/theme';

import Box from './Box';
import Text from './Text';
import {CardContainer, CardSummary, CardTitle} from './Card';
import {GeneralStyles} from '../utils/constants';

const SuggestionCard = ({title, onPress, data, ...props}) => {
  return (
    <Box {...props}>
      <Text
        style={[GeneralStyles.fontRegular, {color: theme.colors.textLight}]}>
        {title}
      </Text>
      <CardContainer onPress={onPress}>
        {data ? (
          <>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </>
        ) : (
          <ActivityIndicator />
        )}
      </CardContainer>
    </Box>
  );
};

export default SuggestionCard;
