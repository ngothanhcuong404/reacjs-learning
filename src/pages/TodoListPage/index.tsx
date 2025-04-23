import { FC, useEffect, useState } from "react";
import { FormTodo } from "./FormTodo";
import { M_Todo } from "../../types/todo";
import { TableTodo } from "./TableTodo";

import { FormSearchTodo } from "./FormSearchTodo";

const TodoListPage: FC = () => {
    const [todos, setTodos] = useState<M_Todo[]>(() => {
        const jsonTodos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")!) : [];
        console.log(jsonTodos);
        return jsonTodos
    });

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


    const [editingTodo, setEditingTodo] = useState<M_Todo | null>(null);


    const addOrUpdateTodo = (todo: M_Todo) => {
        if (editingTodo) {
            setTodos(todos.map(t => (t.id === todo.id ? todo : t)));

            setEditingTodo(null);

        } else {
            setTodos([{ ...todo, id: Date.now(), createdAt: new Date().toISOString() }, ...todos]);

            setEditingTodo(null);

        }
    };

    const deleteTodo = (id: number) => {
        setTodos(todos.filter(todo => todo.id !== id));

        setEditingTodo(null);
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );

    };

    const startEdit = (todo: M_Todo) => {
        setEditingTodo(todo);
    };

    return (
        <div className="container mx-auto p-10">
            <h1 className="font-bold text-3xl mb-6">Todo List</h1>

            <div className="flex flex-col md:flex-row gap-6">

                <div className="md:w-1/2 w-full bg-white p-4 rounded-xl shadow">
                    <FormTodo onSubmit={addOrUpdateTodo} editingTodo={editingTodo} />
                </div>


                <div className="md:w-1/2 w-full bg-white p-4 rounded-xl shadow overflow-x-auto">
                    <FormSearchTodo todos={todos} setTodos={setTodos} />
                    <TableTodo todos={todos} startEdit={startEdit} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
                </div>
            </div>
        </div>
    );
};

export default TodoListPage;
