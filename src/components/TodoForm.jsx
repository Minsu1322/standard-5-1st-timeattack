import React, { useState } from "react";

export default function TodoForm() {
  const [todo, setTodo] = useState("");
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title,
      todo,
      isDone: false,
    };

    setList(...todo, newTodo);
    setTitle("");
    setTodo("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const toggleTodo = (id) => {
    const newList = list.map((item) =>
      item.id === id ? { ...item, isDone: !item.isDone } : item
    );
    setList(newList);
  };

  return (
    <>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="할 일"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">완료</button>
      </form>
    </>
  );
}
