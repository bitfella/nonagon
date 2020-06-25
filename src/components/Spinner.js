import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import Emoji from 'components/Emoji';

const fadeIn = keyframes`
  from { 
    opacity: 0;
  }
  to { 
    opacity: 1;
  }
`;

const rotate = keyframes`
  to { 
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3rem;
  height: 3rem;
  margin: -1.5rem 0 0 -1.5rem;
  font-size: 1.5625rem;
  line-height: 3rem;
  text-align: center;
  animation: ${fadeIn} 0.75s linear, ${rotate} 1.5s linear infinite;
  transform-origin: 50% 50%;
`;

const Spinner = () => (
  <SpinnerWrapper>
    <Emoji symbol="⏳" label="hourglass not done" />
  </SpinnerWrapper>
);

export default Spinner;
