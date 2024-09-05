import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoText.trim()) {
      addTodo({ id: Date.now(), todo: todoText, completed: false });
      setTodoText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new todo"
        className="text-black p-2 rounded"
      />
      <button type="submit" className="mt-2 bg-blue-500 p-2 rounded text-white">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;
