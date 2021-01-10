import React, { useContext, useEffect } from "react";
import Sidebar from "../secundarios/Sidebar";
import CitasContext from "../context/CitasContext";

const ListarCita = () => {
  const citasContext = useContext(CitasContext);
  const { titulo, citas, eliminarCita, setTitulo } = citasContext;

  useEffect(() => {
    setTitulo("CitApp - Listar Citas");
    document.title = titulo;
  }, [titulo, setTitulo]);

  return (
    <div className="wrap__contenido">
      <Sidebar />
      <h3>Mis Citas</h3>
      <div className="contenido__principal contenido__listar">
        {
          // eslint-disable-next-line
          citas != "" ? (
            citas.map((cita) => (
              <div className="citas" key={cita.id}>
                <p>Nombre del Paciente: {cita.nombre}</p>
                <p>Apellidos: {cita.apellidos}</p>
                <p>Documento: {cita.documento}</p>
                <p>Correo: {cita.correo}</p>
                <p>Hora: {cita.hora}</p>
                <p>Detalle: {cita.detalle}</p>

                <div className="input__borrar">
                  <button
                    className="boton__eliminar"
                    onClick={() => eliminarCita(cita.id)}
                  >
                    Eliminar Cita
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No hay Citas aún</p>
          )
        }
      </div>
    </div>
  );
};

export default ListarCita;
