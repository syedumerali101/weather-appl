import React, {useEffect, useState} from 'react';
import {useGetHomeQuery} from '../../State/home';

const useController = () => {
  const [dropdown, setDropdown] = useState('karachi');
  const {
    data: weatherUpdate,
    refetch,
    isLoading,
  } = useGetHomeQuery({
    q: dropdown,
    appid: '1293f0a242e7967c6f9560bdd92cc237',
  });
  useEffect(() => {
    refetch();
  }, []);

  return {
    dropdown,
    setDropdown,
    weatherUpdate,
    isLoading,
  };
};
export default useController;
