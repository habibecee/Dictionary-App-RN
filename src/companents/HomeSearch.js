import React, {useEffect} from 'react';
import {StyleSheet, Animated, ImageBackground} from 'react-native';
import SearchBox from './SearchBox';

import bg from '../assets/images/dictionary.png';
import {Logo} from './icons';
import theme from '../utils/theme';

const HomeSearch = ({isSearchFocused, onSearchFocused}) => {
  const heroHeight = new Animated.Value(285);
  const bgOpacity = new Animated.Value(1);

  useEffect(() => {
    if (isSearchFocused) {
      // bgOpacity
      Animated.timing(bgOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();

      // heroHeight
      Animated.timing(heroHeight, {
        toValue: 10,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      // bgOpacity
      Animated.timing(bgOpacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }).start();

      // heroHeight
      Animated.timing(heroHeight, {
        toValue: 285,
        duration: 500,
        useNativeDriver: false,
      }).start();
    }
  }, [isSearchFocused]);

  return (
    <Animated.View
      style={[styles.ImageBackgroundContainer, {height: heroHeight}]}
      backgroundColor={
        isSearchFocused ? theme.colors.transparentColor : theme.colors.logoBg
      }>
      {/* IMAGE BACKGROUND  */}
      <Animated.View style={{opacity: bgOpacity}}>
        <ImageBackground source={bg} style={styles.ImageBackground}>
          <Logo style={styles.logo} />
        </ImageBackground>
      </Animated.View>

      {/* SEARCH  */}
      <SearchBox
        marginTop={isSearchFocused ? 0 : -42}
        onChangeFocus={status => onSearchFocused(status)}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  ImageBackgroundContainer: {
    position: 'relative',
    zIndex: 1,
    height: 285,
  },

  ImageBackground: {
    // flex: 1,
    zIndex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 150,
    color: theme.colors.logoColor,
  },
});

export default HomeSearch;
