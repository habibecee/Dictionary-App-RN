import React, {useCallback, useEffect, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import Box from '../../companents/Box';
import SuggestionCard from '../../companents/SuggestionCard';
import LastHistoryList from '../../companents/LastHistoryList';
import HomeSearch from '../../companents/HomeSearch';
import theme from '../../utils/theme';

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
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [homeData, setHomeData] = useState(null);

  const getHomeData = async () => {
    const response = await fetch('https://sozluk.gov.tr/icerik');
    const data = await response.json();
    console.log(data);
    setHomeData(data);
  };

  useEffect(() => {
    getHomeData();
  }, []);

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
      <HomeSearch
        isSearchFocused={isSearchFocused}
        onSearchFocused={setSearchFocused}
      />

      <Box style={styles.midContainer} pt={isSearchFocused ? 0 : 26}>
        {isSearchFocused ? (
          <Box style={styles.container}>
            <LastHistoryList data={DATA} />
          </Box>
        ) : (
          <Box style={styles.container}>
            <SuggestionCard
              data={homeData?.kelime[0]}
              onPress={() =>
                navigation.navigate('Details', {
                  keyword: homeData?.kelime[0].madde,
                })
              }
              title="Bir Kelime"
            />

            <SuggestionCard
              mt={40}
              data={homeData?.atasoz[0]}
              onPress={() =>
                navigation.navigate('Details', {
                  keyword: homeData?.atasoz[0].madde,
                })
              }
              title="Bir Deyim - Atasözü"
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
