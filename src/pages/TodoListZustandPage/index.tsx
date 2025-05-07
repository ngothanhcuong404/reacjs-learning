import { FC } from "react";
import { FormTodo } from "./FormTodo";
import { TableTodo } from "./TableTodo";
import { useTodoStore } from "./Store/useTodoStore";

const TodoListZustandPage: FC = () => {
const todos = useTodoStore(state => state.todos);
const completedTodos = todos.filter(todo => todo.completed);
const incompleteTodos = todos.filter(todo => !todo.completed);


  return (
    <div className="container mx-auto p-10">
      <h1 className="font-bold text-3xl mb-6">Todo List with Zustand</h1>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2 w-full bg-white p-4 rounded-xl shadow">
          <FormTodo />
        </div>

        <div className="md:w-1/2 w-full bg-white p-4 rounded-xl shadow overflow-x-auto">
          <h2 className="font-bold text-xl mb-4">Danh sách hoàn thành </h2>
          <TableTodo todos={completedTodos} />

          <h2 className="font-bold text-xl mt-6 mb-4">Danh sách chưa hoàn thành </h2>
          <TableTodo todos={incompleteTodos} />
        </div>
      </div>
    </div>
  );
};

export default TodoListZustandPage;