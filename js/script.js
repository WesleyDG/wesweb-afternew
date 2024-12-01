"use strict"

window.addEventListener("load", function () {
    console.log(
        "Cette fonction est exécutée une fois quand la page est chargée.",
    );
});

// document.querySelectorAll(".timeline-block").onclick = function() {show(this);};
document.querySelectorAll(".timeline-block").forEach((block) => {
        block.addEventListener("click", (event) => {
            show(block);
            console.log("ok");
        });
});

function show(div) {
    div.classList.toggle("show");
    console.log("click");
}

function triggerAnim() {
    // Sélectionner le div que l'on souhaite observer
    const contents = document.querySelectorAll('.tool-list');

    // Créer un IntersectionObserver pour observer le positionnement du div
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Vérifier si le div est dans la zone centrale horizontale de l'écran
            if (entry.isIntersecting) {
                // Ajouter la classe 'animate' pour lancer l'animation
                entry.target.classList.add('animate');
            } else {
                // Retirer la classe 'animate' si le div sort de la zone
                entry.target.classList.remove('animate');
            }
        });
    }, {
        root: null, // Observer sur la fenêtre de visualisation (viewport)
        threshold: 0.5, // Déclenche l'animation si plus de 50% du div est visible
        rootMargin: "0px 0px -10% 0px" // Détecte lorsque le div atteint la zone centrale horizontale de l'écran (val initiale bottom -50%)
    });

    // Observer les div
    contents.forEach(content => {
        observer.observe(content);
    });
}

triggerAnim();