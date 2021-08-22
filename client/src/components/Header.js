import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import useAppContext from '../context/useAppContext';

export default function Header() {
  const { user, setUser } = useAppContext();
  const history = useHistory();

  const handleButtonClick = () => {
    setUser();
    history.push('/login');
  }

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Text fontSize="3xl" fontWeight="semibold">MERNT🐵DO</Text>
      <Button onClick={handleButtonClick} size="lg">{user ? 'Logout' : 'Login'}</Button>
    </Flex>
  )
}
