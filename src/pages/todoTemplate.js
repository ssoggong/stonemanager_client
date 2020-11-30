import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 800px;
  height: 358px;

  position: relative; 
  background: #e9ecef;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin: 0 auto;

  margin-top: 5px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;