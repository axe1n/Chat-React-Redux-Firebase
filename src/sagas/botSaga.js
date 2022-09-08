import { takeLatest, select, delay, put } from 'redux-saga/effects';
import { ADD_MESSAGE, addMessage } from '../store/messages/actions';

function* botMessageWorker(action) {
  const state = yield select((state) => state);
  if (action.message.author !== state.profile.BOT) {
    yield delay(1000);
    yield put(
      addMessage(
        {
          text: `I'm bot. Can I help you?`,
          author: state.profile.BOT,
        },
        action.chatId
      )
    );
  }
}
function* addMessageWatcher() {
  yield takeLatest(ADD_MESSAGE, botMessageWorker);
}

export function* rootSaga() {
  yield addMessageWatcher();
}
