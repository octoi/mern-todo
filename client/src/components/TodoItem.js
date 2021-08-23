import React, { useState } from 'react';
import { Flex, Text, Button, useToast, Spinner } from '@chakra-ui/react';
import { deleteTodo as requestDeleteTodo } from '../api/todo';

export default function TodoItem({ todo, deleteFromUi, username }) {
  const [isLoading, setIsLoading] = useState(false);

  const showToast = useToast()

  const deleteTodo = () => {
    setIsLoading(true);
    requestDeleteTodo(username, todo?._id).then(todoData => {
      deleteFromUi(todo?._id);
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
    <Flex mt={3} background="gray.700" alignItems="center" justifyContent="space-between" p={3} borderRadius={5}>
      <Text fontSize="xl">{todo?.title}</Text>
      <Button onClick={deleteTodo}>{isLoading ? <Spinner /> : '🗑️'}</Button>
    </Flex>
  )
}
