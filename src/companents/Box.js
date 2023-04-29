import {View} from 'react-native';
import {color, compose, size, space, flexbox} from 'styled-system';
import styled from 'styled-components/native';

const Box = styled(View)(compose(color, size, space, flexbox));

export default Box;
