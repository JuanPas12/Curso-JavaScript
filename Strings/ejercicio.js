let Nombre = "Juan Pablo";
let Apellido = "Tafolla";

let estudiante = Nombre.concat(" ", Apellido);
console.log(estudiante);

let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let num_letras = estudiante.length;
console.log(num_letras);

let primera_letra_Nombre = Nombre.charAt(0);
console.log(primera_letra_Nombre);

let ultima_letra_Apellido = Apellido.charAt(6);
console.log(ultima_letra_Apellido);

let eliminar_espacios = estudiante.replace(/ /g, "");
console.log(eliminar_espacios);

let contenido = estudiante.includes(Nombre);
console.log(contenido);