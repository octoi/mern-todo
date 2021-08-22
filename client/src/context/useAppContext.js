import { useContext } from 'react';
import { ContextProvider } from './Context';

export default function useAppContext() {
  return useContext(ContextProvider);
}