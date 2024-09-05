import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

//useTodo is onetype of hook
export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
