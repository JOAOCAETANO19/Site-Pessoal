// Texto que será digitado
const texto = "Bem-vindo ao meu site!";
let index = 0;
const velocidade = 80;

// Função de digitação
function digitar() {
    const elemento = document.getElementById("texto-digitado");

    if (index < texto.length) {
        elemento.textContent += texto.charAt(index);
        index++;
        setTimeout(digitar, velocidade);
    }
}

window.onload = digitar;
