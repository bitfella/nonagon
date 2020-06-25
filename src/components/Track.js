import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { goToURI } from 'utils';

const TrackWrapper = styled.li`
  display: flex;
  padding: 0.5rem 1rem 0.5rem 0;
  font-size: 0.875rem;
  counter-increment: top-tracks-counter;

  &::before {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 2.5rem;
    color: ${props => props.theme.colors.d};
    font-weight: 600;
    text-align: center;
    content: counter(top-tracks-counter);
  }
`;

const TrackThumb = styled.picture`
  flex: 0 0 80px;
  width: 80px;
  height: 80px;
  margin-right: 1rem;
  border: 3px solid ${props => props.theme.colors.c};
  border-radius: 0.5rem;
  overflow: hidden;

  img {
    display: block;
    width: inherit;
    height: inherit;
  }
`;

const TrackInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TrackSongName = styled.span`
  color: ${props => props.theme.colors.g};
  font-weight: 700;
`;

const TrackArtist = styled.span`
  color: ${props => props.theme.colors.g};
  font-weight: 400;
`;

const Track = ({ songName, artists, images, uri }) => (
  <TrackWrapper onClick={() => goToURI(uri)} role="link" tabIndex="0">
    {images && images.length >= 1 && (
      <TrackThumb>
        <img alt={songName} aria-label="album cover" src={images[1].url} />
      </TrackThumb>
    )}
    <TrackInfo>
      <TrackSongName aria-label="song name">{songName}</TrackSongName>
      {artists.map(artist => (
        <TrackArtist aria-label="artist name" key={artist.id}>
          {artist.name}
        </TrackArtist>
      ))}
    </TrackInfo>
  </TrackWrapper>
);

Track.propTypes = {
  songName: PropTypes.string.isRequired,
  artists: PropTypes.array.isRequired,
  images: PropTypes.array,
  uri: PropTypes.string.isRequired
};

export default Track;
