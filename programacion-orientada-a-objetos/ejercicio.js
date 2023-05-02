class Estudiante {
    _nombre;
    _asignaturas = ["JavaScript", "HTML", "CSS"];
    constructor(nombre, _asignaturas) {
        this._nombre = nombre;
    }

    obtenDatos() {
        const datos = {
            nombre: this._nombre,
            _asignaturas: this._asignaturas,
        };
        return datos;
    }
}

const es = new Estudiante("Juan Pablo");
console.log(es.obtenDatos());
