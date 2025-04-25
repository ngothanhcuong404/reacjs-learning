import { createContext, useContext } from "react";
import { M_Todo } from "../../types/todo";
import { Action } from "../TodoListReducerPage/Action";

type TodoContextType = {
  todos: M_Todo[];
  dispatch: React.Dispatch<Action>;
};

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodoContext must be used within a TodoProvider");
  }
  return context;
};