import React from 'react';
import {FlatList} from 'react-native';
import theme from '../utils/theme';
import {GeneralStyles} from '../utils/constants';
import Box from './Box';
import Text from './Text';
import {SimpleCard, SimpleCardTitle} from './SimpleCard';

const LastHistoryList = ({data}) => {
  return (
    <FlatList
      style={{padding: 6}}
      data={data}
      renderItem={({item}) => (
        <Box py={6}>
          <SimpleCard>
            <SimpleCardTitle> {item.title} </SimpleCardTitle>
          </SimpleCard>
        </Box>
      )}
      keyExtractor={item => item.id}
      ListHeaderComponent={
        <Text
          style={[
            GeneralStyles.fontRegular,
            {color: theme.colors.textMedium, marginBottom: 10},
          ]}>
          Last Searches
        </Text>
      }
    />
  );
};

export default LastHistoryList;
