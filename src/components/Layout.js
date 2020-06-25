import React, { Component, Children } from 'react';
import { findDOMNode } from 'react-dom';
import styled, { withTheme } from 'styled-components/macro';
import { throttle } from 'lodash-es';
import Header from 'components/Header';

const AppWrapper = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.h};
`;

const LayoutWrapper = styled.div`
  max-width: ${props => props.theme.sizes.appMaxWidth}px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.b};
`;

const LayoutContentWrapper = styled.div`
  padding-top: ${props => props.theme.sizes.headerHeight}px;
`;

const LayoutBodyWrapper = styled.div`
  min-height: calc(100vh - ${props => props.theme.sizes.headerHeight}px);
  background-color: ${props => props.theme.colors.a};
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
`;

class Layout extends Component {
  constructor(props) {
    super(props);

    this.contentElm = React.createRef();
    this.headerHeight = this.props.theme.sizes.headerHeight;
    this.throttledHandleScroll = throttle(this.handleScroll, 5);
    this.state = {
      headerTopPos: 0
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.throttledHandleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.throttledHandleScroll);
  }

  handleScroll = () => {
    const contentElm = findDOMNode(this.contentElm.current),
      contentElmOffsetTop = contentElm.getBoundingClientRect().top;

    if (contentElmOffsetTop <= this.headerHeight) {
      this.setState({
        headerTopPos: contentElmOffsetTop - this.headerHeight
      });
    } else {
      this.setState({ headerTopPos: 0 });
    }
  };

  render() {
    const { children } = this.props;

    return (
      <AppWrapper>
        <LayoutWrapper>
          <Header topPos={this.state.headerTopPos} />
          <LayoutContentWrapper>
            {Children.map(children, child => {
              if (child && child.props.isLayoutBodyWrapper) {
                return (
                  <LayoutBodyWrapper ref={this.contentElm}>
                    {child.props.children}
                  </LayoutBodyWrapper>
                );
              }

              return child;
            })}
          </LayoutContentWrapper>
        </LayoutWrapper>
      </AppWrapper>
    );
  }
}

export default withTheme(Layout);
