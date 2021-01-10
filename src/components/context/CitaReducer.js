import { CREAR_CITA, ELIMINAR_CITA } from "../types";

const CitaReducer = (state, action) => {
  switch (action.type) {
    case CREAR_CITA:
      return {
        ...state,
        citas: [...state.citas, action.payload],
      };
    case ELIMINAR_CITA:
      return {
        ...state,
        citas: state.citas.filter((cita) => cita.id !== action.payload),
      };
    default:
      return state;
  }
};

export default CitaReducer;
