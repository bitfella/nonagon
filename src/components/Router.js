import React from 'react';
import { Route, Switch } from 'react-router';
import { routes } from 'config/routes';
import Main from 'containers/Main';
import Callback from 'components/Callback';
import About from 'components/About';
import Logout from 'containers/Logout';
import NoMatch from 'components/NoMatch';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path={routes.about} component={About} />
    <Route path={routes.logout} component={Logout} />
    <Route path={routes.callback} component={Callback} />
    <Route component={NoMatch} />
  </Switch>
);

export default Router;
