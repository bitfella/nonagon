import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import styled, { withTheme } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { getToken } from 'selectors';
import { spotifyLogoutURI } from 'config/spotify';
import { goToURI } from 'utils';
import Layout from 'components/Layout';
import SpotifyButton from 'components/SpotifyButton';

const LogoutWrapper = styled.article`
  padding: 1.5rem;
  color: ${props => props.theme.colors.g};
`;

const LogoutSection = styled.section`
  p,
  ul {
    margin: 0.625rem 0;
    font-size: 0.875rem;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${props => props.theme.colors.b};
  }
`;

const LogoutFooter = styled(LogoutSection)`
  margin-top: 1rem;
  text-align: center;
`;

const HighlightNonagon = styled.span`
  color: ${props => props.theme.colors.d};
  font-weight: 600;
`;

const HighlightSpotify = styled.span`
  color: ${props => props.theme.colors.spotify.green};
  font-weight: 600;
`;

const LogoutButton = styled(SpotifyButton)`
  width: 100%;
`;

const ClearNonagonDataButton = styled.button`
  display: inline-block;
  padding: 0.5rem 0;
  color: ${props => props.theme.colors.c};
  font-weight: 600;
  text-decoration: underline;
  border: none;
  background: transparent;
`;

export class Logout extends Component {
  static propTypes = {
    token: PropTypes.string
  };

  clearNonagonData = () => {
    localStorage.clear();
    window.location.reload();
  };

  doLogout = () => {
    localStorage.clear();
    goToURI(spotifyLogoutURI);
  };

  render() {
    const { token } = this.props;

    if (token) {
      return (
        <Layout>
          <div isLayoutBodyWrapper>
            <LogoutWrapper>
              <LogoutSection>
                <p>
                  <HighlightNonagon>Nonagon</HighlightNonagon> is a client side
                  web application: there's no proper way to logout, since you're
                  not logged in: you're just fetching{' '}
                  <HighlightSpotify>Spotify</HighlightSpotify> data using your
                  Spotify account.
                </p>
                <p>
                  Anyway, if you wish to stop using your Spotify account (e.g.
                  you want to use another one) you may click on the big red
                  button on this page; that will do the following:
                </p>
                <ul>
                  <li>clear all your Nonagon data on the current browser;</li>
                  <li>redirect you to Spotify logout web service.</li>
                </ul>
                <p>
                  Please be aware that this may affect any other web application
                  using Spotify login in the current browser.
                </p>
                <p>
                  Alternatively, you may just wish to clear your Nonagon data on
                  current browser, clicking "clear my Nonagon data" link.
                </p>
              </LogoutSection>
              <LogoutFooter>
                <LogoutButton
                  onClick={this.doLogout}
                  bgColor={this.props.theme.colors.spotify.red}
                  hoverBgColor={this.props.theme.colors.spotify.redHover}
                  text="Logout from Spotify"
                />
                <p>
                  or{' '}
                  <ClearNonagonDataButton onClick={this.clearNonagonData}>
                    clear my Nonagon data
                  </ClearNonagonDataButton>
                </p>
              </LogoutFooter>
            </LogoutWrapper>
          </div>
        </Layout>
      );
    }

    return <Redirect to="/" />;
  }
}

const mapStateToProps = state => ({
  token: getToken(state)
});

export default connect(
  mapStateToProps,
  null
)(withTheme(Logout));
