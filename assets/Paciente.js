export default class Paciente {
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

//Arreglo pacientes
//const helper = "Hola";
//const adios = "adios";

//export default Paciente;
//export {helper, adios };