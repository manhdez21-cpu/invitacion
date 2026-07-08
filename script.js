// Obtiene el código de la URL
const params = new URLSearchParams(window.location.search);
const codigo = params.get("codigo");

// Busca el invitado
const invitado = invitados[codigo];

// Referencias
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");
const sobre = document.getElementById("sobre");

// Si existe el invitado
if (invitado) {

    nombre.textContent = invitado.nombre;

    if (invitado.cupos === 1) {
        mensaje.textContent = "Hemos reservado un lugar para ti.";
    } else {
        mensaje.textContent = `Hemos reservado ${invitado.cupos} lugares para ti.`;
    }

} else {

    nombre.textContent = "Bienvenido";
    mensaje.textContent = "";

}

// Al tocar el sobre abre la invitación
sobre.addEventListener("click", () => {

    window.location.href =
    "https://malauboda.my.canva.site/malauboda";

});
