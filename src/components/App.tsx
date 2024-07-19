import { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");
  console.log(todos);
  

  const handleAddTodo = () => {
    if (value.trim() !== "") {
      setTodos([...todos, value]);
      setValue("");
    }
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-center text-3xl font-bold mb-8">Todo App</h1>
          <div className="flex mb-4">
            <input
              type="text"
              className="py-2 px-4 w-full border rounded-l focus:outline-none"
              placeholder="Add a todo..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              type="button"
              className="py-2 px-4 bg-blue-500 text-white rounded-r"
              onClick={handleAddTodo}
            >
              Add
            </button>
          </div>
          <TodoList todos={todos} onDelete={handleDeleteTodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
