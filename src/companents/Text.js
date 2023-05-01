import React from 'react';
import {Text as T} from 'react-native';
import {typography, color, compose, size, space} from 'styled-system';
import styled from 'styled-components/native';

const Text = styled(T)(compose(typography, color, size, space));

export default Text;
