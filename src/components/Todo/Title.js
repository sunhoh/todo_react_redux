import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { resetText } from '../../redux/modules/todo';

const Title = props => {
  const [underline, setUnderline] = useState('#d0d0d0');

  const dispatch = useDispatch();

  return (
    <Container onSubmit={props.addList}>
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
          ref={props.text}
          placeholder="제목을 입력하세요."
          onSubmit={() => dispatch(resetText(''))}
        />
      </Inner>
    </Container>
  );
};

export default Title;

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
