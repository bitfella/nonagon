import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import configureStore, { history } from 'configureStore';

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
