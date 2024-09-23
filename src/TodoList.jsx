import { TodoItem } from './TodoItem'; // Import the TodoItem component

// Define the TodoList component
export function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <div className="todo-list-container">
            <ul className="todo-list">
                {/* Display a message if there are no todos */}
                {todos.length === 0 && (
                    <p className="no-todos-message">No Todos</p>
                )}
                {/* Map over the todos and render a TodoItem for each one */}
                {todos.map(todo => (
                    <TodoItem
                        {...todo} // Spread the todo properties
                        key={todo.id} // Use the todo id as the key
                        toggleTodo={toggleTodo} // Pass the toggleTodo function
                        deleteTodo={deleteTodo} // Pass the deleteTodo function
                    />
                ))}
            </ul>
        </div>
    );
}
