import React, {useState} from 'react';
import Text from './Text';
import Box from './Box';
import Input from './Input';
import {SearchIcon} from './icons';
import theme from '../utils/theme';
import {Keyboard, StyleSheet} from 'react-native';
import Button from './Button';

const SearchBox = props => {
  const [isFocus, setIsFocus] = useState(false);

  const onCancel = () => {
    setIsFocus(false);
    Keyboard.dismiss();
  };

  const onFocus = e => {
    // console.log(e);
    setIsFocus(true);
  };

  return (
    <Box style={styles.container}>
      <Input
        placeholder="Search In Dictionary"
        style={styles.input}
        onFocus={() => setIsFocus(true)}
      />

      <Box style={styles.IconContainer}>
        <SearchIcon color={theme.colors.textMedium} />
      </Box>

      {isFocus && (
        <Button style={styles.button} onPress={onCancel}>
          <Text> Cancel </Text>
        </Button>
      )}
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirektion: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },

  input: {
    flex: 1,
    position: 'absolute',
    color: theme.colors.textDark,
    paddingLeft: 52,
    height: 52,
    borderRadius: theme.radii.normal,
    backgroundColor: 'white',
    placeholderTextColor: theme.colors.textMedium,
    minWidth: '100%',
  },
  IconContainer: {
    position: 'absolute',
    left: 16,
    top: 12,
  },

  button: {
    marginLeft: 320,
    paddingVertical: 15,
    height: 52,
  },
});

export default SearchBox;
