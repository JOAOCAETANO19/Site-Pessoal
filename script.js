const text = "Bem-vindo ao meu site!";
let index = 0;

function typeWriter() {
    document.querySelector(".typing").textContent = text.slice(0, index);

    if (index < text.length) {
        index++;
        setTimeout(typeWriter, 90);
    }
}

typeWriter();
