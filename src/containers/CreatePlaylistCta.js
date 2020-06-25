import React, { Component } from 'react';
import { connect } from 'react-redux';
import { debounce } from 'lodash-es';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import createPlaylist from 'services/createPlaylist';

const StyledCreatePlaylistCta = styled.button`
  flex-grow: 1;
  padding: 1rem;
  color: ${props => props.theme.colors.a};
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.125rem;
  background-color: ${props => props.theme.colors.d};
  border: none;
  border-radius: 500px;
  cursor: pointer;

  &:disabled {
    cursor: progress;
    opacity: 0.5;
  }
`;

export class CreatePlaylistCta extends Component {
  static propTypes = {
    createPlaylist: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      isCtaClicked: false
    };
  }

  manageCtaClick = () => {
    this.setState({
      isCtaClicked: true
    });
    this.props.createPlaylist();
  };

  render() {
    return (
      <StyledCreatePlaylistCta
        disabled={this.state.isCtaClicked}
        onClick={debounce(this.manageCtaClick, 1000, {
          leading: true,
          trailing: false
        })}
      >
        <span>CREATE PLAYLIST</span>
      </StyledCreatePlaylistCta>
    );
  }
}

const mapDispatchToProps = {
  createPlaylist
};

export default connect(
  null,
  mapDispatchToProps
)(CreatePlaylistCta);
