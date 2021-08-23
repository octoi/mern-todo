import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';

export default function TodoItem({ todo, deleteFromUi }) {

  const deleteTodo = () => {
    deleteFromUi(todo?._id);
  }

  return (
    <Flex background="gray.700" alignItems="center" justifyContent="space-between" p={3} borderRadius={5}>
      <Text fontSize="xl">{todo?.title}</Text>
      <Button onClick={deleteTodo}>🗑️</Button>
    </Flex>
  )
}
