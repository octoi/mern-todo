import React, { useState, useEffect } from 'react';
import Auth from '../components/Auth';
import useAppContext from '../context/useAppContext';
import TodoItem from '../components/TodoItem';
import AddTodo from '../components/AddTodo';
import { getAllTodos } from '../api/todo';
import { Flex } from '@chakra-ui/react';

export default function Home() {
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

  const addTodoToUi = (todo) => {
    setAllTodo([todo, ...allTodo]);
  }

  return (
    <Auth isHome>
      <AddTodo addTodoToUi={addTodoToUi} user={user} />
      <Flex mt={10} direction="column">
        {allTodo.map(todo => <TodoItem todo={todo} key={todo?._id} deleteFromUi={deleteTodoFromUi} />)}
      </Flex>
    </Auth>
  )
}
