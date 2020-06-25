export const SET_ACCESS_TOKEN = 'app/auth/SET_ACCESS_TOKEN';

export function setAccessToken(accessToken) {
  return {
    type: SET_ACCESS_TOKEN,
    accessToken
  };
}
