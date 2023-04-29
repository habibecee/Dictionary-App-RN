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
    </BoxCenter>
  );
};

export default Search;
