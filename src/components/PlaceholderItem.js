import React from 'react';
import styled, { css, keyframes } from 'styled-components/macro';

const shineAvatar = keyframes`
  0% {
		background-position: -6.5rem;
	}
	40%, 100% {
		background-position: 15rem;
	}
`;

const shineLines = keyframes`
  0% {
		background-position: -20rem;
	}
	40%, 100% {
		background-position: 20rem;
	}
`;

const PlaceholderItemImage = css`
  background-image: linear-gradient(
    90deg,
    transparent 0px,
    ${props => props.theme.colors.f} 2.5rem,
    transparent 5rem
  );
  background-size: 40rem;
`;

const ShineAvatarAnimation = css`
  animation: ${shineAvatar} 1.4s infinite linear -1.2s;
`;

const ShineLinesAnimation = css`
  animation: ${shineLines} 1.4s infinite linear -1.2s;
`;

const PlaceholderItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
`;

const PlaceholderItemPicture = styled.div`
  width: 86px;
  height: 86px;
  margin-right: 1rem;
  background-color: ${props => props.theme.colors.h};
  border-radius: 0.5rem;

  ${PlaceholderItemImage}
  ${ShineAvatarAnimation}
`;

const PlaceholderItemText = styled.div`
  flex-grow: 1;
`;

const PlaceholderItemTitle = styled.div`
  width: 55%;
  height: 0.8125rem;
  background-color: ${props => props.theme.colors.h};

  ${PlaceholderItemImage}
  ${ShineLinesAnimation}
`;

const PlaceholderItemParagraph = styled.div`
  width: 80%;
  height: 0.5rem;
  margin-top: 0.5rem;
  background-color: ${props => props.theme.colors.h};

  ${PlaceholderItemImage}
  ${ShineLinesAnimation}

  &:nth-child(odd) {
    width: 70%;
  }
`;

const PlaceholderItem = () => (
  <PlaceholderItemWrapper>
    <PlaceholderItemPicture />
    <PlaceholderItemText>
      <PlaceholderItemTitle />
      <PlaceholderItemParagraph />
    </PlaceholderItemText>
  </PlaceholderItemWrapper>
);

export default PlaceholderItem;
