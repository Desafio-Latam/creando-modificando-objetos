class Paciente {
  constructor(nombre, edad, rut, diagnos) {
    this._nombre = () => nombre;
    this._edad = () => edad;
    this._rut = () => rut;
    this._diagnos = () => diagnos;
  }
  get nombre() {
    return this._nombre();
  }
  get edad() {
    return this._edad();
  }
  get rut() {
    return this._rut();
  }
  get diagnos() {
    return this._diagnos();
  }

  imprimirDatos(id, index) {
    const data = document.getElementById(id);
    data.innerHTML += `
        <tr>
        <td>${index}</td>
        <td>${this.nombre}</td>
        <td>${this.edad}</td>
        <td>${this.rut}</td>
        <td>${this.diagnos}</td>
        </tr>
        `;
  }
}
/* const paciente1 = new Paciente('Franco Urra', 47, '12886339-7', 'Hipertension', 1);
  const paciente2 = new Paciente('Josefino vega', 37, '12886339-7', 'colon irritable', 2); */
//Arreglo pacientes
const pacientes = [
  {
    nombre: "Franco Urra",
    edad: 47,
    rut: "12345678-9",
    diagnostico: "Hipertensión Arterial",
  },
  {
    nombre: "Matías Mesa",
    edad: 27,
    rut: "12345678-9",
    diagnostico: "Diabetes Mellitus 1",
  },
  {
    nombre: "Enrique Flores",
    edad: 37,
    rut: "12345678-9",
    diagnostico: "Disfunción de la vista",
  },
  {
    nombre: "Milagros Acosta",
    edad: 17,
    rut: "12345678-9",
    diagnostico: "Hipertensión Pulmonar",
  },
  {
    nombre: "Victor Fernandez",
    edad: 47,
    rut: "12345678-9",
    diagnostico: "Diabetes Mellitus 2",
  },
  {
    nombre: "Is Pinto",
    edad: 15,
    rut: "12345678-9",
    diagnostico: "Pancreatitis Aguda",
  },
  {
    nombre: "Francisco Lobos",
    edad: 2,
    rut: "12345678-9",
    diagnostico: "Neuroblastoma",
  },
  {
    nombre: "Jean Jaque",
    edad: 67,
    rut: "12345678-9",
    diagnostico: "Enfermedad de Parkinson",
  },
  {
    nombre: "Cesar Riveros",
    edad: 87,
    rut: "12345678-9",
    diagnostico: "resfriado"
  },
];

pacientes.forEach((paciente, i) => {
  const newDatosPaciente = new Paciente(
    paciente.nombre,
    paciente.edad,
    paciente.rut,
    paciente.diagnostico
  );
  newDatosPaciente.imprimirDatos("pacientes", i + 1);
});

console.log(paciente1.nombre);

paciente1.imprimirDatos("pacientes"); //imprime el id del h2
paciente2.imprimirDatos("pacientes");
