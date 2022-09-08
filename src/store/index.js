import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import { messagesReducer } from './messages/reducer';
import { gistsReducer } from './gists/reducer';

import { rootSaga } from '../sagas/botSaga';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  messages: messagesReducer,
  gists: gistsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(sagaMiddleware, thunk))
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
