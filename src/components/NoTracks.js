import React from 'react';
import styled from 'styled-components/macro';

const StyledNoTracks = styled.div`
  padding: 1rem;
  text-align: center;
`;

const StyledTitle = styled.h3`
  margin: 0.5rem 0;
  color: ${props => props.theme.colors.d};
`;

const StyledText = styled.p`
  margin: 0.5rem 0;
`;

const StyledHighlight = styled.span`
  color: ${props => props.theme.colors.c};
`;

const NoTracks = () => (
  <StyledNoTracks>
    <StyledTitle>OMG! No tracks here!</StyledTitle>
    <StyledText><StyledHighlight>Head over to Spotify</StyledHighlight> <br />and listen to some music!</StyledText>
  </StyledNoTracks>
);

export default NoTracks;
