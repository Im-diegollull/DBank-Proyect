import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
        <Link to="/process">Automatización Factura</Link>
        <Link to="/documentation">Automatización 2</Link>
        <Link to="/about">Automatizacion 3</Link>
      </div>
    </nav>
  );
};

export default Navbar;
