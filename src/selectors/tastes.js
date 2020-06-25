export const getTastesTimeRange = state => state.tastes.timeRange;
export const getTastesTracks = state => state.tastes.tracks;
export const getTastesTracksIDs = state =>
  state.tastes.tracks.items.map(track => track.id).slice(0, 5);
export const tastesLoading = state => state.tastes.loading;
export const tastesError = state => state.tastes.error;
