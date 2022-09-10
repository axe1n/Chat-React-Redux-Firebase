// Пример реализации middleware. Можно подключить в store>index.js.
// composeEnhancer(applyMiddleware(sagaMiddleware, thunk)) поменять на
// composeEnhancer(applyMiddleware(sagaMiddleware, botMessage,  thunk))

import { ADD_MESSAGE } from '../store/messages/actions';
import { addMessage } from '../store/messages/actions';

let timer;

export const botMessage = (store) => (next) => (action) => {
  if (
    action.type === ADD_MESSAGE &&
    action.message.author !== store.getState().profile.BOT
  ) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      store.dispatch(
        addMessage(
          {
            text: `I'm bot. Can I help you?`,
            author: store.getState().profile.BOT,
          },
          action.chatId
        )
      );
    }, 1500);
  }

  return next(action);
};
