import { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';

import { fetchGistsList } from '../../asyncAction/fetchGistsList';
import { API_URL_PUBLIC } from '../../constants/constants';
import {
  getGistsList,
  selectGistsError,
  selectGistsStatus,
} from '../../store/selectors';

import RenderGists from './RenderGists/RenderGists';

export default function Gists() {
  const dispatch = useDispatch();

  const gistsList = useSelector(getGistsList, shallowEqual);
  const error = useSelector(selectGistsError, shallowEqual);
  const status = useSelector(selectGistsStatus, shallowEqual);

  useEffect(() => {
    dispatch(fetchGistsList(API_URL_PUBLIC));
  }, []);

  return <RenderGists gistsList={gistsList} error={error} status={status} />;
}
