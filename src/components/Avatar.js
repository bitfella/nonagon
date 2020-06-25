import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const AvatarWrapper = styled.picture`
  display: block;
  width: 150px;
  height: 150px;
  margin: 0 auto;

  svg {
    width: 100%;
    height: auto;

    polygon {
      stroke: ${props => props.theme.colors.a};
    }
  }
`;

const Avatar = ({ src, alt }) => (
  <AvatarWrapper>
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-label={alt}
    >
      <defs>
        <pattern
          id="img"
          patternUnits="userSpaceOnUse"
          width="100"
          height="100"
        >
          <image href={src} x="6" y="4" width="89" height="89" />
        </pattern>
      </defs>
      <polygon
        fill="url(#img)"
        strokeWidth="2"
        points="50 3.5 79.5 14.5 95.5 42 90 73 66 93.5 34.5 93.5 10 73 5 42 20 15"
      />
    </svg>
  </AvatarWrapper>
);

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string
};

export default Avatar;
