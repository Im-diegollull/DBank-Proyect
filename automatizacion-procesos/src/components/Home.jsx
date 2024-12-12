import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <h1>Bienvenido a la Plataforma</h1>
      <p>
        Aquí puedes documentar tus procesos y automatizar tareas de manera
        eficiente. Haz clic en el botón para comenzar.
      </p>
      <Link to="/process">
        <button>Comenzar</button>
      </Link>
    </div>
  );
};

export default Home;
