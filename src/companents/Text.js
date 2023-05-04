import React from 'react';
import {Text as T} from 'react-native';
import {
  typography,
  color,
  compose,
  size,
  space,
  fontFamily,
} from 'styled-system';
import styled from 'styled-components/native';

const Text = styled(T)(compose(typography, color, size, space, fontFamily));

export default Text;
