import React from 'react';

import theme from '../utils/theme';

import Box from './Box';
import Text from './Text';
import {CardContainer, CardSummary, CardTitle} from './Card';
import {GeneralStyles} from '../utils/constants';
import {Loading} from './Loading';

const SuggestionCard = ({title, onPress, data, ...props}) => {
  return (
    <Box {...props}>
      <Text
        style={[GeneralStyles.fontRegular, {color: theme.colors.textLight}]}>
        {title}
      </Text>
      <CardContainer onPress={onPress}>
        {data ? (
          <React.Fragment>
            <CardTitle>{data.madde}</CardTitle>
            <CardSummary>{data.anlam}</CardSummary>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Loading />
            <Loading width={200} mt={10} />
          </React.Fragment>
        )}
      </CardContainer>
    </Box>
  );
};

export default SuggestionCard;
