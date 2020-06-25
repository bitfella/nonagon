import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import { getToken } from 'selectors';
import { routes } from 'config/routes';
import Emoji from 'components/Emoji';

const MainNavWrapper = styled.div`
  position: relative;
  z-index: 9;
`;

const MainNavTogglerFloating = css`
  background-color: ${props => props.theme.colors.f};
`;

const MainNavToggler = styled.button`
  display: block;
  width: 2.25rem;
  height: 2.25rem;
  line-height: 2.25rem;
  text-align: center;
  background-color: ${props => props.theme.colors.a};
  border-radius: 500px;
  border: none;
  cursor: pointer;

  ${props => props.isFloating && MainNavTogglerFloating}
`;

const MainNavContentFloating = css`
  background-color: ${props => props.theme.colors.f};
`;

const MainNavContentOpen = css`
  opacity: 1;
  visibility: visible;
`;

const MainNavContent = styled.div`
  position: absolute;
  top: 2rem;
  right: 0;
  padding: 0.25rem 0;
  background-color: ${props => props.theme.colors.a};
  border-radius: 1rem;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: all 0.25s ease-in-out;

  ${props => props.isOpen && MainNavContentOpen}
  ${props => props.isFloating && MainNavContentFloating}
`;

const MainNavItem = styled(NavLink)`
  display: block;
  padding: 0.25rem 0.75rem;
  color: ${props => props.theme.colors.g};
  font-weight: 700;
  font-size: 0.875rem;
  text-decoration: none;

  &.active {
    color: ${props => props.theme.colors.d};
  }
`;

export class MainNav extends Component {
  static propTypes = {
    isFloating: PropTypes.bool,
    token: PropTypes.string
  };

  static defaultProps = {
    isFloating: false
  };

  constructor(props) {
    super(props);

    this.mainNavElem = React.createRef();
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleClickOutside = event => {
    if (
      this.mainNavElem.current &&
      !this.mainNavElem.current.contains(event.target)
    ) {
      this.setState({
        isOpen: false
      });
    }
  };

  handleScroll = () => {
    this.setState({
      isOpen: false
    });
  };

  toggleMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const { isFloating, token } = this.props;

    return (
      <MainNavWrapper className={this.props.className} ref={this.mainNavElem}>
        <MainNavToggler
          aria-label="toggle menu"
          isFloating={isFloating}
          onClick={this.toggleMenu}
        >
          <Emoji symbol="🍔" label="hamburger" />
        </MainNavToggler>
        <MainNavContent isFloating={isFloating} isOpen={this.state.isOpen}>
          <MainNavItem exact to="/">
            Home
          </MainNavItem>
          <MainNavItem to={routes.about}>About</MainNavItem>
          {token && <MainNavItem to={routes.logout}>Logout</MainNavItem>}
        </MainNavContent>
      </MainNavWrapper>
    );
  }
}

const mapStateToProps = state => ({
  token: getToken(state)
});

export default connect(
  mapStateToProps,
  null
)(MainNav);
