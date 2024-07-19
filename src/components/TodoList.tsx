import React from "react";

interface TodoListProps {
  todos: string[];
  onDelete: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <ul className="mt-6">
      {todos.map((todo, index) => (
        <li
          key={index} // Added key prop
          className="flex items-center justify-between bg-gray-200 py-2 px-4 mb-2 rounded"
        >
          <span>{todo}</span>
          <button
            className="text-red-600 hover:text-red-800 focus:outline-none"
            onClick={() => onDelete(index)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
