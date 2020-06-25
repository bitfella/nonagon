import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import SwitchToggler from 'components/SwitchToggler';
import RangeSlider from 'components/RangeSlider';
import {
  isPlaylistPublic,
  getRecommendationsDanceability,
  getRecommendationsEnergy,
  getRecommendationsValence
} from 'selectors';
import { setPlaylistAvailability } from 'actions/playlist';
import {
  setRecommendationsDanceability,
  setRecommendationsEnergy,
  setRecommendationsValence
} from 'actions/recommendations';
import { spotifyWebApiInitialRefinementValue } from 'config/spotify';

const PlaylistOptionsList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  > li:not(:first-child) {
    margin-top: 1rem;
  }
`;

const PlaylistOptionTitle = styled.h4`
  margin: 0 0 0.5rem 0;
  font-size: 0.875rem;
`;

export class CreatePlaylistOptionsList extends Component {
  static propTypes = {
    isPlaylistPublic: PropTypes.bool.isRequired,
    recommendationsDanceability: PropTypes.array,
    recommendationsEnergy: PropTypes.array,
    recommendationsValence: PropTypes.array,
    setPlaylistAvailability: PropTypes.func.isRequired,
    setRecommendationsDanceability: PropTypes.func.isRequired,
    setRecommendationsEnergy: PropTypes.func.isRequired,
    setRecommendationsValence: PropTypes.func.isRequired
  };

  static defaultProps = {
    recommendationsDanceability: spotifyWebApiInitialRefinementValue,
    recommendationsEnergy: spotifyWebApiInitialRefinementValue,
    recommendationsValence: spotifyWebApiInitialRefinementValue
  };

  handleAvailabilityChange = isChecked => {
    this.props.setPlaylistAvailability(isChecked);
  };

  handleDanceabilityChange = value => {
    this.props.setRecommendationsDanceability(value);
  };

  handleEnergyChange = value => {
    this.props.setRecommendationsEnergy(value);
  };

  handleValenceChange = value => {
    this.props.setRecommendationsValence(value);
  };

  render() {
    return (
      <PlaylistOptionsList>
        <li>
          <PlaylistOptionTitle>Make playlist public</PlaylistOptionTitle>
          <SwitchToggler
            id="availability"
            checked={this.props.isPlaylistPublic}
            onChange={this.handleAvailabilityChange}
          />
        </li>
        <li>
          <PlaylistOptionTitle>Playlist danceability</PlaylistOptionTitle>
          <RangeSlider
            value={this.props.recommendationsDanceability}
            hasCaption={true}
            onChange={this.handleDanceabilityChange}
          />
        </li>
        <li>
          <PlaylistOptionTitle>Playlist energy</PlaylistOptionTitle>
          <RangeSlider
            value={this.props.recommendationsEnergy}
            hasCaption={true}
            onChange={this.handleEnergyChange}
          />
        </li>
        <li>
          <PlaylistOptionTitle>Playlist valence</PlaylistOptionTitle>
          <RangeSlider
            value={this.props.recommendationsValence}
            hasCaption={true}
            onChange={this.handleValenceChange}
          />
        </li>
      </PlaylistOptionsList>
    );
  }
}

const mapStateToProps = state => ({
  isPlaylistPublic: isPlaylistPublic(state),
  recommendationsDanceability: getRecommendationsDanceability(state),
  recommendationsEnergy: getRecommendationsEnergy(state),
  recommendationsValence: getRecommendationsValence(state)
});

const mapDispatchToProps = dispatch => ({
  setPlaylistAvailability: isChecked =>
    dispatch(setPlaylistAvailability(isChecked)),
  setRecommendationsDanceability: value =>
    dispatch(setRecommendationsDanceability(value)),
  setRecommendationsEnergy: value => dispatch(setRecommendationsEnergy(value)),
  setRecommendationsValence: value => dispatch(setRecommendationsValence(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreatePlaylistOptionsList);
