import React from "react";

const Profile = ({ username, onLogout }) => {
  return (
    <div>
      <h1>Perfil de {username}</h1>
      <button onClick={onLogout}>Cerrar Sesión</button>
    </div>
  );
};

export default Profile;