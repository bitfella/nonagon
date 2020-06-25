import React, { Component } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import CreatePlaylistOptionsList from 'containers/CreatePlaylistOptionsList';

const PlaylistOptionsPanel = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9;
  max-width: ${props => props.theme.sizes.appMaxWidth}px;
  margin: 0 auto;
  padding: 1rem 1rem 6rem 1rem;
  box-sizing: border-box;
  color: ${props => props.theme.colors.a};
  background-color: ${props => props.theme.colors.g};
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
  transition: transform 0.5s ease-out;
`;

class CreatePlaylistOptionsPanel extends Component {
  static propTypes = {
    isOpen: PropTypes.bool
  };

  static defaultProps = {
    isOpen: false
  };

  constructor(props) {
    super(props);

    this.panelElem = React.createRef();
    this.openPos = '0';
    this.closePos = '100%';
    this.closeThreshold = 70;
    this.state = {
      position: 0,
      touchStart: 0,
      touchEnd: 0
    };
  }

  closePanel = () => {
    if (this.props.isOpen) this.props.setPanelVisibility(false);
  };

  handleClickOutside = event => {
    if (
      this.panelElem.current &&
      !this.panelElem.current.contains(event.target) &&
      !(
        event.target.closest('button') &&
        event.target.closest('button').id === 'createPlaylistOptionsToggler'
      )
    ) {
      this.closePanel();
    }
  };

  handleScroll = () => {
    this.closePanel();
  };

  panelShouldClose = () => {
    const { touchEnd, touchStart } = this.state;

    return touchEnd - touchStart >= this.closeThreshold;
  };

  tapPanel = event => {
    if (event.target === this.panelElem.current) {
      this.setState(() => ({
        touchStart: event.changedTouches[0].screenY
      }));
    }
  };

  dragPanel = event => {
    if (this.props.isOpen) event.preventDefault();

    if (event.target === this.panelElem.current) {
      const touchThumb =
        event.changedTouches[0].screenY - this.state.touchStart;

      this.setState(() => ({
        position: touchThumb < 0 ? this.openPos : `${touchThumb}px`
      }));
    }
  };

  releasePanel = event => {
    if (event.target === this.panelElem.current) {
      this.setState(
        {
          touchEnd: event.changedTouches[0].screenY
        },
        () => {
          if (this.panelShouldClose()) {
            this.setState(() => ({
              position: this.closePos
            }));

            this.closePanel();
          } else {
            this.setState(() => ({
              position: this.openPos
            }));
          }
        }
      );
    }
  };

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll);
    document.addEventListener('touchstart', this.tapPanel);
    document.addEventListener('touchmove', this.dragPanel, { passive: false });
    document.addEventListener('touchend', this.releasePanel);
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
    document.removeEventListener('touchstart', this.tapPanel);
    document.removeEventListener('touchmove', this.dragPanel);
    document.removeEventListener('touchend', this.releasePanel);
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setState(() => ({
        position: this.props.isOpen ? this.openPos : this.closePos
      }));
    }
  }

  render() {
    const { position } = this.state;

    return (
      <PlaylistOptionsPanel
        ref={this.panelElem}
        style={{
          transform: `translateY(${
            this.props.isOpen ? position : this.closePos
          })`
        }}
      >
        <CreatePlaylistOptionsList />
      </PlaylistOptionsPanel>
    );
  }
}

export default CreatePlaylistOptionsPanel;
