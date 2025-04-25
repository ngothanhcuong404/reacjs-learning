import { FC, useState, useMemo, useRef, useCallback } from "react";
import { FormTodo ,FormTodoHandle } from "./FormTodo";
import { TableTodo } from "./TableTodo";
import { useTodoContext } from "../hooks/TodoContext";
import { M_Todo } from "../../types/todo";

const TodoListReducerPage: FC = () => {
  const { todos, dispatch } = useTodoContext();
  const [editingTodo, setEditingTodo] = useState<M_Todo | null>(null);
  const formRef = useRef<FormTodoHandle>(null);
  const addOrUpdateTodo = useCallback((todo: M_Todo) => {
    if (editingTodo) {
      dispatch({ type: "UPDATE_TODO", payload: todo });
      setEditingTodo(null);
   
    } else {
      dispatch({ type: "ADD_TODO", payload: todo });
    }
    console.log("formRef.current:", formRef.current);
    formRef.current?.resetForm();
  }, [dispatch, editingTodo]);

  const deleteTodo = useCallback((id: number) => {
    dispatch({ type: "DELETE_TODO", payload: id });
    setEditingTodo(null);
  }, [dispatch]);

  const toggleTodo = useCallback((id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  }, [dispatch]);

  const startEdit = useCallback((todo: M_Todo) => {
  
    formRef.current?.fillForm(todo);
  }, []);
  const completedTodos = useMemo(() => {
    return todos.filter(todo => todo.completed);
  }, [todos]);

  const incompleteTodos = useMemo(() => {
    return todos.filter(todo => !todo.completed);
  }, [todos]);

  return (
    <div className="container mx-auto p-10">
      <h1 className="font-bold text-3xl mb-6">Todo List</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 w-full bg-white p-4 rounded-xl shadow">
          <FormTodo ref={formRef} onSubmit={addOrUpdateTodo} />
        </div>

        <div className="md:w-1/2 w-full bg-white p-4 rounded-xl shadow overflow-x-auto">
          <h2 className="font-bold text-xl mb-4">Danh sách hoàn thành </h2>
          <TableTodo todos={completedTodos}  startEdit={startEdit} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />

          <h2 className="font-bold text-xl mt-6 mb-4">Danh sách chưa hoàn thành </h2>
          <TableTodo todos={incompleteTodos} startEdit={startEdit} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoListReducerPage;