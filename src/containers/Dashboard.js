import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash-es';
import { getUser } from 'actions/user';
import {
  getToken,
  getUserDisplayName,
  getUserImages,
  userLoading,
  userError,
  getPlaylistTracks
} from 'selectors';
import handleError from 'services/handleError';
import Layout from 'components/Layout';
import Welcome from 'components/Welcome';
import Confirmation from 'containers/Confirmation';
import Tastes from 'containers/Tastes';
import Spinner from 'components/Spinner';

export class Dashboard extends Component {
  static propTypes = {
    accessToken: PropTypes.string,
    userDisplayName: PropTypes.string,
    userImages: PropTypes.array,
    userLoading: PropTypes.bool,
    userError: PropTypes.object,
    getUser: PropTypes.func
  };

  componentDidMount() {
    this.props.getUser(this.props.accessToken);
  }

  render() {
    const {
      userDisplayName,
      userImages,
      userLoading,
      userError,
      playlistTracks
    } = this.props;

    if (userError) {
      return handleError(userError);
    }

    if (userLoading) {
      return <Spinner />;
    }

    if (userDisplayName && userImages) {
      return (
        <Layout>
          {isEmpty(playlistTracks) && (
            <Welcome userDisplayName={userDisplayName} userImages={userImages} />
          )}
          <div isLayoutBodyWrapper>
            {isEmpty(playlistTracks) ? <Tastes /> : <Confirmation />}
          </div>
        </Layout>
      );
    }

    return null;
  }
}

const mapStateToProps = state => ({
  accessToken: getToken(state),
  userDisplayName: getUserDisplayName(state),
  userImages: getUserImages(state),
  userLoading: userLoading(state),
  userError: userError(state),
  playlistTracks: getPlaylistTracks(state)
});

const mapDispatchToProps = dispatch => ({
  getUser: token => dispatch(getUser(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
