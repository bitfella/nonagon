import React, { Component } from 'react';
import styled from 'styled-components/macro';
import CreatePlaylistCta from 'containers/CreatePlaylistCta';
import CreatePlaylistOptionsPanel from 'components/CreatePlaylistOptionsPanel';
import CreatePlaylistOptionsToggler from 'components/CreatePlaylistOptionsToggler';

const TopTracksActionsWrapper = styled.footer`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  max-width: ${props => props.theme.sizes.appMaxWidth}px;
  margin: 0 auto;
`;

const TopTracksActionsInner = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  padding: 1rem 0.25rem 1rem 1rem;
  background-color: ${props => props.theme.colors.f};
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
`;

class TopTracksActions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelIsOpen: false
    };
  }

  setPanelVisibility = (isOpen = false) => {
    this.setState({
      panelIsOpen: isOpen
    });
  };

  togglePanelVisibility = () => {
    this.setPanelVisibility(!this.state.panelIsOpen);
  };

  render() {
    const { panelIsOpen } = this.state;

    return (
      <TopTracksActionsWrapper>
        <CreatePlaylistOptionsPanel
          isOpen={panelIsOpen}
          setPanelVisibility={this.setPanelVisibility}
        />
        <TopTracksActionsInner>
          <CreatePlaylistCta />
          <CreatePlaylistOptionsToggler
            panelIsOpen={panelIsOpen}
            onClick={this.togglePanelVisibility}
          />
        </TopTracksActionsInner>
      </TopTracksActionsWrapper>
    );
  }
}

export default TopTracksActions;
