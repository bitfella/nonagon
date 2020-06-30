import React from 'react';
import styled from 'styled-components/macro';
import {
  spotifyWebApiScopes,
  spotifyWebApiScopesGuideURI
} from 'config/spotify';
import Emoji from 'components/Emoji';
import Layout from 'components/Layout';

const AboutWrapper = styled.article`
  color: ${props => props.theme.colors.g};
  padding: 1.5rem;
`;

const AboutSection = styled.section`
  p,
  ul {
    margin: 0.625rem 0;
    font-size: 0.875rem;

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }

  a {
    color: ${props => props.theme.colors.c};
    font-weight: 600;
  }
`;

const AboutHeading = styled.h3`
  margin-bottom: 0.625rem;
  color: ${props => props.theme.colors.g};
  font-size: 1rem;
`;

const AboutSubHeading = styled.h4`
  margin-bottom: 0.625rem;
  color: ${props => props.theme.colors.g};
  font-size: 0.875rem;
`;

const HighlightNonagon = styled.span`
  color: ${props => props.theme.colors.d};
  font-weight: 600;
`;

const HighlightSpotify = styled.span`
  color: ${props => props.theme.colors.spotify.green};
  font-weight: 600;
`;

const About = () => (
  <Layout>
    <div isLayoutBodyWrapper>
      <AboutWrapper>
        <AboutSection>
          <p>
            <HighlightNonagon>Nonagon</HighlightNonagon> is a little web mobile
            app that helps you creating{' '}
            <HighlightSpotify>Spotify</HighlightSpotify> playlists based upon
            your most listened songs.
          </p>
          <p>
            In cheap words, it reads your Spotify top tracks and generates
            playlists made of Spotify recommendations based on your personal
            tastes.
          </p>
          <AboutHeading>
            Playlist creation options{' '}
            <Emoji symbol="🎛️" label="control knobs" />
          </AboutHeading>
          <p>
            Nonagon gives you the ability to customize your generated playlist
            adjusting the following options in the control panel:
          </p>
          <AboutSubHeading>Make playlist public</AboutSubHeading>
          <p>
            By default, Nonagon playlists are private. If you wish to create
            public playlists, turn the switch on. Please be aware that you can
            change again this value whenever you wish, in your Spotify app.
          </p>
          <AboutSubHeading>Playlist danceability</AboutSubHeading>
          <p>
            Danceability describes how suitable a track is for dancing based on
            a combination of musical elements including tempo, rhythm stability,
            beat strength, and overall regularity. A value of 0% is least
            danceable and 100% is most danceable.
          </p>
          <AboutSubHeading>Playlist energy</AboutSubHeading>
          <p>
            Energy is a measure from 0% to 100% and represents a perceptual
            measure of intensity and activity. Typically, energetic tracks feel
            fast, loud, and noisy. For example, death metal has high energy,
            while a Bach prelude scores low on the scale. Perceptual features
            contributing to this attribute include dynamic range, perceived
            loudness, timbre, onset rate, and general entropy.
          </p>
          <AboutSubHeading>Playlist valence</AboutSubHeading>
          <p>
            A measure from 0% to 100% describing the musical positiveness
            conveyed by a track. Tracks with high valence sound more positive
            (e.g. happy, cheerful, euphoric), while tracks with low valence
            sound more negative (e.g. sad, depressed, angry).
          </p>
          <AboutHeading>
            Why Nonagon? <Emoji symbol="🤔" label="thinking face" />
          </AboutHeading>
          <p>
            Nonagon was named after one of my favourite records, &ldquo;Nonagon
            Infinity&rdquo; by aussie psych rockers{' '}
            <strong>King Gizzard &amp; the Lizard Wizard</strong>{' '}
            <Emoji symbol="🤘" label="rock on" />
          </p>
          <AboutHeading>
            Boring technical stuff <Emoji symbol="😴" label="sleeping face" />
          </AboutHeading>
          <p>
            Nonagon is a client side web application: it does not have any
            backend and it relies totally on Spotify Web Apis to get data. It
            does not save your personal data wherever, although it does save
            playlist on your Spotify account.
          </p>
          <p>
            Nonagon makes use of the following Spotify authorization scopes:
          </p>
          <ul>
            {spotifyWebApiScopes.map((scope, i) => (
              <li key={i}>{scope}</li>
            ))}
          </ul>
          <p>
            Learn more about Spotify Scopes{' '}
            <a
              href={spotifyWebApiScopesGuideURI}
              rel="noopener noreferrer"
              target="_blank"
              title="Spotify Scopes"
            >
              here
            </a>
            .
          </p>
          <AboutHeading>
            Privacy <Emoji symbol="🔐" label="locked with key" />
          </AboutHeading>
          <p>
            Nonagon does not save any cookie on your browser (apart from Spotify API ones) and does not use
            any kind of tracking platform.
          </p>
          <p>
            Nonagon just saves a Spotify authorization token and some of your
            app preferences on local storage: this is mandatory to make the app
            work. You can easily delete them clearing your browser data.
          </p>
        </AboutSection>
      </AboutWrapper>
    </div>
  </Layout>
);

export default About;
