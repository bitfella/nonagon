import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Emoji from 'components/Emoji';
import Layout from 'components/Layout';

const NoMatchWrapper = styled.section`
  padding: 1.25rem;
`;

const NoMatchHeading = styled.h2`
  display: inline-block;
  margin: 0 0.5rem 0 0;
  color: ${props => props.theme.colors.d};
  font-size: 1.5rem;
  vertical-align: middle;
`;

const NoMatchSubheading = styled.h3`
  color: ${props => props.theme.colors.g};
  font-size: 1rem;
  font-weight: 700;
`;

const NoMatchText = styled.p`
  color: ${props => props.theme.colors.g};
  font-size: 0.875rem;

  a {
    color: ${props => props.theme.colors.c};
    font-weight: 700;
  }
`;

const NoMatch = () => (
  <Layout>
    <div isLayoutBodyWrapper>
      <NoMatchWrapper>
        <NoMatchHeading>
          Uh oh <Emoji symbol="🤕" label="face with head-bandage" />
        </NoMatchHeading>
        <NoMatchSubheading>Page not found!</NoMatchSubheading>
        <NoMatchText>
          <Link to="/">Click here</Link> to return to the home page!
        </NoMatchText>
      </NoMatchWrapper>
    </div>
  </Layout>
);

export default NoMatch;
