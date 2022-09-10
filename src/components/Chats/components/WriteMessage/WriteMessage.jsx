import { useState, useRef } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addMessage } from '../../../../store/messages/actions';
import { getMessageAuthor } from '../../../../store/selectors';

import RenderWriteMessage from './RenderWriteMessage/RenderWriteMessage';

function GetMessage() {
  const params = useParams();

  const dispatch = useDispatch();
  const { name: profileName } = useSelector(getMessageAuthor, shallowEqual);

  const [text, setText] = useState('');
  const inputRef = useRef(null);

  const chatId = params.id ? params.id : 'id0';

  const onSubmitHandle = () => {
    dispatch(addMessage({ text, author: profileName }, chatId));

    inputRef.current.querySelector('.MuiInputBase-input').focus();

    inputRef.current.querySelector('.MuiInputBase-input').value = '';
    setText('');
  };

  return (
    <RenderWriteMessage
      inputRef={inputRef}
      onSubmitHandle={onSubmitHandle}
      setText={setText}
    />
  );
}

export default GetMessage;
