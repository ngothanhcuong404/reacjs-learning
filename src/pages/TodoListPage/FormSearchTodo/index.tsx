import { FC, useCallback, useEffect, useRef, useState } from "react";
import { M_Todo } from "../../../types/todo";

type Props = {
    todos: M_Todo[];
    setTodos: React.Dispatch<React.SetStateAction<M_Todo[]>>;
}
export const FormSearchTodo: FC<Props> = ({ todos, setTodos }) => {
    const [search, setSearch] = useState("");
    const originalTodos = useRef<M_Todo[]>([]);
    const handleFocus = () => {
        originalTodos.current = todos;
        return;
    }
    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const keyword = e.target.value;
            setSearch(keyword);
            if (keyword.trim() === "") {
                setTodos(originalTodos.current);
                return;
            }
            const searhTodo = originalTodos.current.filter((todo) => {
                {
                    if (todo.title.toLowerCase().includes(keyword.toLowerCase())) {
                        return todo;
                    } else if (todo.createdAt?.slice(0, 10).toLowerCase().includes(keyword.toLowerCase())) {
                        return todo;
                    }
                }
            });

            setTodos(searhTodo);
        }, [setTodos]);
    useEffect(() => {
        console.log("hamndleSearch rernder");
    }, [handleSearch]);

    return (
        <div className="flex flex-col gap-4 w-full mb-4">
            <h1 className="text-2xl font-bold"> Todo</h1>
            <form className="flex flex-col gap-4 w-full ">
                <input type="text" placeholder="Search..." onFocus={handleFocus} value={search} onChange={handleSearch} className="border border-gray-300 p-2 rounded" />
            </form>
        </div>
    );
}