import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <TodoForm />
      <TodoList />
    </>
  );
}
