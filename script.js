// Espera a que toda la página cargue
window.addEventListener("DOMContentLoaded", () => {

    const envelope = document.getElementById("envelope");
    const seal = document.getElementById("seal");

    let opened = false;

    seal.addEventListener("click", () => {

        if (opened) return;

        opened = true;

        // Evita volver a pulsar
        seal.style.pointerEvents = "none";

        // Abre el sobre
        envelope.classList.add("open");

        // Pequeño efecto de desaparecer
        seal.animate(
            [
                {
                    transform: "translateX(-50%) scale(1)",
                    opacity: 1
                },
                {
                    transform: "translateX(-50%) scale(0.8)",
                    opacity: 0
                }
            ],
            {
                duration: 500,
                fill: "forwards",
                easing: "ease"
            }
        );

        // Espera a terminar la animación
        setTimeout(() => {

            window.location.href =
                "https://malauboda.my.canva.site/copia-de-laura";

        }, 5000);

    });

});