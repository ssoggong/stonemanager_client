import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './todoContext';

const TodoHeadBlock = styled.div`
  padding-left: 16px;
  padding-right: 32px;
  border-bottom: 1px solid #e9ecef;

  .tasks-left {
    color: #1a83ff;
    font-size: 14px;
    font-weight: bold;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter(todo => !todo.done);

  return (
    <TodoHeadBlock>
      <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;