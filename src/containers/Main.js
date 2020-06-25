import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setAccessToken } from 'actions/auth';
import { getToken } from 'selectors/auth';
import { appAccessToken } from 'config/spotify';
import Dashboard from 'containers/Dashboard';
import Login from 'components/Login';

export class Main extends Component {
  static propTypes = {
    accessToken: PropTypes.string,
    setToken: PropTypes.func
  };

  render() {
    const accessToken = localStorage.getItem(appAccessToken);

    if (accessToken) {
      if (!this.props.accessToken || this.props.accessToken !== accessToken) {
        this.props.setToken(accessToken);
        return null;
      }

      return <Dashboard />;
    }

    return <Login />;
  }
}

const mapStateToProps = state => ({
  accessToken: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch(setAccessToken(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
