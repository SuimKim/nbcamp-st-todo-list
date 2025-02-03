import { useState } from "react";
import "./App.css";
import styled from "styled-components";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const StBox = styled.div`
  border: 1px solid black;
  padding: 10px;
  margin: 10px;
`;

function App() {
  const [todo, setTodo] = useState([]);
  return (
    <>
      <h1>Todo List</h1>
      <TodoForm StBox={StBox} todo={todo} setTodo={setTodo} />
      <TodoList StBox={StBox} todo={todo} setTodo={setTodo} />
    </>
  );
}

export default App;
