import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { ThemeProvider } from 'styled-components/macro';
import { GlobalStyles, theme } from 'components/AppStyles';
import Router from 'components/Router';

const App = ({ history }) => (
  <ConnectedRouter history={history}>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </ConnectedRouter>
);

App.propTypes = {
  history: PropTypes.object
};

export default App;
