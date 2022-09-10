import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { useCallback, useState } from 'react';

import { changeName } from '../../store/profile/actions';
import { getMessageAuthor } from '../../store/selectors';

import RenderProfile from './RenderProfile/RenderProfile';

export default function Profile() {
  const dispatch = useDispatch();
  const { name } = useSelector(getMessageAuthor, shallowEqual);

  const [value, setValue] = useState('');

  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  });

  const setName = useCallback(() => {
    dispatch(changeName(value));
  }, [dispatch, value]);

  return (
    <RenderProfile
      name={name}
      handleChange={handleChange}
      setName={setName}
      value={value}
    />
  );
}
