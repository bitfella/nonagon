import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash-es';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import handleError from 'services/handleError';
import { getTopTracks } from 'actions/tastes';
import { appTimeRange } from 'config/spotify';
import {
  getToken,
  getTastesTracks,
  tastesLoading,
  tastesError
} from 'selectors';
import Track from 'components/Track';
import TopTracksActions from 'components/TopTracksActions';
import PlaceholderList from 'components/PlaceholderList';

const TopTracksList = styled.ol`
  margin: 0;
  padding: 0 0 0.5rem 0;
  color: ${props => props.theme.colors.e};
  counter-reset: top-tracks-counter;
  list-style: none;
`;

export class TopTracks extends Component {
  static propTypes = {
    token: PropTypes.string,
    tracks: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object,
    fetchTracks: PropTypes.func
  };

  componentDidMount() {
    const timeRange = localStorage.getItem(appTimeRange);

    if (timeRange) {
      this.props.fetchTracks(this.props.token, timeRange);
    } else {
      this.props.fetchTracks(this.props.token);
    }
  }

  render() {
    const { error, loading, tracks } = this.props;

    if (error) {
      return handleError(error);
    }

    if (loading) {
      return <PlaceholderList items={5} />;
    }

    return (
      <>
        <TopTracksList>
          {!isEmpty(tracks) &&
            tracks.items.map(item => {
              return (
                <Track
                  key={item.id}
                  songName={item.name}
                  artists={item.artists}
                  images={item.album.images}
                  uri={item.uri}
                />
              );
            })}
        </TopTracksList>
        <TopTracksActions />
      </>
    );
  }
}

const mapStateToProps = state => ({
  token: getToken(state),
  tracks: getTastesTracks(state),
  loading: tastesLoading(state),
  error: tastesError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchTracks: (token, range) => dispatch(getTopTracks(token, range))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopTracks);
