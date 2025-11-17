const text = "Bem-vindo ao meu site!";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80);
    }
}

typeWriter();
