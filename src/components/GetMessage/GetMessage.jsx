import { useState, useRef } from 'react';
import { TextField, Button, FormControl } from '@mui/material';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addMessage } from '../../store/messages/actions';
import { getMessageAuthor } from '../../store/selectors';

function GetMessage() {
  const params = useParams();
  const dispatch = useDispatch();
  const { name: profileName } = useSelector(getMessageAuthor, shallowEqual);
  const [text, setText] = useState('');
  const chatId = params.id ? params.id : 'id0';
  const inputRef = useRef(null);

  const onSubmitHandle = () => {
    dispatch(addMessage({ text, author: profileName }, chatId));
    inputRef.current.querySelector('.MuiInputBase-input').focus();
    inputRef.current.querySelector('.MuiInputBase-input').value = '';
    setText('');
  };

  return (
    <>
      <FormControl align="left">
        <TextField
          helperText="Введите cообщение"
          type="text"
          ref={inputRef}
          autoFocus
          multiline
          sx={{ width: 600 }}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </FormControl>
      <Button variant="contained" onClick={onSubmitHandle} sx={{ margin: 1 }}>
        Отправить
      </Button>
    </>
  );
}

export default GetMessage;
