import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from './todoContext';

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 30px;
  padding-right: 25px;
  cursor: pointer;
  opacity: 0;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      opacity: 1;
    }
  }
`;

const CheckCircle = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color:white;
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props =>
    props.done &&
    css`
      color: #ced4da;
    `}
    .day {
      color: #868e96;
      font-size: 14px;
    }
`;

function CommentItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  const today = new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  return (
    <TodoItemBlock>
      <CheckCircle />
      <Text done={done}>{text}<span className='day'>{dateString} {'('}{dayName}{')'}</span></Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default CommentItem;