import React from 'react';
import { Redirect } from 'react-router-dom';
import { appAccessToken } from 'config/spotify';
import { getHashKeyValue } from 'utils';
import Error from 'components/Error';
import Layout from 'components/Layout';

const Callback = () => {
  const accessToken = getHashKeyValue('access_token');

  if (accessToken) {
    localStorage.setItem(appAccessToken, accessToken);

    return <Redirect to="/" />;
  }

  return (
    <Layout>
      <div isLayoutBodyWrapper>
        <Error />
      </div>
    </Layout>
  );
};

export default Callback;
