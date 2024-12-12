import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isAuthenticated, onLogout }) => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/process">Automatización Factura</Link>
        <Link to="/invoices">Automatización Tareas</Link>
        <Link to="/about">Automatización 3</Link>
        {isAuthenticated ? (
          <>
            <Link to="/profile">Perfil</Link>
            <button onClick={onLogout}>Cerrar Sesión</button>
          </>
        ) : (
          <>
            <Link to="/login">Iniciar Sesión</Link>
            <Link to="/signup">Registrarse</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
