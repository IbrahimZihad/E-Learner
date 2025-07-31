import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // TailwindCSS entry
import { AuthProvider } from "./context/AuthContext"; // Optional, if using auth context

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider> {/* Optional: wrap with context if needed */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
