import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useSelector(state => state.todos);

  console.log(todos);

  return (
    <Container>
      {/* {todos.map(todo => {
        return <TodoItem key={todo.id} todo={todo} />;
      })} */}
      <TodoItem />
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  border: 1px solid black;
`;
