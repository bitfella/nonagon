import React, { Component } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const LogoWrapper = styled.h1`
  display: inline-block;
  margin: 0;
  color: ${props => (props.color ? props.color : props.theme.colors.a)};
  font-weight: 600;

  &::before,
  &::after {
    vertical-align: middle;
  }

  &::before {
    content: '{ ';
  }

  &::after {
    content: ' }';
  }

  span {
    display: inline-block;
    overflow: hidden;
    vertical-align: middle;

    &:nth-child(1),
    &:nth-child(3) {
      max-width: 100%;
      transition: all 0.5s ease-in-out;
    }

    &:nth-child(2) {
      max-width: 0;
      transition: max-width 0.5s ease-in-out 0.25s;
    }
  }

  ${props =>
    props.isCompact
      ? `
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.25rem;
  `
      : `font-size: 2rem;`}
  ${props =>
    props.isActive
      ? `
    span {
      &:nth-child(1), &:nth-child(3) {
        opacity: 0;
        max-width: 0;        
      }
      
      &:nth-child(2) {
        max-width: 100%;
      } 
    }    
  `
      : null}
`;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.timer = null;
    this.state = {
      isActive: false
    };
  }

  static propTypes = {
    color: PropTypes.string,
    isCompact: PropTypes.bool
  };

  static defaultProps = {
    color: '#fff',
    isCompact: false
  };

  componentWillUnmount() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        isActive: true
      });
    }, 2000);
  }

  render() {
    const { color, isCompact } = this.props;

    return (
      <LogoWrapper
        color={color}
        isActive={this.state.isActive}
        isCompact={isCompact}
      >
        <span>non</span>
        <span>9</span>
        <span>agon</span>
      </LogoWrapper>
    );
  }
}

export default Logo;
