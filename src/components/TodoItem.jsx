import React from "react";
import styled from "styled-components";

const ListBox = styled.div`
  border: 1px solid black;
  display: inline-block;
  padding: 30px;
  margin: 10px;
`;
const TodoItem = ({ todo, handleDelete, handleChange, label }) => {
  const { title, contents } = todo;

  return (
    <ListBox>
      <h3>{title}</h3>
      <hr />
      <p>{contents}</p>
      <button onClick={() => handleDelete()}>삭제</button>
      <button onClick={() => handleChange()}>{label}</button>
    </ListBox>
  );
};

export default TodoItem;
