import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello World",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  // reducer has function and properties
  reducers: {
    //in reducer every properties have access of state and action
    //state = it give access of initialState
    //action = to take any action on data in initialState
    addTodo: (state, action) => {
      const todo = {
        // nanoid will generate unique id everytime (npm module)
        id: nanoid(),
        text: action.payload,
      };

      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    editTodo: (state, action) => {
      const { id, text } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, text } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

//exporting reducer due to store (store take action or value from reducer)

export default todoSlice.reducer;
