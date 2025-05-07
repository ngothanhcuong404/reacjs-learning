import React, { useState, useEffect } from "react";
import { M_Todo } from "../../../types/todo";
import { tags } from "../configs";
import { useTodoStore } from "../Store/useTodoStore";


export const FormTodo: React.FC = () => {

  const editingTodo = useTodoStore((state) => state.editingTodo);
  const addTodo = useTodoStore((state) => state.addTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

 
  const [formData, setFormData] = useState<M_Todo>({
    id: Date.now(),
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
    completed: false,
    tags: [],
    createdAt: new Date().toISOString(),
  });


  const resetForm = () => {
    setFormData({
      id: Date.now(),
      title: "",
      description: "",
      dueDate: "",
      priority: "medium",
      completed: false,
      tags: [],
      createdAt: new Date().toISOString(),
    });
  };

  
  useEffect(() => {
    if (editingTodo) {
      setFormData(editingTodo);
    }
  }, [editingTodo]);

  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingTodo) {
      updateTodo({ ...formData, id: editingTodo.id });
    } else {
      addTodo(formData);
    }

    resetForm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-4 bg-white rounded-xl shadow-md max-w-md mx-auto"
    >
      <input
        name="title"
        placeholder="Tiêu đề"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="description"
        placeholder="Mô tả"
        value={formData.description}
        onChange={handleChange}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        name="dueDate"
        type="date"
        value={formData.dueDate}
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
              checked={formData.tags?.includes(tag)}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setFormData((prev) => ({
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
        value={formData.priority}
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
};

