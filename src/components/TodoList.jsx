import React from "react";
import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = ({ StBox, todo, setTodo }) => {
  const [doneTodo, setDoneTodo] = useState([]);

  const handleDelete = (id, arr, setArr) => {
    const deletedTodo = arr.filter((a) => a.id !== id);
    setArr(deletedTodo);
  };

  const handleChange = (id, arr1, arr2, setArr1, setArr2) => {
    const deletedTodo = arr1.filter((a) => a.id !== id);
    setArr1(deletedTodo);

    const changeTodo = arr1.find((a) => a.id === id);
    setArr2([...arr2, changeTodo]);
  };

  return (
    <>
      <StBox>
        <h2>Working</h2>
        {todo.map((a) => (
          <TodoItem
            key={a.id}
            todo={a}
            label={"완료"}
            handleDelete={() => handleDelete(a.id, todo, setTodo)}
            handleChange={() =>
              handleChange(a.id, todo, doneTodo, setTodo, setDoneTodo)
            }
          />
        ))}
      </StBox>
      <StBox>
        <h2>Done</h2>
        {doneTodo.map((a) => (
          <TodoItem
            key={a.id}
            todo={a}
            label={"취소"}
            handleDelete={() => handleDelete(a.id, doneTodo, setDoneTodo)}
            handleChange={() =>
              handleChange(a.id, doneTodo, todo, setDoneTodo, setTodo)
            }
          />
        ))}
      </StBox>
    </>
  );
};

export default TodoList;
