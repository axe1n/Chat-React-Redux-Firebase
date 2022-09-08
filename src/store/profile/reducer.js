import { CHANGE_NAME } from './actions';

const initialState = {
  name: '@username',
  BOT: 'bot',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NAME:
      return { ...state, name: action.payloud };
    default:
      return state;
  }
};
