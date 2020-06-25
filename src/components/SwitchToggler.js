import React from 'react';
import styled, { withTheme } from 'styled-components/macro';
import PropTypes from 'prop-types';
import Switch from 'react-switch';

const SwitchWrapper = styled(Switch)`
  vertical-align: middle;
`;

const SwitchLabel = styled.label`
  display: inline-block;
  margin: 0 0.5rem;
  vertical-align: middle;
  font-size: 0.8125rem;
`;

const SwitchToggler = props => (
  <>
    <SwitchWrapper
      id={props.id}
      checked={props.checked}
      checkedIcon={false}
      uncheckedIcon={false}
      width={44}
      height={26}
      handleDiameter={24}
      onColor={props.theme.colors.apple.systemGreen}
      offColor={props.theme.colors.f}
      onChange={props.onChange}
    />
    <SwitchLabel htmlFor={props.id}>{props.checked ? `ON` : `OFF`}</SwitchLabel>
  </>
);

SwitchToggler.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default withTheme(SwitchToggler);
