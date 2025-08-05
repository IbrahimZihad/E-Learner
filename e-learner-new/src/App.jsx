import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
import RouterPage from "./router/router";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <RouterPage />
      <Footer />
    </AuthProvider>
  );
}

export default App;
