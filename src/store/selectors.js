export function getAllMessageList(state) {
  return state.messages;
}

export function getChatsList(state) {
  return state.chats.chatList;
}

export function getMessageAuthor(state) {
  return state.profile;
}

export function getGistsList(state) {
  return state.gists.gistsList;
}
export function selectGistsError(state) {
  return state.gists.error;
}
export function selectGistsStatus(state) {
  return state.gists.status;
}
