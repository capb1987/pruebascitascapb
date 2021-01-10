import React from "react";
import "./css/Sidebar.css";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <aside className="contenido__sidebar">
      <h2 className="contenido__titulo">Bienvenido, que deseas hacer?</h2>
      <NavLink to="/crear" activeClassName="active" className="item__contenido">
        Crear Cita
      </NavLink>
      <NavLink
        to="/listado"
        activeClassName="active"
        className="item__contenido"
      >
        Listado de Citas
      </NavLink>
    </aside>
  );
};

export default Sidebar;
