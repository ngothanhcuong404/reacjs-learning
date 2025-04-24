import { FC, useEffect, useState, useReducer, useMemo } from "react";
import { M_Todo } from "../../types/todo";
import { FormTodo } from "./FormTodo";
import { TableTodo } from "./TableTodo";
import { todoReducer } from "./utils";

const TodoListReducerPage: FC = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const jsonTodos = localStorage.getItem("todos");
        return jsonTodos ? JSON.parse(jsonTodos) : [];
    });


    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    const [editingTodo, setEditingTodo] = useState<M_Todo | null>(null);


    const addOrUpdateTodo = (todo: M_Todo) => {
        if (editingTodo) {
            dispatch({ type: "UPDATE_TODO", payload: todo });
            setEditingTodo(null);
        } else {
            dispatch({ type: "ADD_TODO", payload: todo });
        }
    };

    const deleteTodo = (id: number) => {
        dispatch({ type: "DELETE_TODO", payload: id });
        setEditingTodo(null);
    };

    const toggleTodo = (id: number) => {
        dispatch({ type: "TOGGLE_TODO", payload: id });
    };

    const startEdit = (todo: M_Todo) => {
        setEditingTodo(todo);
    };

    const completedTodos = useMemo(() => {
        return todos.filter(todo => todo.completed);
    }, [todos]);


    const incompleteTodos = useMemo(() => {
        return todos.filter(todo => !todo.completed);
    }, [todos]);

    return (
        <div className="container mx-auto p-10">
            <h1 className="font-bold text-3xl mb-6">Todo List Reducer</h1>

            <div className="flex flex-col md:flex-row gap-6">

                <div className="md:w-1/2 w-full bg-white p-4 rounded-xl shadow">
                    <FormTodo onSubmit={addOrUpdateTodo} editingTodo={editingTodo} />
                </div>

                <div className="md:w-1/2 w-full bg-white p-4 rounded-xl shadow overflow-x-auto">
                    <h2 className="font-bold text-xl mb-4">Completed Todos</h2>
                    <TableTodo todos={completedTodos} startEdit={startEdit} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />

                    <h2 className="font-bold text-xl mt-6 mb-4">Incomplete Todos</h2>
                    <TableTodo todos={incompleteTodos} startEdit={startEdit} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                </div>
            </div>
        </div>
    );
}
export default TodoListReducerPage;