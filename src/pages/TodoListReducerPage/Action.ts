import { M_Todo } from "../../types/todo";
export type Action =
  | { type: "ADD_TODO"; payload: M_Todo }
  | { type: "UPDATE_TODO"; payload: M_Todo }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "TOGGLE_TODO"; payload: number };
