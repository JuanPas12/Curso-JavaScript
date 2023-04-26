function funcion_true() {
    return true;
}

console.log(funcion_true());

function hola_retrasado() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Hola soy una promesa");
            resolve();
        }, 5000);
    });
}

hola_retrasado().then(() => {
    console.log("La promesa ha terminado");
});

function* indices_pares() {
    let id = 0;
    while (true) {
        if (id === 20) {
            return "Limite maximo de id";
        }
        yield id;
        id += 2;
    }
}

const gen = indices_pares();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

