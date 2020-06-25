import React, { Component } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import ReactSlider from 'react-slider';
import RangeCaption from 'components/RangeCaption';

const RangeSliderWrapper = styled.div`
  position: relative;
`;

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 24px;
  touch-action: none;
`;

const StyledThumb = styled.div`
  height: 24px;
  line-height: 24px;
  width: 24px;
  text-align: center;
  background-color: ${props => props.theme.colors.a};
  color: #fff;
  border-radius: 50%;
  cursor: grab;
`;

const Thumb = props => <StyledThumb {...props} />;

const StyledTrack = styled.div`
  top: 9px;
  bottom: 9px;
  background: ${props =>
    props.index === 1
      ? props.theme.colors.apple.systemBlue
      : props.theme.colors.f};
  border-radius: 500px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

class RangeSlider extends Component {
  static propTypes = {
    value: PropTypes.array.isRequired,
    hasCaption: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  };

  state = {
    value: this.props.value
  };

  handleOnChange = value => {
    this.setState({ value });
    this.props.onChange(value);
  };

  render() {
    return (
      <RangeSliderWrapper>
        {this.props.hasCaption && <RangeCaption value={this.state.value} />}
        <StyledSlider
          ariaLabel={['min value', 'max value']}
          value={this.props.value}
          pearling={true}
          max={1.0}
          min={0.0}
          minDistance={0.1}
          renderTrack={Track}
          renderThumb={Thumb}
          step={0.1}
          onChange={this.handleOnChange}
        />
      </RangeSliderWrapper>
    );
  }
}

export default RangeSlider;
