import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Global styles for your application
import { RouterProvider } from "react-router-dom";  // Import RouterProvider to use the router
import { router } from "./routes";  // Import the router configuration
import { AppProvider } from './context/AppContext.jsx';  // Import the StoreProvider for global state management

const Main = () => {
    return (
        <React.StrictMode>  
            {/* Provide global state to all components */}
            <AppProvider> 
                {/* Set up routing for the application */} 
                <RouterProvider router={router}/>
            </AppProvider>
        </React.StrictMode>
    );
};

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
