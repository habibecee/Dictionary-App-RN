import React from 'react';
import {Button, Text, View} from 'react-native';
import Box from '../../companents/Box';
import BoxCenter from '../../companents/BoxCenter';
import {BookmarkIcon} from '../../companents/icons';

const Search = ({navigation}) => {
  return (
    <BoxCenter>
      <Text>Search !</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <Box size={20} bg="blue" mt={20} />
      <BookmarkIcon width={50} height={50} stroke="black" />
    </BoxCenter>
  );
};

export default Search;
