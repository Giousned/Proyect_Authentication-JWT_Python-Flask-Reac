import React from "react";

import { createContext, useContext, useState, useEffect } from "react";

import { login, register, getMyToken } from "../services/FETCH.js";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usuario, setUsuario] = useState("");


  const handleSubmitRegister = (e) => {
    e.preventDefault();

    register(email, password);

    // getMyTasks(email, password);
  };

  const handleSubmitLogIn = (e) => {
    e.preventDefault();

    return (    login(email, password)
    .then((data) => {
      setUsuario({token: data.token, user: data.user});
    }));

  };

  useEffect(() => {

    if (!sessionStorage.getItem("jwt-token")) return

    getMyToken()
      .then((data) => {
        setUsuario({token: data.token, user: data.user});
      });

  },[]);

  const handleLogOut = () => {
    sessionStorage.removeItem("jwt-token");
    setUsuario({ token: "", user: "" });
  };

  const store = {
    email,
    password,
    usuario,
  };

  const actions = {
    setEmail,
    setPassword,
    setUsuario,
    handleSubmitRegister,
    handleSubmitLogIn,
    handleLogOut,
  };

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
