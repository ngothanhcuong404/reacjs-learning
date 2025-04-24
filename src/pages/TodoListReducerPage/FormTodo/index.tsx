import { FC, useEffect, useState } from "react";
import { M_Todo } from "../../../types/todo";
import { tags } from "../configs";
type Props = {
    onSubmit: (todo: M_Todo) => void;
    editingTodo?: M_Todo | null;
};

export const FormTodo: FC<Props> = ({ onSubmit, editingTodo }) => {
    const [todos, setTodos] = useState<M_Todo>({
        id: Date.now(),
        title: "",
        description: "",
        dueDate: "",
        priority: "medium",
        completed: false,
        tags: [],
        createdAt: new Date().toISOString(),
    });
    useEffect(() => {
        if (editingTodo) setTodos(editingTodo);
      }, [editingTodo]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setTodos(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({ ...todos, id: editingTodo ? editingTodo.id : Date.now() });
        setTodos({
            id: Date.now(),
            title: "",
            description: "",
            dueDate: "",
            priority: "medium",
            completed: false,
            tags: [],
            createdAt: new Date().toISOString(),
        });
        const jsonTodos = localStorage.getItem("todos");
        if (jsonTodos) {
            const parsedTodos = JSON.parse(jsonTodos);
            const updatedTodos = parsedTodos.map((todo: M_Todo) => {
                if (todo.id === editingTodo?.id) {
                    return { ...todo, ...todos };
                }
                return todo;
            });
            localStorage.setItem("todos", JSON.stringify(updatedTodos));
        } else {
            localStorage.setItem("todos", JSON.stringify([todos]));
        }
    };
    return (
        <form
        onSubmit={handleSubmit}
        className="space-y-4 p-4 bg-white rounded-xl shadow-md max-w-md mx-auto"
      >
        <input
          name="title"
          placeholder="Tiêu đề"
          value={todos.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="description"
          placeholder="Mô tả"
          value={todos.description}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="dueDate"
          type="date"
          value={todos.dueDate}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-4">
  {tags.map((tag) => (
    <label
      key={tag}
      className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-md hover:bg-gray-200 transition"
    >
      <input
        type="checkbox"
        className="accent-blue-500 w-4 h-4"
        checked={todos.tags?.includes(tag)}
        onChange={(e) => {
          const isChecked = e.target.checked;
          setTodos((prev) => ({
            ...prev,
            tags: isChecked
              ? [...(prev.tags || []), tag]
              : prev.tags?.filter((t) => t !== tag),
          }));
        }}
      />
      <span className="text-sm text-gray-700">{tag}</span>
    </label>
  ))}
</div>

        <select
          name="priority"
          value={todos.priority}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="low">Thấp</option>
          <option value="medium">Vừa</option>
          <option value="high">Cao</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          {editingTodo ? "Cập nhật" : "Thêm"}
        </button>
      </form>
      
    );
}
