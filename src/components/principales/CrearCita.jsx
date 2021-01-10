import React, { useEffect, useContext } from "react";
import Sidebar from "../secundarios/Sidebar";
import CitasContext from "../context/CitasContext";

const CrearCita = () => {
  //se crea el context de la pagina error con Useeffect
  const citasContext = useContext(CitasContext);
  const {
    titulo,
    error,
    cita,
    setTitulo,
    setError,
    setCita,
    agregarCita,
  } = citasContext;

  const {
    documento,
    nombre,
    apellidos,
    correo,
    direccion,
    hora,
    detalle,
  } = cita;

  useEffect(() => {
    setTitulo("CitApp - Crear tu cita");
    document.title = titulo;
  }, [titulo, setTitulo]);

  const handleChange = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const submitCita = (e) => {
    e.preventDefault();

    //se valida el formulario
    if (
      (documento.trim() === "",
      nombre.trim() === "",
      apellidos.trim() === "",
      correo.trim() === "",
      direccion.trim() === "",
      hora.trim() === "",
      detalle.trim() === "")
    ) {
      setError(true);
      return;
    } else {
      setError(false);

      agregarCita(cita);

      // limpia el formulario

      setCita({
        documento: "",
        nombre: "",
        apellidos: "",
        correo: "",
        direccion: "",
        hora: "",
        detalle: "",
      });
    }
  };
  return (
    <div className="wrap__contenido">
      <Sidebar />
      <div className="contenido__principal">
        <div className="contenido__principal__form">
          {error ? (
            <p className="alerta-error">
              Campos en blanco, Todos los campos son obligatorios
            </p>
          ) : null}
          <form onSubmit={submitCita} className="form_crear_cita">
            <fieldset>
              <legend>Formulario para Crear Citas por la Aplicación</legend>
              <div className="input__formulario">
                <label htmlFor="documento">Documento de identidad</label>
                <input
                  type="text"
                  name="documento"
                  id="documento"
                  className="contenido_input_documento"
                  value={documento}
                  onChange={handleChange}
                />
              </div>
              <div className="input__formulario">
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  id="nombre"
                  className="contenido_input_nombre"
                  value={nombre}
                  onChange={handleChange}
                />
              </div>
              <div className="input__formulario">
                <label htmlFor="apellidos">Apellidos</label>
                <input
                  type="text"
                  name="apellidos"
                  id="apellidos"
                  className="contenido_input_apellidos"
                  value={apellidos}
                  onChange={handleChange}
                />
              </div>
              <div className="input__formulario">
                <label htmlFor="correo">Correo</label>
                <input
                  type="email"
                  name="correo"
                  id="correo"
                  className="contenido_input_correo"
                  value={correo}
                  onChange={handleChange}
                />
              </div>
              <div className="input__formulario">
                <label htmlFor="direccion">Dirección</label>
                <input
                  type="text"
                  name="direccion"
                  id="direccion"
                  className="contenido_input_direccion"
                  value={direccion}
                  onChange={handleChange}
                />
              </div>
              <div className="input__formulario">
                <label htmlFor="hora">Hora</label>
                <input
                  type="time"
                  name="hora"
                  id="hora"
                  className="contenido_input_hora"
                  value={hora}
                  onChange={handleChange}
                />
              </div>
              <div className="input__formulario">
                <label htmlFor="detalle_cita">Detalle de la Cita</label>
                <textarea
                  name="detalle"
                  id="detalle_cita"
                  className="contenido_input_detalle"
                  value={detalle}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="input__formulario">
                <input
                  type="submit"
                  value="Crear Cita"
                  className="boton boton--submit"
                />
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CrearCita;
