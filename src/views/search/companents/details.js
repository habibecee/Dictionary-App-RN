import React from 'react';
import {Text, Platform, StatusBar, StyleSheet} from 'react-native';
import Box from '../../../companents/Box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import theme from '../../../utils/theme';

const Details = () => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#fdf1ef');
    }, []),
  );

  return (
    <Box as={SafeAreaView} style={styles.Container}>
      <Text>Details!</Text>
    </Box>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.logoBg,
    padding: 16,
  },
});

export default Details;
