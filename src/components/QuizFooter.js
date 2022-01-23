import React, { useState } from 'react';
import styled from 'styled-components';
import { createQuiz } from '../redux/modules/quiz';
import { useDispatch } from 'react-redux';

function QuizFooter() {
  const dispatch = useDispatch();

  return (
    <Container>
      <AddButton onClick={() => dispatch(createQuiz())}>
        <span>+</span>
        <span>Add</span>
      </AddButton>
      <CompleteButton>
        <button>Submit</button>
      </CompleteButton>
    </Container>
  );
}

export default QuizFooter;

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AddButton = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  font-size: 1em;
  font-weight: bold;
  border-radius: 10px;
  background-color: #4d4d4d;

  color: #fff;
  cursor: pointer;

  &:hover {
    background-color: orange;
  }
`;

const CompleteButton = styled.div`
  button {
    border: none;
    font-size: 1em;
    border-radius: 10px;
    padding: 8px 12px;
    color: #fff;
    background-color: #4d4d4d;
    cursor: pointer;

    &:hover {
      background-color: orange;
    }
  }
`;
