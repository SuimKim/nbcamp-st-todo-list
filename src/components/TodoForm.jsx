import React from "react";
import { useState } from "react";

const TodoForm = ({ StBox, todo, setTodo }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    if (!title.trim() || !contents.trim()) {
      alert("모든 항목을 입력하세요!");
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      title: title,
      contents: contents,
    };

    setTodo([...todo, newTodo]);
  };
  return (
    <StBox>
      <h3>Todo 입력하기</h3>
      <form onSubmit={addTodo}>
        제목{" "}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />{" "}
        <br />
        내용{" "}
        <input
          type="text"
          value={contents}
          onChange={(e) => setContents(e.target.value)}
        />{" "}
        <br />
        <button type="submit">저장하기</button>
      </form>
    </StBox>
  );
};

export default TodoForm;
