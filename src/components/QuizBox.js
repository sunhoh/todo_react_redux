import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deleteQuiz } from '../redux/modules/quiz';

const QuizBox = props => {
  const dispatch = useDispatch();

  return (
    <Container>
      <InputBox type="text" placeholder="설문조사 제목을 입력하세요." />
      <DeleteButton onClick={() => dispatch(deleteQuiz(props.idx))}>
        <div>X</div>
      </DeleteButton>
    </Container>
  );
};

export default QuizBox;

const Container = styled.div`
  padding: 20px;
  margin-top: 40px;
  border: 2px solid skyblue;
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  /* flex-direction: row-reverse; */

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
const InputBox = styled.input`
  resize: none;
  width: 100%;
  font-size: 16px;
  overflow: hidden;
  appearance: none;
  outline: none;
  border: none;

  ::placeholder {
    color: #d0d0d0;
  }
`;
