import React from 'react';
import redirectToSpotifyLogin from 'services/redirectToSpotifyLogin';
import Error from 'components/Error';

export const isUnauthorized = status => status === 401;

function handleError(error) {
  if (isUnauthorized(error.status)) {
    localStorage.clear();
    return redirectToSpotifyLogin();
  }

  return <Error />;
}

export default handleError;
