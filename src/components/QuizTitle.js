import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeTitle, createQuiz } from '../redux/modules/quiz';

const QuizTitle = () => {
  const dispatch = useDispatch();
  const title = useSelector(state => state.quiz);

  const [underline, setUnderline] = useState('#d0d0d0');

  const dispatchChangeTitle = e => {
    dispatch(changeTitle(e.target.value));
  };

  const handleEnter = e => {
    e.preventDefault();
    dispatch(createQuiz());
  };

  return (
    <Container onSubmit={handleEnter}>
      <Inner
        underline={underline}
        onFocus={() => {
          setUnderline('blue');
        }}
        onBlur={() => {
          setUnderline('#d0d0d0');
        }}
      >
        <input
          placeholder="설문조사 제목을 입력하세요."
          onChange={dispatchChangeTitle}
        />
      </Inner>
    </Container>
  );
};

export default QuizTitle;

const Container = styled.form``;

const Inner = styled.div`
  border-bottom: 2px solid ${props => props.underline};
  transition: all 0.3s ease;

  input {
    width: 100%;
    height: 1.2em;
    resize: none;
    font-size: 3em;
    font-weight: 700;
    overflow: hidden;
    appearance: none;
    outline: none;
    border: none;

    ::placeholder {
      color: #d0d0d0;
    }
  }
`;
