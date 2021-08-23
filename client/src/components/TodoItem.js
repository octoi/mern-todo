import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';

export default function TodoItem({ todo }) {
  return (
    <Flex background="gray.700" alignItems="center" justifyContent="space-between" p={3} borderRadius={5}>
      <Text fontSize="xl">{todo?.title}</Text>
      <Button>✔</Button>
    </Flex>
  )
}
