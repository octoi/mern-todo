import React, { useState } from 'react';
import Auth from '../components/Auth';
import useAppContext from '../context/useAppContext';
import { Flex, Input, Button, Heading, Link, useToast } from '@chakra-ui/react';
import { login as requestLogin } from '../api/user';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const showToast = useToast();
  const { setUser } = useAppContext();


  const login = async () => {
    const userData = await requestLogin(username, password).catch(err => {
      showToast({
        title: err ? err : 'Failed to login :(',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
        status: 'error'
      })
    });

    console.log(userData)
  }

  return (
    <Auth>
      <Flex height="80vh" justifyContent="center" alignItems="center">
        <Flex maxW="80%" minW="30%" background="gray.700" p={12} direction="column">
          <Heading>Log In</Heading>
          <Input
            mt={5}
            placeholder="username"
            variant="filled"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            mt={5}
            placeholder="••••••••"
            variant="filled"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            mt={5}
            colorScheme="teal"
            width="100%"
            onClick={login}
            disabled={username.trim().length === 0 || password.length === 0}
          >Log In</Button>
          <Link mt={2} href='/register'>New to mern todo ?? Register</Link>
        </Flex>
      </Flex>
    </Auth>
  )
}
