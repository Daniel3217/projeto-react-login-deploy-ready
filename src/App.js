import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import About from "./pages/About";
import Register from "./pages/Register";


function App() {
  return (
    <>
      <Navbar />
    <Routes>
  <Route
    path="/"
    element={
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    }
  />

  <Route path="/login" element={<Login />} />

  {/* 👇 AQUI */}
  <Route path="/about" element={<About />} />
  <Route path="/register" element={<Register />} />
</Routes>
    </>
  );
}

export default App;