import { ADD_CHAT, DELETE_CHAT } from './actions';

const initialState = {
  chatList: [{ id: 'id0', name: 'Общий' }],
};

const getMaxIdNum = (chatList) => {
  const idList = chatList.map((chat) => chat.id.slice(2));
  const maxId = idList.reduce((maxId, id) => (maxId > id ? maxId : id));
  return +maxId;
};

const getNewId = (chatList) => {
  if (chatList.length === 0) {
    const firstId = `id0`;
    return firstId;
  }

  let maxId = getMaxIdNum(chatList);
  const newId = `id${++maxId}`;
  return newId;
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT:
      const newId = getNewId(state.chatList);

      return {
        ...state,
        chatList: [
          ...state.chatList,
          {
            id: newId,
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
