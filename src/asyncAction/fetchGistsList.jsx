import {
  getGistsSucces,
  getGistsRequest,
  getGistsFailure,
} from '../store/gists/actions';

export const fetchGistsList = (url) => async (dispatch) => {
  dispatch(getGistsRequest());

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const result = await response.json();
    dispatch(getGistsSucces(result));
  } catch (error) {
    dispatch(getGistsFailure(error.message));
  }
};
