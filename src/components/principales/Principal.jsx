import React, { useEffect, useContext } from "react";
import Sidebar from "../secundarios/Sidebar";
import "./css/Principal.css";
import imgLogo from "../../img/logo.svg";
import CitasContext from "../context/CitasContext";
const Principal = () => {
  //se crea el context
  const citasContext = useContext(CitasContext);
  const { titulo, setTitulo } = citasContext;

  useEffect(() => {
    setTitulo("CitApp - Home");
    document.title = titulo;
    //eslint-disable-next-line
  }, [titulo]);

  return (
    <div className="wrap__contenido">
      <Sidebar />
      <div className="contenido__principal">
        <img src={imgLogo} alt="Logo Principal" />
      </div>
    </div>
  );
};

export default Principal;
