import React, { useState } from 'react';
import { Flex, InputGroup, InputRightElement, Button, Input, Spinner, useToast } from '@chakra-ui/react';
import { addTodo as requestAddTodo } from '../api/todo';

export default function AddTodo({ addTodoToUi, user }) {
  const [todoValue, setTodoValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const showToast = useToast();

  const addTodo = () => {
    setIsLoading(true);
    requestAddTodo(user?.username, todoValue).then(todoData => {
      setTodoValue('');
      addTodoToUi(todoData);
    }).catch(err => {
      showToast({
        title: err ? err : 'Failed to add todo :(',
        position: 'top-right',
        duration: 3000,
        isClosable: true,
        status: 'error'
      })
    })
    setIsLoading(false);
  }

  return (
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
            onClick={addTodo}
          >{isLoading ? <Spinner /> : 'Add'}</Button>
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}
