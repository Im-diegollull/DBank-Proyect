import React, { useState } from "react";
import "./SignUp.css"; // Importa el archivo CSS

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica de registro
    onSignUp(username, password);
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Registrarse</h1>
      <form onSubmit={handleSubmit} className="signup-form">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="signup-input"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
        <button type="submit" className="signup-button">Registrarse</button>
      </form>
    </div>
  );
};

export default SignUp;