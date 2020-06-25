import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components/macro';

const StyledButton = styled.button`
  margin-top: 1rem;
  padding: 1rem 2rem;
  color: ${props => props.theme.colors.a};
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.125rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  background-color: ${props => props.bgColor};
  border: none;
  border-radius: 500px;
  cursor: pointer;
  transition-property: background-color;
  transition-duration: 0.3s;

  &:hover {
    background-color: ${props => props.hoverBgColor};
  }
`;

const SpotifyButton = props => {
  const bgColor = props.bgColor || props.theme.colors.spotify.green;
  const hoverBgColor =
    props.hoverBgColor || props.theme.colors.spotify.greenHover;
  const { className, onClick, text } = props;

  return (
    <StyledButton
      bgColor={bgColor}
      className={className}
      hoverBgColor={hoverBgColor}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
};

SpotifyButton.propTypes = {
  bgColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default withTheme(SpotifyButton);
