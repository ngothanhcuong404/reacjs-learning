import { FC, memo, useEffect, useState } from "react";
import { M_Todo } from "../../../types/todo";
import { FormSearchTodo } from "../FormSearchTodo";


type Props = {
    todos: M_Todo[];
    startEdit: (todo: M_Todo) => void;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
   
}

export const TableTodoComponent: FC<Props> = ({ todos, startEdit, deleteTodo, toggleTodo  }) => {
    const [fillterTodos, setFilterTodos] = useState<M_Todo[]>(todos);
    useEffect(() => {
        setFilterTodos(todos);
      }, [todos]);
      console.log("TableTodo render");
    return (
        <>
        <FormSearchTodo todos={fillterTodos} setTodos={setFilterTodos}/>
        <table className="table-auto border-collapse border border-gray-200 w-full text-sm">
            <thead className="bg-gray-100">
                <tr>
                    <th className="border px-2 py-1">Title</th>
                    <th className="border px-2 py-1">Description</th>
                    <th className="border px-2 py-1">Due Date</th>
                    <th className="border px-2 py-1">Priority</th>
                    <th className="border px-2 py-1">Tags</th>
                    <th className="border px-2 py-1">Created At</th>
                    <th className="border px-2 py-1">Action</th>
                </tr>
            </thead>
            <tbody>
                {fillterTodos.map(todo => (
                    <tr key={todo.id}>
                        <td className="border px-2 py-1">{todo.title}</td>
                        <td className="border px-2 py-1">{todo.description}</td>
                        <td className="border px-2 py-1">{todo.dueDate}</td>
                        <td className="border px-2 py-1 capitalize">{todo.priority}</td>
                        <td className="border px-2 py-1">{todo.tags?.join(", ") ?? "-"}</td>
                        <td className="border px-2 py-1">{todo.createdAt?.slice(0, 10)}</td>
                        <td className="border px-2 py-1 ">
                            <div className="flex gap-2">

                                <button
                                    className="bg-blue-500 text-white px-2 py-1 rounded"
                                    onClick={() => startEdit(todo)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => deleteTodo(todo.id)}
                                >
                                    Delete
                                </button>
                                <button
                                    className={`px-2 py-1 rounded ${todo.completed ? "bg-green-500" : "bg-gray-300"
                                        }`}
                                    onClick={() => toggleTodo(todo.id)}
                                >
                                    ✓
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                {todos.length === 0 && (
                    <tr>
                        <td colSpan={7} className="text-center p-4 text-gray-400">
                            Không có công việc nào.
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        </>
    );
}

export const TableTodo = memo(TableTodoComponent);