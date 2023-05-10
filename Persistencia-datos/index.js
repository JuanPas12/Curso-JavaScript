// localStorage.setItem("nombre", "Gorka")
// localStorage.setItem("nombre", "Miguel")

// console.log(localStorage.getItem("nombre"))

// localStorage.setItem("persona", JSON.stringify({ nombre: "gorka", edad: 32 }))

// console.log(JSON.parse(localStorage.getItem("persona")))

// JSON.stringify -> Convierte un objeto/array en string
// JSON.parse -> Convierte un objeto/array convertido a través de stringify en un objeto de Javascript

localStorage.removeItem("nombre")

sessionStorage.setItem("nombre-sesion", "Juan Pablo")

/* Cookies */

document.cookie = "nombreCookie=JuanPabloCookie"

document.cookie = "nombreCaducidad=Nombre;expires=" + new Date(2024, 0, 1).toUTCString()

console.log(document.cookie)