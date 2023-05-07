import React, {useEffect, useState} from 'react';
import {Platform, ScrollView, StatusBar, StyleSheet} from 'react-native';
import Box from '../../../companents/Box';
import {useFocusEffect} from '@react-navigation/native';
import theme from '../../../utils/theme';
import Text from '../../../companents/Text';
import {fonts} from '../../../utils/constants';
import {ActionButton, ActionTitle} from '../../../companents/ActionButton';
import {
  Favorite,
  FavoriteSolid,
  Hand,
  HandSolid,
  Sound,
  SoundSolid,
} from '../../../companents/icons';
import {
  DetailItemContainer,
  DetailItemSummary,
  DetailItemTitle,
} from '../../../companents/DetailSummaryItem';
import {Loading} from '../../../companents/Loading';

const Details = ({route}) => {
  const [data, setData] = useState(null);

  const title = route.params?.title;

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#fdf1ef');
    }, []),
  );

  const getDetailData = async () => {
    const response = await fetch(
      `https://sozluk.gov.tr/gts?ara=${query.params}`,
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  return (
    <Box style={styles.Container}>
      <Box style={styles.SubContainer}>
        <Text style={styles.SubTitle}>{title}</Text>
        <Text style={styles.SubDetail}>Arapça Kalem</Text>
      </Box>
      <Box style={styles.ButtonContainer}>
        <ActionButton disabled={!data}>
          <Sound color={theme.colors.textLight} />
        </ActionButton>
        {/* <ActionButton disabled={!data}>
          <SoundSolid color={theme.colors.soundIconSolid} />
        </ActionButton> */}
        <ActionButton ml={12} disabled={!data}>
          <Favorite color={theme.colors.textLight} />
        </ActionButton>
        {/* <ActionButton ml={12} disabled={!data}>
          <FavoriteSolid color={theme.colors.favoriteIconSolid} />
        </ActionButton> */}

        <ActionButton ml="auto" disabled={!data}>
          <Hand color={theme.colors.textLight} />
          {/* <HandSolid color={theme.colors.textLight} /> */}
          <ActionTitle> Turkish Sign Language </ActionTitle>
        </ActionButton>
      </Box>

      <Box as={ScrollView} style={styles.ScroolView}>
        {/* BEFORE LOADING  */}

        {[1, 2, 3].map(index => (
          <DetailItemContainer border={index !== 1}>
            <Loading />
            <Loading width={200} marginTop={10} />
          </DetailItemContainer>
        ))}

        {/* AFTER LOADING  */}

        {/* <DetailItemContainer border>
          <DetailItemTitle>
            Successfully launched the app on the simulator
          </DetailItemTitle>
          <DetailItemSummary>
            Installing info Launching success Successfully launched the app on
            the simulator
          </DetailItemSummary>
        </DetailItemContainer> */}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: theme.colors.logoBg,
    padding: 16,
  },

  SubContainer: {},

  SubTitle: {
    fontFamily: fonts.bold,
    fontSize: 32,
  },

  SubDetail: {
    fontFamily: fonts.regular,
    color: theme.colors.textLight,
    marginTop: 6,
  },

  ButtonContainer: {
    flexDirection: 'row',
    marginTop: 24,
  },

  ScroolView: {
    marginTop: 32,
    padding: 8,
  },
});

export default Details;
