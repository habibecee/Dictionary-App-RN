import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Animated,
  FlatList,
  ImageBackground,
} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {useFocusEffect} from '@react-navigation/native';

import theme from '../../utils/theme';

import Box from '../../companents/Box';
import Text from '../../companents/Text';
import {Logo} from '../../companents/icons';
import bg from '../../assets/images/dictionary.png';
import SearchBox from '../../companents/SearchBox';
import Bg from '../../companents/Bg';
import {CardSummary, CardTitle, CardContainer} from '../../companents/Card';
import {GeneralStyles, fonts} from '../../utils/constants';
import {SimpleCard, SimpleCardTitle} from '../../companents/SimpleCard';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    summary: 'First Summary',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    summary: 'Second Summary',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    summary: 'Second Summary',
  },
];

const Search = ({navigation}) => {
  const heroHeight = new Animated.Value(285);
  const bgOpacity = new Animated.Value(1);
  const [isSearchFocused, setSearchFocused] = useState(false);

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
      bg={isSearchFocused ? theme.colors.logoBgLight : theme.colors.logoBg}>
      <Animated.View
        // height={heroHeight}
        style={[styles.ImageBackgroundContainer, {height: heroHeight}]}
        // height={isSearchFocused ? 35 : 285}
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
        {/* <Box style={styles.SearchBox} marginTop={isSearchFocused ? 0 : -42}> */}
        <SearchBox
          marginTop={isSearchFocused ? 0 : -42}
          onChangeFocus={status => setSearchFocused(status)}
        />
        {/* </Box> */}
      </Animated.View>

      <Box style={styles.midContainer} pt={isSearchFocused ? 0 : 26}>
        {isSearchFocused ? (
          <Box style={styles.container}>
            <FlatList
              style={{padding: 6}}
              data={DATA}
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
          </Box>
        ) : (
          <Box style={styles.container}>
            <Box>
              <Text
                style={[
                  GeneralStyles.fontRegular,
                  {color: theme.colors.textLight},
                ]}>
                {' '}
                Bir Deyim{' '}
              </Text>
              <CardContainer onPress={() => navigation.navigate('Details')}>
                <CardTitle>on para</CardTitle>
                <CardSummary>çok az (para) </CardSummary>
              </CardContainer>
            </Box>

            <Box mt={40}>
              <Text
                style={[
                  GeneralStyles.fontRegular,
                  {color: theme.colors.textLight},
                ]}>
                {' '}
                Bir Deyim - Atasözü{' '}
              </Text>
              <CardContainer onPress={() => navigation.navigate('Details')}>
                <CardTitle>siyem siyem ağlamak</CardTitle>
                <CardSummary>
                  hafif hafif, ince ince, durmadan gözyaşı dökmek{' '}
                </CardSummary>
              </CardContainer>
            </Box>
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
    // flex: 1,
    zIndex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoContainer: {
    flex: 1,
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
    paddingVertical: 40,
    paddingHorizontal: 16,
    top: 35,
  },
});

export default Search;
