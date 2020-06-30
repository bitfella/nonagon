import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from 'components/App';
import configureStore, { history } from 'configureStore';

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV
});

const store = configureStore();

history.listen(() => {
  window.scrollTo(0, 0);
});

render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);
