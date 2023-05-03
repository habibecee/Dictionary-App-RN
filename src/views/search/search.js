import React, {useState} from 'react';
import {
  Platform,
  Button,
  ImageBackground,
  StatusBar,
  StyleSheet,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useFocusEffect} from '@react-navigation/native';

import Box from '../../companents/Box';
import {Logo} from '../../companents/icons';
import SearchBox from '../../companents/SearchBox';
import theme from '../../utils/theme';
import bg from '../../assets/images/dictionary.png';

const Search = ({navigation}) => {
  const [isSearchFocused, setSearchFocused] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#fdf1ef');
    }, []),
  );

  return (
    <Box as={SafeAreaView} style={styles.SafeAreaView}>
      <StatusBar barStyle="dark-content" />
      <Box
        style={styles.ImageBackgroundContainer}
        height={isSearchFocused ? 35 : 285}>
        <Box as={ImageBackground} source={bg} style={styles.ImageBackground}>
          <Box style={styles.logoContainer}>
            <Logo style={styles.logo} />
          </Box>
          <Box style={styles.SearchBox}>
            <SearchBox onChangeFocus={status => setSearchFocused(status)} />
          </Box>
        </Box>
      </Box>
      <Box style={styles.midContainer}>
        <Box style={styles.container}>
          <Button
            title="Go to Details"
            onPress={() => navigation.navigate('Details')}
          />
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    backgroundColor: theme.colors.logoBg,
  },

  ImageBackgroundContainer: {
    position: 'relative',
    zIndex: 1,
    // height: 285,
  },

  ImageBackground: {
    flex: 1,
    position: 'relative',
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
    width: '100%',
    height: 52,
    padding: 16,
    marginTop: -42,
  },

  midContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    paddingTop: 26,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    padding: 30,
    // backgroundColor: 'yellow',
  },
});

export default Search;
