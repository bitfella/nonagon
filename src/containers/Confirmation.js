import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sample } from 'lodash-es';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import Emoji from 'components/Emoji';
import SpotifyButton from 'components/SpotifyButton';
import { getUserId, getPlaylistImages, getPlaylistURI } from 'selectors';
import { goToURI } from 'utils';

export const greetingsList = [
  'Mazel Tov',
  'Kudos',
  'Congrats',
  'Yay',
  'Hooray',
  'Props'
];

const ConfirmationWrapper = styled.div`
  padding: 1.25rem;
`;

const ConfirmationHeader = styled.header`
  margin-bottom: 0.75rem;
`;

const ConfirmationTitle = styled.h2`
  display: inline-block;
  margin: 0 0.5rem 0 0;
  color: ${props => props.theme.colors.d};
  font-size: 1.5rem;
  vertical-align: middle;
`;

const ConfirmationImage = styled.picture`
  position: relative;
  display: block;
  width: 100%;
  padding-top: 100%;
  background: ${props => props.theme.colors.f};
  border: 3px solid ${props => props.theme.colors.c};
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: block;
    width: 100%;
    height: auto;
  }
`;

const ConfirmationText = styled.p`
  margin-bottom: 0;
  color: ${props => props.theme.colors.g};
  font-size: 0.875rem;
  font-weight: 700;
  text-align: center;
`;

const ConfirmationCtaGoTo = styled(SpotifyButton)`
  width: 100%;
`;

const ConfirmationFooter = styled.p`
  margin-bottom: 0;
  color: ${props => props.theme.colors.g};
  font-size: 0.875rem;
  font-weight: 400;
  text-align: center;
`;

const ConfirmationCtaReload = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.c};
  font-weight: 700;
  text-decoration: underline;
`;
export class Confirmation extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    uri: PropTypes.string.isRequired,
    greeting: PropTypes.string
  };

  navigateToSpotifyPlaylist = () => {
    goToURI(this.props.uri);
  };

  reloadApp = () => {
    window.location.reload();
  };

  render() {
    const { id, images, greeting } = this.props;
    const salute = greeting ? greeting : sample(greetingsList);

    return (
      <ConfirmationWrapper>
        <ConfirmationHeader>
          <ConfirmationTitle>
            {salute}, {id}!
          </ConfirmationTitle>
          <Emoji symbol="🤘" label="rock on" />
        </ConfirmationHeader>
        {images.length >= 1 && (
          <ConfirmationImage>
            <img src={images[0].url} alt="Spotify playlist" />
          </ConfirmationImage>
        )}
        <ConfirmationText>
          Your Playlist was successfully created!
        </ConfirmationText>
        <ConfirmationCtaGoTo
          onClick={this.navigateToSpotifyPlaylist}
          text="Open playlist in Spotify"
        />
        <ConfirmationFooter>
          or{' '}
          <ConfirmationCtaReload onClick={this.reloadApp}>
            create another one
          </ConfirmationCtaReload>
        </ConfirmationFooter>
      </ConfirmationWrapper>
    );
  }
}

const mapStateToProps = state => ({
  images: getPlaylistImages(state),
  uri: getPlaylistURI(state),
  id: getUserId(state)
});

export default connect(
  mapStateToProps,
  null
)(Confirmation);
