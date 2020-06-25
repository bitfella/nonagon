import React from 'react';
import styled, { css } from 'styled-components/macro';
import PropTypes from 'prop-types';
import Logo from 'components/Logo';
import MainNav from 'components/MainNav';

const HeaderWrapper = styled.header.attrs(props => ({
  style: { top: `${props.topPos}px` }
}))`
  position: fixed;
  right: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  height: ${props => props.theme.sizes.headerHeight}px;
  max-width: ${props => props.theme.sizes.appMaxWidth}px;
  margin: 0 auto;
  border-top: 10px solid ${props => props.theme.colors.h};
  box-sizing: border-box;
`;

const HeaderInner = styled.div`
  position: relative;
  height: 100%;
  text-align: center;

  &::before,
  &::after {
    position: absolute;
    top: 0;
    width: 2rem;
    height: 2rem;
    background: transparent;
    content: '';
  }

  &::before {
    left: 0;
    border-top-left-radius: 2rem;
    box-shadow: -1rem -1rem 0 1rem ${props => props.theme.colors.h};
  }

  &::after {
    right: 0;
    border-top-right-radius: 2rem;
    box-shadow: 1rem -1rem 0 1rem ${props => props.theme.colors.h};
  }
`;

const MainNavWrapperFloating = css`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 10;

  @media (min-width: ${props => props.theme.sizes.appMaxWidth + 1}px) {
    right: calc(
      100vw * 0.5 - ${props => props.theme.sizes.appMaxWidth}px * 0.5 + 1rem
    );
  }
`;

const MainNavWrapper = styled(props => <MainNav {...props} />)`
  position: absolute;
  top: 0.5rem;
  right: 1rem;

  ${props => props.isFloating && MainNavWrapperFloating}
`;

const Header = ({ topPos }) => (
  <HeaderWrapper topPos={topPos}>
    <HeaderInner>
      <Logo isCompact />
      <MainNavWrapper isFloating={topPos <= -120} />
    </HeaderInner>
  </HeaderWrapper>
);

Header.propTypes = {
  topPos: PropTypes.number
};

Header.defaultProps = {
  topPos: 0
};

export default Header;