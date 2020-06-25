import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import Emoji from 'components/Emoji';

const ErrorWrapper = styled.section`
  padding: 1.25rem;
`;

const ErrorHeading = styled.h2`
  display: inline-block;
  margin: 0 0.5rem 0 0;
  color: ${props => props.theme.colors.d};
  font-size: 1.5rem;
  vertical-align: middle;
`;

const ErrorText = styled.p`
  color: ${props => props.theme.colors.g};
  font-size: 0.875rem;
  font-weight: 700;
`;

const ErrorMessage = styled(ErrorText)`
  color: ${props => props.theme.colors.c};
`;

const ReloadButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 2rem;
  padding: 1rem;
  color: ${props => props.theme.colors.a};
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.125rem;
  background-color: ${props => props.theme.colors.d};
  border: none;
  border-radius: 500px;
  cursor: pointer;
`;

function reloadApp() {
  window.location.replace('/');
}

const Error = ({ data }) => {
  return (
    <ErrorWrapper>
      <ErrorHeading>
        Too bad! <Emoji symbol="🤕" label="face with head-bandage" />
      </ErrorHeading>
      <ErrorText>Unfortunately something went wrong</ErrorText>
      {data && data.message && data.name && (
        <ErrorMessage>{data.message + data.name}</ErrorMessage>
      )}
      <ReloadButton onClick={reloadApp}>PLEASE TRY AGAIN</ReloadButton>
    </ErrorWrapper>
  );
};

Error.propTypes = {
  data: PropTypes.object
};

export default Error;
