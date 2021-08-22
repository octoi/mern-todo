import { createContext, useState, useEffect } from 'react';
import { getUser, saveToken, removeToken } from '../utils/session';

export const ContextProvider = createContext();

export function Context({ children }) {
  const [user, setUser] = useState();

  const userFromSession = getUser();

  useEffect(() => {
    if (!user?.token) {
      if (userFromSession && userFromSession.token !== user?.token) setUser(userFromSession);
      return;
    }

    saveToken(user?.token);
  }, [user, userFromSession]);

  const logout = () => {
    removeToken();
    setUser();
  }

  return (
    <ContextProvider.Provider value={{ user, setUser, logout }}>
      {children}
    </ContextProvider.Provider>
  );
}