import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/modules/todo';

const TodoItem = ({ todo }) => {
  let dispatch = useDispatch();

  return (
    <Container>
      <button>Edit</button>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
    </Container>
  );
};

export default TodoItem;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;
