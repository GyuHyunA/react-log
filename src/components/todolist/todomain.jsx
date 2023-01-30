import React from "react";
import styled from "styled-components";
import { TodoCreate, TodoHead, TodoList, TodoTemplate } from "./components";
import { TodoProvider } from "./context/todocontext";

const TodoMainStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e9ecef;
  padding: 32px 0;
`;

const Todomain = () => {
  return (
    <TodoMainStyled>
      <TodoProvider>
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </TodoMainStyled>
  );
};

export default Todomain;
