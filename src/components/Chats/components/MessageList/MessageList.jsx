import { useSelector, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getAllMessageList } from '../../../../store/selectors';

import RenderMessageList from './RenderMessageList/RenderMessageList';

export default function MessageList() {
  const allMessages = useSelector(getAllMessageList, shallowEqual);

  const params = useParams();

  const chatId = params.id ? params.id : 'id0';

  return <RenderMessageList allMessages={allMessages} chatId={chatId} />;
}
