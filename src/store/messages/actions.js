export const ADD_MESSAGE = 'CHATS::ADD_MESSAGE';
export const DELETE_CHAT_MESSAGES = 'CHATS::DELETE_CHAT_MESSAGES';

export const addMessage = (message, chatId) => ({
  type: ADD_MESSAGE,
  message,
  chatId,
});

export const deleteChatMesseges = (chatId) => ({
  type: DELETE_CHAT_MESSAGES,
  chatId,
});
