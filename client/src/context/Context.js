import { createContext, useState } from 'react';

export const ContextProvider = createContext();

export function Context({ children }) {
  const [user, setUser] = useState({});

  return (
    <ContextProvider.Provider value={{ user, setUser }}>
      {children}
    </ContextProvider.Provider>
  );
}