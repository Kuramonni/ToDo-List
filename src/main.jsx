// Import necessary modules from React
import { StrictMode } from 'react'
// Import the createRoot function from react-dom/client
import { createRoot } from 'react-dom/client'
// Import the main App component
import App from './App.jsx'

// Create a root and render the App component wrapped in StrictMode
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
