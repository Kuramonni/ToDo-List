// Function component for a single Todo item
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li className="todo-item">
            <div className="todo-item-content">
                {/* Checkbox to mark the todo as completed or not */}
                <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={e => toggleTodo(id, e.target.checked)}
                />
                {/* Label to display the title of the todo item */}
                <label className={completed ? 'completed-text' : ''}>
                    {title}
                </label>
            </div>
            {/* Button to delete the todo item */}
            <button 
                onClick={() => deleteTodo(id)} 
                className="btn btn-danger" 
                type="button"
            >
                Delete
            </button>
        </li>
    );
}
