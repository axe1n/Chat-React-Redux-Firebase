import { ADD_CHAT, DELETE_CHAT } from './actions';

const initialState = {
  chatList: [{ id: 'id0', name: 'Общий' }],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      let id = `id${state.chatList.length}`;
      let i = state.chatList.length - 1;

      function checkId() {
        const isIdUse = !!state.chatList.find((chat) => {
          return chat.id === id;
        });

        if (isIdUse) {
          id = `id${i++}`;
          checkId();
        }
      }

      checkId();

      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: id,
            name: action.name,
          },
        ],
      };

    case DELETE_CHAT:
      return {
        chatList: state.chatList.filter((chat) => chat.id !== action.chatId),
      };
    default:
      return state;
  }
};
