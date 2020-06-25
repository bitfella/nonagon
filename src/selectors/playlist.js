export const getPlaylistData = state => state.playlist.data;
export const getPlaylistID = state => state.playlist.data.id;
export const getPlaylistTracks = state => state.playlist.tracks;
export const getPlaylistImages = state => state.playlist.images;
export const getPlaylistURI = state => state.playlist.data.uri;
export const isPlaylistPublic = state => state.playlist.isPublic;
export const playlistLoading = state =>
  Object.keys(state.playlist.loading).some(i => state.playlist.loading[i]);
export const playlistError = state =>
  Object.keys(state.playlist.error).some(i => state.playlist.error[i]);
export const createPlaylistLoading = state => state.playlist.loading.create;
export const createPlaylistError = state => state.playlist.error.create;
export const addTrackToPlaylistLoading = state =>
  state.playlist.loading.addTrack;
export const addTrackToPlaylistError = state => state.playlist.error.addTrack;
export const getPlaylistImagesLoading = state =>
  state.playlist.loading.getImages;
export const getPlaylistImagesError = state => state.playlist.error.getImages;
