import React, { useState, useEffect } from 'react';
import { Flex, InputGroup, InputRightElement, Button, Input } from '@chakra-ui/react';
import { getAllTodos } from '../api/todo';
import Auth from '../components/Auth';
import useAppContext from '../context/useAppContext';
import TodoItem from '../components/TodoItem';

export default function Home() {
  const [todoValue, setTodoValue] = useState('');
  const [allTodo, setAllTodo] = useState([]);


  const { user } = useAppContext();

  useEffect(() => {
    if (!user) return;
    getAllTodos(user?.username).then(todoData => {
      setAllTodo(todoData);
    })
  }, [user])

  const deleteTodoFromUi = (id) => {
    const currentAllTodo = [...allTodo];
    const newcurrentAllTodo = currentAllTodo.filter(todo => todo?._id !== id);
    setAllTodo(newcurrentAllTodo);
  }

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
      <Flex mt={10} direction="column">
        {allTodo.map(todo => <TodoItem todo={todo} key={todo?._id} deleteFromUi={deleteTodoFromUi} />)}
      </Flex>
    </Auth>
  )
}
