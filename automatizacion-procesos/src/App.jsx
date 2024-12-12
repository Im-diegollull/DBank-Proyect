import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProcessAutomatization from "./components/ProcessAutomatization";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import InvoiceProcessor from "./components/InvoiceProcessor";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);

  const handleLogin = (username, password) => {
    if (!username || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      setIsAuthenticated(true);
      setUsername(username);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  const handleSignUp = (username, password) => {
    if (!username || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (users.some((user) => user.username === username)) {
      alert("Este nombre de usuario ya está registrado.");
      return;
    }

    setUsers([...users, { username, password }]);
    setIsAuthenticated(true);
    setUsername(username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername("");
  };

  return (
    <Router>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/signup" />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/" /> : <Login onLogin={handleLogin} />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <SignUp onSignUp={handleSignUp} />} />
        <Route path="/profile" element={isAuthenticated ? <Profile username={username} onLogout={handleLogout} /> : <Navigate to="/login" />} />
        <Route path="/process" element={isAuthenticated ? <ProcessAutomatization /> : <Navigate to="/login" />} />
        <Route path="/invoices" element={isAuthenticated ? <InvoiceProcessor /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
