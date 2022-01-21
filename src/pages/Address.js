import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import TextInput from './component/TextInput';

export default function Address() {
  const titleList = useSelector(state => state.address);

  return (
    <Container>
      <Inner>
        {titleList.list.map((item, index) => {
          <TextInput key={index} index={index} />;
        })}
        <TextInput />
      </Inner>
    </Container>
  );
}

const Container = styled.div``;

const Inner = styled.div`
  min-width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform translate(-50%,-50%);
  border: 1px solid black;
`;
