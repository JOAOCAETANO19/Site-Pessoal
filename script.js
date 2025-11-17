// EFEITO DE DIGITAÇÃO
const texto = "Bem-vindo ao meu site!";
let index = 0;

function digitar() {
  const h1 = document.getElementById("digitar");
  h1.textContent = texto.substring(0, index);
  index++;

  if (index <= texto.length) {
    setTimeout(digitar, 120);
  }
}

digitar();

// ANIMAÇÃO AO ROLAR
function revelarAoRolar() {
  const elementos = document.querySelectorAll(".foto, .item");

  elementos.forEach((el, i) => {
    const pos = el.getBoundingClientRect().top;
    const altura = window.innerHeight - 100;

    if (pos < altura) {
      setTimeout(() => {
        el.classList.add("ativo");
      }, i * 150);
    }
  });
}

window.addEventListener("scroll", revelarAoRolar);
window.addEventListener("load", revelarAoRolar);
