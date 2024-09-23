// Import necessary hooks and components
import { useEffect, useState } from "react";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";
// Import styles
import "./styles.css";

export default function App() {
  // Initialize state with todos from localStorage or an empty array
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  // Sync todos with localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos]);

  // Function to add a new todo
  function addTodo(title) {
    setTodos(currentTodos => [
      ...currentTodos,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
  }

  // Function to toggle the completed status of a todo
  function toggleTodo(id, completed) {
    setTodos(currentTodos => 
      currentTodos.map(todo => 
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  }

  // Function to delete a todo
  function deleteTodo(id) {
    setTodos(currentTodos => 
      currentTodos.filter(todo => todo.id !== id)
    );
  }

  return (
    <div className="app-container">
      {/* Header image */}
      <img src="src\img\geo.png" alt="colorful shapes" className="header-image"/>
      {/* Form to add new todos */}
      <NewTodoForm onSubmit={addTodo}/>
      {/* Header for the todo list */}
      <h1 className="header">To-Do List</h1>
      {/* List of todos */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </div>
  );
}
