// MÁQUINA DE ESCREVER
const frases = [
    "Ir ao Couto Pereira",
    "Escutar músicas",
    "Assistir filmes",
    "Programar",
];

let i = 0;
let j = 0;
let apagando = false;
const elemento = document.getElementById("typewriter");

function typeWriter() {
    let texto = frases[i];

    if (!apagando) {
        elemento.textContent = texto.substring(0, j++);
    } else {
        elemento.textContent = texto.substring(0, j--);
    }

    if (j === texto.length) {
        apagando = true;
        setTimeout(typeWriter, 1200);
        return;
    }

    if (apagando && j === 0) {
        apagando = false;
        i = (i + 1) % frases.length;
    }

    setTimeout(typeWriter, 120);
}

typeWriter();


// FADE-IN PARA O SOBRE MIM
const fadeSection = document.querySelector(".fade-section");

function checkFade() {
    const pos = fadeSection.getBoundingClientRect().top;
    if (pos < window.innerHeight - 80) fadeSection.classList.add("show");
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);
