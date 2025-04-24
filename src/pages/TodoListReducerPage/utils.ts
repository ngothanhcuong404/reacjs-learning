import { M_Todo } from "../../types/todo";
import { Action } from "./Action";
export const todoReducer = (state: M_Todo[], action: Action): M_Todo[] => {
    switch (action.type) {
      case "ADD_TODO":
        return [{ ...action.payload, id: Date.now(), createdAt: new Date().toISOString() }, ...state];
      case "UPDATE_TODO":
        return state.map(todo => (todo.id === action.payload.id ? action.payload : todo));
      case "DELETE_TODO":
        return state.filter(todo => todo.id !== action.payload);
      case "TOGGLE_TODO":
        return state.map(todo =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        );
      default:
        return state;
    }
  };
