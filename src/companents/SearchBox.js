import React, {useEffect, useState} from 'react';
import Text from './Text';
import Box from './Box';
import Input from './Input';
import {Close, SearchIcon} from './icons';
import theme from '../utils/theme';
import {Keyboard, StyleSheet} from 'react-native';
import Button from './Button';

const SearchBox = ({onChangeFocus}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState('');

  React.useEffect(() => {
    onChangeFocus(isFocus);
  }, [isFocus, onChangeFocus]);

  const onCancel = () => {
    setIsFocus(false);
    Keyboard.dismiss();
  };

  const onFocus = () => {
    setIsFocus(true);
  };

  const onClear = () => {
    setValue('');
  };

  return (
    <Box style={styles.container}>
      <Box style={styles.inputBox}>
        <Input
          // clearButtonMode="always"
          borderColor={
            isFocus
              ? theme.colors.inputFocusColor
              : theme.colors.transparentColor
          }
          width={isFocus ? '80%' : '100%'}
          placeholder="Search In Dictionary"
          style={styles.input}
          value={value}
          onFocus={() => setIsFocus(true)}
          onChangeText={text => setValue(text)}
        />

        {value.length > 0 && (
          <Button onPress={onClear} style={styles.CloseIcon}>
            <Close right={isFocus ? 76 : 16} color={theme.colors.textDark} />
          </Button>
        )}

        <Button style={styles.SearchIcon}>
          <SearchIcon color={theme.colors.textMedium} />
        </Button>
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
    left: 0,
    bottom: 0,
    zIndex: 1,
    width: '100%',
    height: 52,
    padding: 16,
    flexDirektion: 'row',
    justifyContent: 'center',
  },

  inputBox: {
    position: 'relative',
    flex: 1,
  },

  input: {
    // position: 'absolute',
    color: theme.colors.textDark,
    paddingLeft: 52,
    height: 52,
    borderRadius: theme.radii.normal,
    borderWidth: 1,
    backgroundColor: 'white',
    placeholderTextColor: theme.colors.textMedium,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 24,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  CloseIcon: {
    position: 'absolute',
    right: 16,
    top: 14,
  },

  SearchIcon: {
    position: 'absolute',
    left: 16,
    top: 14,
  },

  button: {
    textAlign: 'center',
    marginLeft: 300,
    // paddingVertical: 15,
    // height: 52,
    top: 15,
  },
});

export default SearchBox;
