export const getUserData = state => state.user.data;
export const getUserDisplayName = state => state.user.data.display_name;
export const getUserId = state => state.user.data.id;
export const getUserImages = state => state.user.data.images;
export const userLoading = state => state.user.loading;
export const userError = state => state.user.error;
