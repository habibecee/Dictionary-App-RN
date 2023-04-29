import {TouchableOpacity} from 'react-native';
import {
  color,
  compose,
  size,
  space,
  flexbox,
  layout,
  borderRadius,
} from 'styled-system';
import styled from 'styled-components/native';

const Button = styled(TouchableOpacity)(
  compose(color, size, space, flexbox, layout, borderRadius),
);

Button.defaultProps = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
};

export default Button;
