import React from 'react';
import {Platform, StatusBar, StyleSheet} from 'react-native';
import Box from '../../../companents/Box';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFocusEffect} from '@react-navigation/native';
import theme from '../../../utils/theme';
import Text from '../../../companents/Text';
import {fonts} from '../../../utils/constants';
import {ActionButton, ActionTitle} from '../../../companents/ActionButton';
import {
  Favorite,
  FavoriteSolid,
  Hand,
  MoreHorizontal,
  Sound,
  SoundSolid,
} from '../../../companents/icons';

const Details = () => {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      Platform.OS === 'android' && StatusBar.setBackgroundColor('#fdf1ef');
    }, []),
  );

  return (
    <Box style={styles.Container}>
      <Box style={styles.SubContainer}>
        <Text style={styles.SubTitle}>Details!</Text>
        <Text style={styles.SubDetail}>Arapça Kalem</Text>
      </Box>
      <Box style={styles.ButtonContainer}>
        <ActionButton>
          <Sound color={theme.colors.textLight} />
        </ActionButton>
        {/* <ActionButton>
          <SoundSolid color={theme.colors.textLight} />
        </ActionButton> */}
        {/* <ActionButton ml={12}>
          <Favorite color={theme.colors.textLight} />
        </ActionButton> */}
        <ActionButton ml={12}>
          <FavoriteSolid color={theme.colors.textLight} />
        </ActionButton>

        <ActionButton ml="auto">
          <Hand color={theme.colors.textLight} />
          <ActionTitle> Turkish Sign Language </ActionTitle>
        </ActionButton>
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
});

export default Details;
