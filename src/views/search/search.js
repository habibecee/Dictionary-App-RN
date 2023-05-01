import React from 'react';
import {Button, Text, View} from 'react-native';
import Box from '../../companents/Box';
import BoxCenter from '../../companents/BoxCenter';
import {Logo} from '../../companents/icons';
import SearchBox from '../../companents/SearchBox';
import theme from '../../utils/theme';

const Search = ({navigation}) => {
  return (
    <Box>
      <Text>Search !</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      <Box py={20}>
        <Logo width={220} color={theme.colors.logoColor} />
      </Box>
      <Box p={10}>
        <SearchBox />
      </Box>
    </Box>
  );
};

export default Search;
