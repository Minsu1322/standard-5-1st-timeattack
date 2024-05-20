import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

export default function TodoList({ list, todo, toggleTodo, deleteTodo, id }) {
  return (
    <>
      <h2>Working!</h2>
      <TodoItem />

      <h2>Done!</h2>
      <TodoItem />
    </>
  );
}
