// Obtiene el código de la URL
const params = new URLSearchParams(window.location.search);
const codigo = params.get("codigo");

// Busca el invitado
const invitado = invitados[codigo];

// Referencias
const nombre = document.getElementById("nombre");
const mensaje = document.getElementById("mensaje");
const sobre = document.getElementById("sobre");
const sello = document.getElementById("sello");
const selloIzq = document.getElementById("selloIzq");
const selloDer = document.getElementById("selloDer");

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

sello.addEventListener("click", () => {

    sello.style.display = "none";

    selloIzq.style.opacity = "1";
    selloDer.style.opacity = "1";

    selloIzq.animate([
        {
            transform:"translate(-50%,-50%) rotate(0deg)"
        },
        {
            transform:"translate(-90px,-30px) rotate(-28deg)"
        }
    ],{
        duration:350,
        fill:"forwards",
        easing:"ease-out"
    });

    selloDer.animate([
        {
            transform:"translate(-50%,-50%) rotate(0deg)"
        },
        {
            transform:"translate(40px,-70px) rotate(30deg)"
        }
    ],{
        duration:350,
        fill:"forwards",
        easing:"ease-out"
    });

    setTimeout(()=>{

        window.location.href="https://malauboda.my.canva.site/malauboda";

    },350);

});
