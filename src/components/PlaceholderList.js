import React from 'react';
import PropTypes from 'prop-types';
import PlaceholderItem from 'components/PlaceholderItem';

const PlaceholderList = ({ items }) =>
  [...Array(items)].map((e, i) => <PlaceholderItem key={i} />);

PlaceholderList.propTypes = {
  items: PropTypes.number
};

PlaceholderList.defaultProps = {
  items: 3
};

export default PlaceholderList;
