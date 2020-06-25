import React from 'react';
import { Link } from 'react-router-dom';
import styled, { withTheme } from 'styled-components/macro';
import { routes } from 'config/routes';
import redirectToSpotifyLogin from 'services/redirectToSpotifyLogin';
import Logo from 'components/Logo';
import SpotifyButton from 'components/SpotifyButton';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 1rem;
  text-align: center;
`;

const AboutLink = styled(Link)`
  padding: 1rem 3rem;
  color: ${props => props.theme.colors.c};
  font-size: 0.875rem;
  font-weight: 600;
`;

const Login = props => (
  <LoginWrapper>
    <Logo color={props.theme.colors.e} />
    <SpotifyButton
      onClick={redirectToSpotifyLogin}
      text="Sign in with Spotify"
    />
    <AboutLink to={routes.about}>About this App</AboutLink>
  </LoginWrapper>
);

export default withTheme(Login);
