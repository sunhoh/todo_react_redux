import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import QuizTitle from './QuizTitle';
import QuizBox from './QuizBox';
import QuizFooter from './QuizFooter';

const Quiz = () => {
  const quizList = useSelector(state => state.quiz);

  return (
    <Container>
      <QuizTitle />
      {quizList.list.map((e, idx) => {
        return <QuizBox key={idx} idx={idx} />;
      })}
      <QuizFooter />
    </Container>
  );
};

export default Quiz;

const Container = styled.div`
  width: 700px;
  margin: 0 auto;
  padding: 32px;
  margin: 20px auto;
  border-radius: 10px;
  border: 1px solid black;
`;
