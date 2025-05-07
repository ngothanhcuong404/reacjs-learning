import { FC, useCallback, useRef, useState } from "react";
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
    }

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const keyword = e.target.value;
            setSearch(keyword);

            if (keyword.trim() === "") {
                setTodos(originalTodos.current);
                return;
            }

            const searchResults = originalTodos.current.filter((todo) => {
                if (todo.title.toLowerCase().includes(keyword.toLowerCase())) {
                    return true;
                } else if (todo.createdAt?.slice(0, 10).toLowerCase().includes(keyword.toLowerCase())) {
                    return true;
                }
                return false;
            });

            setTodos(searchResults);
        },
        [setTodos]
    );

    return (
        <div className="flex flex-col gap-4 w-full mb-4">
            <form className="flex flex-col gap-4 w-full">
                <input
                    type="text"
                    placeholder="Search..."
                    onFocus={handleFocus}
                    value={search}
                    onChange={handleSearch}
                    className="border border-gray-300 p-2 rounded"
                />
            </form>
        </div>
    );
}