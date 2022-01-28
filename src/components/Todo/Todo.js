import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../redux/modules/todo';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Todo = props => {
  const dispatch = useDispatch();

  return (
    <Container>
      {props.text}
      <DeleteButton onClick={() => dispatch(deleteList(props.idx))}>
        <DeleteForeverIcon color="secondary" />
      </DeleteButton>
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  padding: 20px;
  margin-top: 40px;
  border: 2px solid skyblue;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  &: hover {
    border: 2px solid blue;
  }
  transition: border 500ms;
`;

const DeleteButton = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: red;

  &:hover {
    cursor: pointer;
  }
`;
