import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./css/Error.css";
import CitasContext from "../context/CitasContext";
const Error = () => {
  //se crea el context de la pagina error con Useeffect
  const citasContext = useContext(CitasContext);
  const { titulo, animacion, setTitulo } = citasContext;

  useEffect(() => {
    //establecer el titulo de la pagina
    setTitulo("CitApp - Página no Encontrada!!");
    document.title = titulo;

    //animación por medio de hooks

    const titulo_404 = document.querySelector(".titulo__error");
    const subcontenido = document.querySelector(".subcontenido__error");
    const btnError = document.querySelector(".boton__error");

    titulo_404.classList.add(`${animacion}`, "animate__bounceInLeft");
    subcontenido.classList.add(`${animacion}`, "animate__bounceInLeft");
    btnError.classList.add(`${animacion}`, "animate__bounceInLeft");
  }, [titulo, setTitulo, animacion]);
  return (
    <div className="contenido__error">
      <h1 className="titulo__error">404 ERROR</h1>
      <h3 className="subcontenido__error">Pagina No Encontrada</h3>
      <Link to="/" className="boton boton__error">
        Volver a Inicio
      </Link>
    </div>
  );
};

export default Error;
