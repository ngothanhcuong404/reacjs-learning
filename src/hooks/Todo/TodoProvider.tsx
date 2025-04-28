import { FC, useReducer, useEffect } from "react";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "../../pages/utils/TodoReducer";


const TodoProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [todos, dispatch] = useReducer(todoReducer, [], () => {
        const jsonTodos = localStorage.getItem("todos");
        return jsonTodos ? JSON.parse(jsonTodos) : [];
    });

    useEffect(() => {  
            localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;