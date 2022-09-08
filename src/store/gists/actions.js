export const GET_GISTS_SUCCESS = 'GISTS::GET_GISTS_SUCCESS';
export const GET_GISTS_REQUEST = 'GISTS::GET_GISTS_REQUEST';
export const GET_GISTS_FAILURE = 'GISTS::GET_GISTS_FAILURE';

export const getGistsRequest = () => ({
  type: GET_GISTS_REQUEST,
});

export const getGistsSucces = (gistsList) => ({
  type: GET_GISTS_SUCCESS,
  gistsList,
});

export const getGistsFailure = (error) => ({
  type: GET_GISTS_FAILURE,
  error,
});
