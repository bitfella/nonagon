import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import * as Sentry from '@sentry/browser';
import App from 'components/App';
import configureStore, { history } from 'configureStore';

Sentry.init({ dsn: "https://004eeaed176f483abd20cb735c00f174@o412640.ingest.sentry.io/5290599" });

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
