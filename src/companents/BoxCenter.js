import React from 'react';
import styled from 'styled-components/native';

import Box from './Box';

const BoxCenter = styled(Box)({});

BoxCenter.defaultProps = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
};

export default BoxCenter;
