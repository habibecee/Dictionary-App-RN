import React from 'react';
import Box from './Box';
import {StyleSheet} from 'react-native';
import Text from './Text';
import {fonts} from '../utils/constants';
import theme from '../utils/theme';

const DetailSummaryItem = ({data, key, children, border, ...props}) => {
  const type = (data?.ozelliklerListe &&
    data.ozelliklerListe.map(_ => _.tam_adi)) || ['İsim'];

  return (
    <Box
      style={styles.Container}
      key={key}
      {...props}
      borderTopWidth={border ? 1 : 0}>
      {data ? (
        <React.Fragment>
          <Box style={styles.SubContainer}>
            <Text style={styles.SubNumber}> {data.anlam_sira} </Text>
          </Box>
          <Box style={styles.SubContainer}>
            <Text style={styles.SubTitle}>{type.join(', ')} </Text>
          </Box>
          <Box style={styles.SubChild}>
            <Text style={styles.Title}>{data.anlam}</Text>
            {data.orneklerListe &&
              data.orneklerListe.map(ornek => (
                <Box key={ornek.ornek_id}>
                  <Text style={styles.Summary}>
                    {ornek.ornek}{' '}
                    {ornek.yazar_id !== '0' && (
                      <Text style={styles.Author}>
                        {`-${ornek.yazar[0].tam_adi}`}
                      </Text>
                    )}
                  </Text>
                </Box>
              ))}
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: theme.colors.logoBgLight,
    borderRadius: 10,
    borderColor: theme.colors.logoColor,
    marginTop: 24,
    paddingVertical: 20,
    paddingHorizontal: 28,
    shadowColor: theme.colors.cardBorderColor,
    shadowOpacity: 1,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },
  SubContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  SubChild: {
    marginTop: 8,
    padding: 8,
    backgroundColor: theme.colors.logoBgLight,
    borderRadius: 10,
    shadowColor: theme.colors.logoColor,
    shadowOpacity: 0.4,
    shadowRadius: 4,
    shadowOffset: {
      width: -1,
      height: 2,
    },
  },

  SubNumber: {
    fontFamily: fonts.bold,
    color: theme.colors.textLight,
    fontSize: 16,
    // textAlign: 'left',
    marginLeft: -25,
    marginTop: -14,
    marginBottom: 10,
  },
  SubTitle: {
    fontFamily: fonts.bold,
    color: theme.colors.subText,
    fontSize: 16,
    marginLeft: 8,
  },
  Title: {
    fontFamily: fonts.bold,
    color: theme.colors.textMedium,
    fontSize: 14,
    marginTop: 10,
  },

  Summary: {
    fontFamily: fonts.regular,
    color: theme.colors.textLight,
    fontSize: 14,
    marginLeft: 10,
    marginTop: 12,
  },

  Author: {
    fontFamily: fonts.bold,
    color: theme.colors.textLight,
  },
});

export default DetailSummaryItem;
