import { create } from "zustand";
import { M_Todo } from "../../../types/todo";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface TodoState {
  todos: M_Todo[];
  editingTodo: M_Todo | null;
  addTodo: (todo: M_Todo) => void;
  updateTodo: (todo: M_Todo) => void;
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
  setEditingTodo: (todo: M_Todo | null) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    immer((set) => ({
      todos: [],
      editingTodo: null,

      addTodo: (todo) =>
        set((state) => {
          state.todos.unshift({
            ...todo,
            id: Date.now(),
            createdAt: new Date().toISOString(),
          });
        }),

      updateTodo: (todo) =>
        set((state) => {
          const index = state.todos.findIndex((t) => t.id === todo.id);
          if (index !== -1) state.todos[index] = todo;
          state.editingTodo = null;
        }),

      deleteTodo: (id) =>
        set((state) => {
          state.todos = state.todos.filter((t) => t.id !== id);
          if (state.editingTodo?.id === id) {
            state.editingTodo = null;
          }
        }),

      toggleTodo: (id) =>
        set((state) => {
          const todo = state.todos.find((t) => t.id === id);
          if (todo) todo.completed = !todo.completed;
        }),

      setEditingTodo: (todo) =>
        set((state) => {
          state.editingTodo = todo;
        }),
    })),
    {
      name: "todos-storage",
      partialize: (state) => ({ todos: state.todos }),
    }
  )
);
