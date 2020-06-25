import { spotifyLoginURI } from 'config/spotify';
import { goToURI } from 'utils';

function redirectToSpotifyLogin() {
  goToURI(spotifyLoginURI);
}

export default redirectToSpotifyLogin;
