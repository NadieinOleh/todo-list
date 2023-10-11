import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, { payload }) => {
      state.todos.push(payload);
    },
    removeTodos: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },
    editTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            title: payload.title,
            description: payload.description,
          };
        }

        return todo;
      });
    },
    checkedTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }

        return todo;
      });
    },
  },
});

export const {
  addTodos,
  removeTodos,
  checkedTodo,
  editTodo,
} = todosSlice.actions;
export default todosSlice.reducer;
