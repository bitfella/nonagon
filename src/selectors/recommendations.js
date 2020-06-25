export const getRecommendationsRefinements = state =>
  state.recommendations.refinements;
export const getRecommendationsDanceability = state =>
  state.recommendations.refinements.danceability;
export const getRecommendationsEnergy = state =>
  state.recommendations.refinements.energy;
export const getRecommendationsValence = state =>
  state.recommendations.refinements.valence;
export const getRecommendedTracksURIs = state =>
  state.recommendations.data.map(track => track.uri).slice(0, 100);
export const recommendationsLoading = state => state.recommendations.loading;
export const recommendationsError = state => state.recommendations.error;
