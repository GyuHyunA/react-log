import React from "react";
import styled from "styled-components";
import { TodoItem } from ".";
import { useTodoState } from "../context/todocontext";

const TodoListStyle = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

const Todolist = () => {
  const todos = useTodoState();
  return (
    <TodoListStyle>
      {todos.map((v) => {
        return <TodoItem done={v.done} text={v.text} id={v.id} key={v.id} />;
      })}
    </TodoListStyle>
  );
};

export default Todolist;
