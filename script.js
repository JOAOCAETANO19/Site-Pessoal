// TEXTOS DA MÁQUINA DE ESCREVER
const textos = [
    "Bem-vindo ao meu site",
    "João Caetano",
    "As coisas que eu gosto"
];

let indexTexto = 0;
let indexLetra = 0;
const speed = 90;

function typeWriter() {
    if (indexLetra < textos[indexTexto].length) {
        document.getElementById("typewriter").innerHTML += textos[indexTexto].charAt(indexLetra);
        indexLetra++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(() => {
            indexLetra = 0;
            indexTexto++;

            if (indexTexto >= textos.length) indexTexto = 0;

            document.getElementById("typewriter").innerHTML = "";
            typeWriter();
        }, 1200);
    }
}

typeWriter();


// FADE-IN AO ROLAR
const itens = document.querySelectorAll('.fade-item');

function mostrarItens() {
    const topoTela = window.innerHeight;

    itens.forEach(el => {
        const distancia = el.getBoundingClientRect().top;
        if (distancia < topoTela - 80) {
            el.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', mostrarItens);
