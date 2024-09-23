import { useState } from "react";

// NewTodoForm component definition
export function NewTodoForm({ onSubmit }) {
    // State to hold the value of the new item input
    const [newItem, setNewItem] = useState("");

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault(); // Prevent the default form submission behavior
        if (newItem === "") return; // If the input is empty, do nothing

        onSubmit(newItem); // Call the onSubmit function passed as a prop with the new item

        setNewItem(""); // Clear the input field
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item:</label>
                <input 
                    value={newItem} 
                    onChange={e => setNewItem(e.target.value)} 
                    type="text" 
                    id="item" 
                />
            </div>
            <button className="btn" type="submit">Add</button>
        </form>
    );
}