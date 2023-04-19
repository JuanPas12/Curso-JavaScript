// Igualdad

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

// == Solo compara el valor
// === Compara el valor y el tipo

if (a == b) {
    console.log("a es igual a b - Débil");
}

if (a === b) {
    console.log("a es igual a b - Fuerte");
}

let c = 4;
let d = "4";

if (c != d) {
    console.log("c es diferente a d - Debil");
}

if (c !== d) {
    console.log("c es diferente a d - Fuerte");
}

// Comparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
    console.log("Max es mayor que min");
}

if (max >= 10) {
    console.log("max es mayor o igual que min");
}

if (min < max) {
    console.log("min es menor que max");
}

if (min <= max) {
    console.log("min es menor o igual que max");
}