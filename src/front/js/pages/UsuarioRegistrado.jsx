import React from "react";

import useAppContext from "../store/AppContext.js";

const UsuarioRegistrado = () => {

  const {store, actions} = useAppContext();

  return (

    <h2>Bienvenido {store.usuario}, está usted registrado y puede acceder a las rutas protegidas</h2>


  );
};

export default UsuarioRegistrado;
