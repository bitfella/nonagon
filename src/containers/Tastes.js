import React, { Component } from 'react';
import { connect } from 'react-redux';
import { lowerCase } from 'lodash-es';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { getTopTracks } from 'actions/tastes';
import {
  getToken,
  getTastesTimeRange,
  playlistLoading,
  createPlaylistError,
  addTrackToPlaylistError,
  recommendationsLoading,
  recommendationsError,
  tastesError,
  tastesLoading
} from 'selectors';
import {
  appTimeRange,
  spotifyWebApiTimeRanges as timeRanges
} from 'config/spotify';
import Error from 'components/Error';
import Spinner from 'components/Spinner';
import TopTracks from 'containers/TopTracks';

const TastesWrapper = styled.div`
  padding-bottom: 5rem;
`;

const RangeSwitch = styled.nav`
  display: flex;
  padding: 1rem;
`;

const RangeButtonActive = css`
  background-color: ${props => props.theme.colors.c};
  cursor: default;
`;

const RangeButton = styled.button`
  flex-grow: 1;
  padding: 0.5rem 0.25rem;
  background-color: ${props => props.theme.colors.f};
  border: 1px solid ${props => props.theme.colors.c};
  color: ${props => props.theme.colors.g};
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }

  &:not(:first-child) {
    border-left: none;
  }

  &:last-child {
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }

  ${props => props.range === props.activeRange && RangeButtonActive}
`;

export class Tastes extends Component {
  static propTypes = {
    token: PropTypes.string,
    timeRange: PropTypes.string,
    getTracks: PropTypes.func,
    playlistLoading: PropTypes.bool,
    createPlaylistError: PropTypes.object,
    addTrackToPlaylistError: PropTypes.object,
    recommendationsLoading: PropTypes.bool,
    recommendationsError: PropTypes.object,
    tastesError: PropTypes.object,
    tastesLoading: PropTypes.bool
  };

  getTopTracks = (token, range) => {
    localStorage.setItem(appTimeRange, range);
    this.props.getTracks(token, range);
  };

  render() {
    const {
      token,
      timeRange,
      playlistLoading,
      createPlaylistError,
      addTrackToPlaylistError,
      recommendationsLoading,
      recommendationsError,
      tastesLoading,
      tastesError
    } = this.props;

    if (tastesLoading || playlistLoading || recommendationsLoading)
      return <Spinner />;
    if (tastesError) return <Error data={tastesError} />;
    if (recommendationsError) return <Error data={recommendationsError} />;
    if (createPlaylistError) return <Error data={createPlaylistError} />;
    if (addTrackToPlaylistError)
      return <Error data={addTrackToPlaylistError} />;

    return (
      <TastesWrapper>
        <RangeSwitch>
          {timeRanges.map((range, index) => {
            return (
              <RangeButton
                activeRange={timeRange}
                range={range}
                key={index}
                onClick={() => this.getTopTracks(token, range)}
              >
                {lowerCase(range)}
              </RangeButton>
            );
          })}
        </RangeSwitch>
        <TopTracks />
      </TastesWrapper>
    );
  }
}

const mapStateToProps = state => ({
  token: getToken(state),
  timeRange: getTastesTimeRange(state),
  playlistLoading: playlistLoading(state),
  createPlaylistError: createPlaylistError(state),
  addTrackToPlaylistError: addTrackToPlaylistError(state),
  recommendationsLoading: recommendationsLoading(state),
  recommendationsError: recommendationsError(state),
  tastesError: tastesError(state),
  tastesLoading: tastesLoading(state)
});

const mapDispatchToProps = dispatch => ({
  getTracks: (token, range) => dispatch(getTopTracks(token, range))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tastes);
