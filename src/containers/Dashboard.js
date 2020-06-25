import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash-es';
import { getUser } from 'actions/user';
import {
  getToken,
  getUserId,
  getUserImages,
  userLoading,
  userError,
  getPlaylistTracks
} from 'selectors';
import handleError from 'services/handleError';
import Layout from 'components/Layout';
import Welcome from 'containers/Welcome';
import Confirmation from 'containers/Confirmation';
import Tastes from 'containers/Tastes';
import Spinner from 'components/Spinner';

export class Dashboard extends Component {
  static propTypes = {
    accessToken: PropTypes.string,
    userId: PropTypes.string,
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
      userId,
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

    if (userId && !isEmpty(userId) && userImages && !isEmpty(userImages)) {
      return (
        <Layout>
          {isEmpty(playlistTracks) && (
            <Welcome userId={userId} userImages={userImages} />
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
  userId: getUserId(state),
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
