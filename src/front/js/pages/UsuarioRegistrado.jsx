import React from "react";

import useAppContext from "../store/AppContext.js";
import { useNavigate } from "react-router-dom";

const UsuarioRegistrado = () => {
  const { store, actions } = useAppContext();

  const navigate = useNavigate();

  const goOut = () => {
    navigate("/");
  };

  function handleGoOut(e) {
    e.preventDefault();
    setTimeout(goOut, 350);
  }

  return (
    <div>
      {store.usuario.user ? (
        <div>
          <h2>
            Bienvenido Usuario cuya ID es: {store.usuario.user.id}, está usted
            registrado y puede acceder a las rutas protegidas
          </h2>
          <h3>Esto es una ruta privada</h3>
          <h4>Este es su email {store.usuario.user.email}</h4>
        </div>
      ) : (
        <div>
          <h2>Esta es una ruta protegida</h2>
          <h3>Deberá usted redirigirse a la pagina de inicio</h3>
          <button className="btn btn-warning" onClick={(e) => handleGoOut(e)}>
            Pulsa aquí para ser redirigido
          </button>
        </div>
      )}
    </div>
  );
};

export default UsuarioRegistrado;
