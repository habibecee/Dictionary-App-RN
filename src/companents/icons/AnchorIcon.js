import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
const SvgAnchorIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className=""
    viewBox="0 0 24 24"
    {...props}>
    <Circle cx={12} cy={5} r={3} />
    <Path d="M12 22V8M5 12H2a10 10 0 0 0 20 0h-3" />
  </Svg>
);
export default SvgAnchorIcon;
