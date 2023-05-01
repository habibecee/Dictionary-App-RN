import React from 'react';
import {View} from 'react-native';
import {
  color,
  compose,
  size,
  space,
  flexbox,
  borderRadius,
} from 'styled-system';
import styled from 'styled-components/native';

const Box = styled(View)(compose(color, size, space, flexbox, borderRadius));

export default Box;
