const texto = "Bem-vindo ao meu site!";
let index = 0;

function digitar() {
    const elemento = document.getElementById("texto-digitado");

    if (index < texto.length) {
        elemento.textContent += texto.charAt(index);
        index++;
        setTimeout(digitar, 80);
    }
}

window.onload = digitar;
