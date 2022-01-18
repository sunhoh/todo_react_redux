import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputText, resetInputValue } from '../../redux/modules/address';

export default function TextInput() {
  const dispatch = useDispatch();
  const title = useSelector(state => state.address);

  const changeValue = e => {
    dispatch(changeInputText(e.target.value));
  };

  const isResetValue = e => {
    dispatch(resetInputValue(''));
  };

  return (
    <Container>
      <InputBox>
        <input
          placeholder="상세주소"
          value={title.title}
          onChange={changeValue}
        />
        <div onClick={isResetValue}>X</div>
      </InputBox>
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  min-width: 500px;
`;

const InputBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  border: 1px solid black;

  input {
    width: 100%;
    padding: 20px;
    font-size: 20px;
    background: transparent;
    appearance: none;
    border: none;
    outline: none;

    ::placeholder {
      color: #d0d0d0;
    }
  }

  div {
    padding: 5px;
    margin-right: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;
