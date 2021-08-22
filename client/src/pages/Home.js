import React, { useState } from 'react';
import Auth from '../components/Auth';
import { Flex, InputGroup, InputRightElement, Button, Input } from '@chakra-ui/react';

export default function Home() {
  const [todoValue, setTodoValue] = useState('');

  return (
    <Auth isHome>
      <Flex mt={12} direction='column'>
        <InputGroup size="lg">
          <Input
            pr="4.5rem"
            placeholder="Todo ??"
            variant="filled"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <InputRightElement width="4.5rem">
            <Button
              disabled={todoValue.trim().length === 0}
              h="1.75rem"
              size="lg"
              height="100%"
              colorScheme="teal"
            >Add</Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </Auth>
  )
}
