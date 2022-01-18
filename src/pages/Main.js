import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputText } from '../redux/modules/address';
import TextInput from './component/TextInput';

export default function Main() {
  const dispatch = useDispatch();
  const titleList = useSelector(state => state.address);

  return (
    <Container>
      <Inner>
        {titleList.list.map((item, index) => {
          return item.type === 'detailedAddress' ? (
            <TextInput key={index} index={index} />
          ) : (
            <TextInput key={index} type={item.type} index={index} />
          );
        })}
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
