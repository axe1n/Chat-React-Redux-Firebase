import {
  GET_GISTS_SUCCESS,
  GET_GISTS_REQUEST,
  GET_GISTS_FAILURE,
} from './actions';

const initialState = {
  gistsList: [],
  status: 'idle',
  error: null,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_REQUEST:
      return { ...state, status: 'request' };

    case GET_GISTS_SUCCESS:
      return {
        ...state,
        gistsList: [...action.gistsList],
        status: 'success',
      };

    case GET_GISTS_FAILURE:
      return { ...state, status: 'failure', error: action.error };

    default:
      return state;
  }
};
