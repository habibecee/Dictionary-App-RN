import React from 'react';
import {View} from 'react-native';
import {
  color,
  compose,
  size,
  space,
  flexbox,
  borderRadius,
  border,
} from 'styled-system';
import styled from 'styled-components/native';

const Box = styled(View)(
  compose(color, size, space, flexbox, border, borderRadius),
);

export default Box;
