import React from 'react';
import styled from 'styled-components';
import CommentItem from './commentItem';
import { useTodoState } from './todoContext';

const TodoListBlock = styled.div`
  flex: 1;
  padding-left: 15px;
  overflow-y: auto;
`;

function CommentList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
      {todos.map(todo => (
        <CommentItem
          key={todo.id}
          id={todo.id}
          text={"최윤호" + " - " + todo.text }
          done={todo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default CommentList;