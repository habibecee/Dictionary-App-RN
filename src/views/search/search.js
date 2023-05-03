import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Platform,
  Button,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Animated,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useFocusEffect} from '@react-navigation/native';

import Box from '../../companents/Box';
import {Logo} from '../../companents/icons';
import SearchBox from '../../companents/SearchBox';
import theme from '../../utils/theme';
import bg from '../../assets/images/dictionary.png';
import {Text} from 'react-native-svg';

const Search = ({navigation}) => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const heroHeight = useRef(new Animated.Value(285)).current;

  useEffect(() => {
    if (isSearchFocused) {
      Animated.timing(heroHeight, {
        toValue: 0,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 5000,
        useNativeDriver: true,
      }).start();
    }
  }, [heroHeight, isSearchFocused]);

  useFocusEffect(
    useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#fdf1ef');
    }, []),
  );

  return (
    <Box
      as={SafeAreaView}
      style={styles.SafeAreaView}
      bg={
        isSearchFocused ? theme.colors.transparentColor : theme.colors.logoBg
      }>
      <Box
        as={Animated.View}
        height={heroHeight}
        style={styles.ImageBackgroundContainer}
        // height={isSearchFocused ? 35 : 285}
        backgroundColor={
          isSearchFocused ? theme.colors.transparentColor : theme.colors.logoBg
        }>
        {!isSearchFocused && (
          <Box as={ImageBackground} source={bg} style={styles.ImageBackground}>
            <Box style={styles.logoContainer}>
              <Logo style={styles.logo} />
            </Box>
          </Box>
        )}
        <Box style={styles.SearchBox} marginTop={isSearchFocused ? 0 : -42}>
          <SearchBox onChangeFocus={status => setSearchFocused(status)} />
        </Box>
      </Box>
      <Box style={styles.midContainer} pt={isSearchFocused ? 0 : 26}>
        {isSearchFocused ? (
          <Box style={styles.container}>
            <Button
              title="See Last Search"
              onPress={() => navigation.navigate('Details')}
            />
          </Box>
        ) : (
          <Box style={styles.container}>
            <Button
              title="Go to Details"
              onPress={() => navigation.navigate('Details')}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    // backgroundColor: theme.colors.logoBg,
  },

  ImageBackgroundContainer: {
    position: 'relative',
    zIndex: 1,
    height: 285,
  },

  ImageBackground: {
    flex: 1,
    zIndex: 1,
    width: '100%',
    height: '100%',
  },

  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 120,
    height: 150,
    color: theme.colors.logoColor,
  },

  SearchBox: {
    position: 'relative',
    left: 0,
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: 52,
    padding: 16,
    // marginTop: -42,
    // backgroundColor: theme.colors.logoColor,
  },

  midContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    paddingTop: 26,
    backgroundColor: theme.colors.transparentColor,
  },

  container: {
    flex: 1,
    padding: 30,
  },
});

export default Search;
