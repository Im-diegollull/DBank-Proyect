import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/process">Automatización Factura</Link>
        <Link to="/documentation">Automatización 2</Link>
        <Link to="/about">Automatización 3</Link>
     
        <Link to="/signup">Welcome</Link>
        <Link to="/profile">Perfil</Link>
      </div>
    </nav>
  );
};

export default Navbar;