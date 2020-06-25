import React from 'react';
import Error from 'components/Error';
import handleError, { isUnauthorized } from './handleError';
import redirectToSpotifyLogin from 'services/redirectToSpotifyLogin';

describe('isUnauthorized function', () => {
  it('Should return false if status is not 401', () => {
    expect(isUnauthorized(404)).toEqual(false);
  });

  it('Should return true if status is 401', () => {
    expect(isUnauthorized(401)).toEqual(true);
  });
});

describe('handleError function', () => {
  it('Should return <Error /> component if user is authorized', () => {
    expect(handleError({ status: 404 })).toEqual(<Error />);
  });

  it('Should redirect to Spotify login if user is unauthorized', () => {
    expect(handleError({ status: 401 })).toEqual(
      redirectToSpotifyLogin.default
    );
    expect(localStorage.clear).toHaveBeenCalled();
  });
});
