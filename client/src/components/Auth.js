import React, { useEffect } from 'react';
import useAppContext from '../context/useAppContext';
import { useHistory } from 'react-router-dom';

export default function Auth({ children, isHome }) {
  const { user } = useAppContext();
  const history = useHistory();

  useEffect(() => {
    if (!isHome && user) history.push('/');
    if (isHome && !user) history.push('/login')
  }, [user, isHome, history])

  return <div>{children}</div>
}
