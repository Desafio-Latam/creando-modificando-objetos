import Paciente from "./Paciente.js";
import { pacientes } from "./data.js";

pacientes.forEach((paciente, i) => {
    const newDatosPaciente = new Paciente(
      paciente.nombre,
      paciente.edad,
      paciente.rut,
      paciente.diagnostico
    );
    newDatosPaciente.imprimirDatos("pacientes", i + 1);
  });
  
  //console.log(paciente1.nombre);
  
  //paciente1.imprimirDatos("pacientes"); //imprime el id del h2
  //paciente2.imprimirDatos("pacientes");
  