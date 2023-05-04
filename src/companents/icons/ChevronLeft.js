import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgChevronLeft = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className=""
    {...props}>
    <Path d="m15 18-6-6 6-6" />
  </Svg>
);
export default SvgChevronLeft;
