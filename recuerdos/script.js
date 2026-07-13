// Animación de aparición
window.addEventListener("load", () => {

    const contenedor = document.querySelector(".contenedor");

    contenedor.style.opacity = "0";
    contenedor.style.transform = "translateY(25px)";

    setTimeout(() => {

        contenedor.style.transition = "all .8s ease";

        contenedor.style.opacity = "1";
        contenedor.style.transform = "translateY(0)";

    }, 150);

});

// Animación suave del botón
const boton = document.querySelector(".boton");

setInterval(() => {

    boton.animate([
        { transform: "scale(1)" },
        { transform: "scale(1.05)" },
        { transform: "scale(1)" }
    ], {
        duration: 900,
        easing: "ease-in-out"
    });

}, 5000);
