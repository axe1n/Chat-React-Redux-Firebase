import { useHistory, useRouteMatch } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getChatsList } from '../../../../store/selectors';

import { deleteChatMesseges } from '../../../../store/messages/actions';
import { addChat, deleteChat } from '../../../../store/chats/actions';

import RenderChatsList from './RenderChatsList/RenderChatsList';

function ChatsList() {
  const dispatch = useDispatch();

  const chatsList = useSelector(getChatsList, shallowEqual);

  const params = useParams();

  const history = useHistory();
  const match = useRouteMatch();

  const [visible, setVisible] = useState(false);
  const [newChatName, setNewChatName] = useState('');

  const chatId = params.id ? params.id : 'id0';

  const handleClose = () => setVisible(false);
  const handleOpen = () => setVisible(true);

  const handleChange = (e) => setNewChatName(e.target.value);

  const onAddChat = () => {
    dispatch(addChat(newChatName));

    setNewChatName('');

    handleClose();
  };

  const handleClickDeleteChat = (e) => {
    const chatId = e.target.closest('li').id;

    dispatch(deleteChat(chatId));
    dispatch(deleteChatMesseges(chatId));
  };

  const handleClickChats = () => {
    history.push('/chats');
  };

  const handleClickBack = () => {
    history.goBack();
  };

  return (
    <RenderChatsList
      chatsList={chatsList}
      chatId={chatId}
      handleClickDeleteChat={handleClickDeleteChat}
      match={match}
      handleClickBack={handleClickBack}
      handleClickChats={handleClickChats}
      handleOpen={handleOpen}
      visible={visible}
      handleClose={handleClose}
      newChatName={newChatName}
      handleChange={handleChange}
      onAddChat={onAddChat}
    />
  );
}

export default ChatsList;
