import { useSelector, useDispatch } from 'react-redux';
import { get } from '../axios/axios';
import { setConfig } from '../redux/configSlice';
import { useEffect } from 'react';

function getConfigHook() {
  const dispatch = useDispatch();
  const configData = useSelector((state) => state.config.data);
  const configStatus = useSelector((state) => state.config.status);

  useEffect(() => {
    if (configStatus === 'idle') {
      const { promise, cancel } = get('/config');

      promise
        .then((response) => {
          dispatch(setConfig(response.data));
        })
        .catch((error) => console.error('Error fetching config:', error));

      return () => cancel();
    }
  }, [dispatch, configStatus]);

  return configData;
}

export default getConfigHook;