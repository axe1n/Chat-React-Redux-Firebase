import { ADD_MESSAGE, DELETE_CHAT_MESSAGES } from './actions';

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const currentList = state.messageList[action.chatId] || [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [action.chatId]: [
            ...currentList,
            { ...action.message, id: `${action.chatId}${currentList.length}` },
          ],
        },
      };

    case DELETE_CHAT_MESSAGES:
      delete state.messageList[`${action.chatId}`];
      return { ...state };

    default:
      return state;
  }
};
