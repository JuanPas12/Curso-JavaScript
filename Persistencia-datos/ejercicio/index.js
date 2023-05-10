let nombre = "Juan Pablo";
let apellido = "Tafolla";
let yo = {
    miNombre: nombre,
    miApellido: apellido,
};

sessionStorage.setItem("sessionStorage", JSON.stringify(yo));

localStorage.setItem("localStorage", JSON.stringify(yo));

var fechaExpiracion = new Date();
fechaExpiracion.setTime(fechaExpiracion.getTime() + 2 * 60 * 1000);
var cookieValor = JSON.stringify(yo);
document.cookie =
    "miCookie=" + cookieValor + "; expires=" + fechaExpiracion.toUTCString();
