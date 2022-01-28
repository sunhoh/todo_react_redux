import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Title from './Title';
import Todo from './Todo';
import Footer from './Footer';
import { createList, resetText } from '../../redux/modules/todo';

const TodoList = () => {
  const todoList = useSelector(state => state.todo);
  const dispatch = useDispatch();

  const text = useRef();

  const addList = e => {
    e.preventDefault();
    const new_item = text.current.value;
    if (new_item.length > 0) {
      dispatch(createList(new_item));
    }
  };

  const rest = () => {
    if (addList()) {
      dispatch(resetText());
    }
  };

  return (
    <Container>
      <Title text={text} addList={addList} rest={rest} />
      <div className="body">
        {todoList.list.map((e, idx) => {
          return <Todo key={idx} idx={idx} text={e.text} />;
        })}
      </div>
      <Footer text={text} addList={addList} />
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  max-width: 600px;
  overflow: height;
  margin: 0 auto;
  padding: 32px;
  margin: 20px auto;
  border-radius: 10px;
  border: 1px solid #d0d0d0;

  .body {
    height: 350px;
    overflow: hidden;
    overflow: scroll;
  }
`;
