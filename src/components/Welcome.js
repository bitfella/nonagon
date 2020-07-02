import React, { Component } from 'react';
import { sample } from 'lodash-es';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components/macro';
import Avatar from 'components/Avatar';
import { getAlternativeImageSrc } from 'utils';

export const greetingsList = [
  'Howdy',
  'Welcome',
  'Hey',
  'Hail',
  'Ciao',
  'Aloha'
];

const WelcomeWrapper = styled.div`
  padding-bottom: 0.8rem;
  background-color: ${props => props.theme.colors.b};
`;

const Message = styled.h3`
  margin-top: 0.5rem;
  margin-bottom: 0;
  color: ${props => props.theme.colors.a};
  font-size: 1rem;
  font-weight: 400;
  text-align: center;

  span {
    color: ${props => props.theme.colors.c};
    font-weight: 600;
  }
`;

export class Welcome extends Component {
  static propTypes = {
    userDisplayName: PropTypes.string.isRequired,
    userImages: PropTypes.array,
    greeting: PropTypes.string
  };

  render() {
    const { userDisplayName, userImages, greeting } = this.props;
    const salute = greeting ? greeting : sample(greetingsList);

    if (userDisplayName && userImages) {
      return (
        <WelcomeWrapper>
          {userImages && userImages.length >= 1 ? (
            <Avatar src={userImages[0].url} alt={userDisplayName} />
          ) : (
              <Avatar
                src={getAlternativeImageSrc(
                  userDisplayName,
                  300,
                  300,
                  this.props.theme.colors.f,
                  this.props.theme.colors.g,
                  this.props.theme.fonts.body,
                  '5rem'
                )}
                alt={userDisplayName}
              />
            )}
          <Message>
            {salute}, <span>{userDisplayName}</span>!
          </Message>
        </WelcomeWrapper>
      );
    }

    return null;
  }
}

export default withTheme(Welcome);
