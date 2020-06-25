import { routes } from 'config/routes';

export const appAccessToken = 'accessToken';
export const appTimeRange = 'timeRange';
export const appRedirectURI = window.location.origin + routes.callback;
export const spotifyWebApiBasePath = 'https://api.spotify.com/v1';
export const spotifyWebApiProfileEndpoint = `${spotifyWebApiBasePath}/me`;
export const spotifyWebApiUserTopTracksEndpoint = `${spotifyWebApiBasePath}/me/top/tracks`;
export const spotifyWebApiGetRecommendationsEndpoint = `${spotifyWebApiBasePath}/recommendations`;
export const spotifyWebApiCreatePlaylistEndpoint = `${spotifyWebApiBasePath}/users/___USER_ID___/playlists`;
export const spotifyWebApiAddTrackToPlaylistEndpoint = `${spotifyWebApiBasePath}/playlists/___PLAYLIST_ID___/tracks`;
export const spotifyWebApiGetPlaylistImagesEndpoint = `${spotifyWebApiBasePath}/playlists/___PLAYLIST_ID___/images`;
export const spotifyWebApiTimeRanges = [
  'short_term',
  'medium_term',
  'long_term'
];
export const spotifyWebApiInitialRefinementValue = [0.0, 1.0];
export const spotifyWebApiScopes = [
  'user-top-read',
  'playlist-modify-public',
  'playlist-modify-private'
];
export const spotifyWebApiScopesGuideURI =
  'https://developer.spotify.com/documentation/general/guides/scopes/';
export const spotifyAuthURI = 'https://accounts.spotify.com/authorize';
export const spotifyLoginURI =
  `${spotifyAuthURI}` +
  `?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}` +
  `&response_type=token` +
  `&scope=${encodeURIComponent(spotifyWebApiScopes.join(' '))}` +
  `&redirect_uri=${appRedirectURI}`;
export const spotifyLogoutURI = 'https://accounts.spotify.com/logout';
