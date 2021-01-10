import { useState, useReducer } from "react";
import CitaContext from "./CitasContext";
import CitaReducer from "./CitaReducer";
import { CREAR_CITA, ELIMINAR_CITA } from "../types";
import { v4 as uuidV4 } from "uuid";

const CitaState = (props) => {
  const initialState = {
    citas: [],
  };
  //agregar un titulo

  const [titulo, setTitulo] = useState(null);

  //agrega state de error

  const [error, setError] = useState(false);

  const [cita, setCita] = useState({
    documento: "",
    nombre: "",
    apellidos: "",
    correo: "",
    direccion: "",
    hora: "",
    detalle: "",
  });

  //state para crear con animate.css

  const [animacion, setAnimacion] = useState("animate__animated");

  const [state, dispatch] = useReducer(CitaReducer, initialState);

  //funciones para agregar al formulario

  //agrega una cita

  const agregarCita = (id) => {
    //se asigna id en cita

    cita.id = uuidV4();

    dispatch({
      type: CREAR_CITA,
      payload: id,
    });
  };

  //elimina una cita

  const eliminarCita = (id) => {
    dispatch({
      type: ELIMINAR_CITA,
      payload: id,
    });
  };

  return (
    <CitaContext.Provider
      value={{
        titulo,
        animacion,
        cita,
        citas: state.citas,
        error,
        setTitulo,
        setAnimacion,
        setError,
        setCita,
        agregarCita,
        eliminarCita,
      }}
    >
      {props.children}
    </CitaContext.Provider>
  );
};

export default CitaState;
