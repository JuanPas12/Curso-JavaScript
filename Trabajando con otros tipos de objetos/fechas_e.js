let fecha_hoy = new Date();
console.log(fecha_hoy);

let fecha_nacimiento = new Date("July 12, 2000");
console.log(fecha_nacimiento);

let mas_tarde;
if (fecha_hoy.getTime() > fecha_nacimiento.getTime()) {
    mas_tarde = true;
} else {
    mas_tarde = false;
}

console.log(mas_tarde);

let dia_nacimiento = fecha_nacimiento.getDate();
console.log(dia_nacimiento);

let mes_nacimiento = fecha_nacimiento.getMonth() + 1;
console.log(mes_nacimiento);

let anyo_nacimiento = fecha_nacimiento.getFullYear();
console.log(anyo_nacimiento);