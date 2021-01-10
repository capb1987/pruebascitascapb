import React from "react";
import logo from "../../img/logo.svg";
import "./css/Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <NavLink to="/">
        <img className="header__logo" src={logo} alt="Logo Principal" />
      </NavLink>
    </div>
  );
};

export default Header;
