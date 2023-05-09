const boton = document.getElementById("btn");

boton.addEventListener("click", function mostrarAlerta() {
    alert("Click en botón");
});

$(() => {
    $("#btn-2").click(() => {
        console.log("Hola, estoy utilizando JQuery");
    });
});
