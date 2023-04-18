var variable;
let variable_let;

const constante = "Hola soy una constante";

var a = 1;
console.log(a);

a = 4;
console.log(a);

console.log(constante);
// constante = "Adios"; nos da un error

let b = 3;
console.log(b);

b = 5;
console.log(b);

var variable = "Hola soy una vaiable var";

for (var i = 0; i < 3; i++) {
    var variable = "Soy la segunda variable";
}

console.log(variable);

let variablelet = "Hola soy una vaiable let";

for (let i = 0; i < 3; i++) {
    let variable = "Soy la segunda variable";
}

console.log(variablelet);

////////////////////////S//////////////
var num = 4;

console.log (typeof num);

num = "Hola soy num";

console.log (typeof num);
