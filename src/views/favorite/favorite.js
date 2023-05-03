import React from 'react';
import {Platform, StatusBar, StyleSheet, Text} from 'react-native';
import Box from '../../companents/Box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';

const Favorite = () => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#fdf1ef');
    }, []),
  );

  return (
    <Box as={SafeAreaView} style={styles.Container}>
      <Text>Favorite!</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Favorite;
