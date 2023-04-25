let datos_personales = {
    nombre: "Juan Pablo",
    apellido: "Tafolla",
    edad: 22,
    altura: 1.85,
    eresDesarrollador: true,
};

console.log(datos_personales);

let edad = datos_personales.edad;
console.log(edad);

let mejores_amigos = [
    {
        nombre: "Jonathan",
        apellido: "Ramirez",
        edad: 22,
        altura: 1.64,
        eresDesarrollador: true,
    },
    {
        nombre: "Emiliano",
        apellido: "Mercado",
        edad: 21,
        altura: 1.68,
        eresDesarrollador: false,
    },
];

console.log(mejores_amigos);

let lista = [datos_personales, mejores_amigos]
console.log(lista);

let listaEdad = lista.sort((a, b) => b.edad - a.edad)
console.log(listaEdad);