import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const RangeCaptionWrapper = styled.span`
  position: absolute;
  top: -1.75rem;
  right: 0;
  font-size: 0.8125rem;
`;

const RangeCaption = ({ value }) => {
  if (value.length === 2) {
    return (
      <RangeCaptionWrapper>{`${Math.floor(value[0] * 100)}% / ${Math.floor(
        value[1] * 100
      )}%`}</RangeCaptionWrapper>
    );
  }

  return null;
};

RangeCaption.propTypes = {
  value: PropTypes.array.isRequired
};

export default RangeCaption;
