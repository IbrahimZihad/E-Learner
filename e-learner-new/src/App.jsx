import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import RouterPage from "./router/router";

const AppContent = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-lg font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    // Main layout wrapper to fix footer at the bottom
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <RouterPage />
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
