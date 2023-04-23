let listaCompras = ["Leche", "Huevo", "Azucar", "Papel de baño", "Jabón"];
listaCompras.push("Aceite de girasol");
console.log(listaCompras);

listaCompras.pop();
console.log(listaCompras);

let listaPeliculasFavoritas = [
    {
        titulo: "Avengers: Endgame",
        director: "Anthony Russo, Joe Russo",
        fecha: "2018-04-26",
    },
    {
        titulo: "Avengers: Infinity War",
        director: "Anthony Russo, Joe Russo",
        fecha: "2018-04-27",
    },
    {
        titulo: "Pantera Negra",
        director: "Ryan Coogler",
        fecha: "2018-02-14",
    },
];

let peliculasPosteriores2010 = listaPeliculasFavoritas.filter((pelicula) => {
    let fechaPelicula = new Date(pelicula.fecha);
    let fechaLimite = new Date("2010-01-01");
    return fechaPelicula.getTime() > fechaLimite.getTime();
});

console.log(peliculasPosteriores2010);

let directores = listaPeliculasFavoritas.map((dir) => dir.director);
console.log(directores);

let titulos = listaPeliculasFavoritas.map((tit) => tit.titulo);
console.log(titulos);

let listaConcatenada = directores.concat(titulos);
console.log(listaConcatenada);

let listaPropagada = [...directores, ...titulos];
console.log(listaPropagada);
