import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Principal from "../principales/Principal";
import Header from "./Header";
import Footer from "./Footer";
import Error from "./Error";
import CrearCita from "../principales/CrearCita";
import CitaState from "../context/CitaState";
import ListarCita from "../principales/ListarCita";

const Rutas = () => {
  return (
    <CitaState>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route path="/crear" component={CrearCita} />
          <Route path="/listado" component={ListarCita} />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Router>
    </CitaState>
  );
};

export default Rutas;
