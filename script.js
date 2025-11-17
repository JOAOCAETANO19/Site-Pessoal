// ANIMAÇÃO AO ROLAR
function revelarAoRolar() {
  const elementos = document.querySelectorAll('.foto, .item');

  elementos.forEach((el, index) => {
    const posicao = el.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight - 100;

    if (posicao < alturaJanela) {
      setTimeout(() => {
        el.classList.add('ativo');
      }, index * 150);
    }
  });
}

window.addEventListener('scroll', revelarAoRolar);
window.addEventListener('load', revelarAoRolar);


// EFEITO DE DIGITAÇÃO
const texto = "Pode ser";
let i = 0;

function digitar() {
  if (i < texto.length) {
    document.getElementById("digitando").textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, 120);
  }
}

window.addEventListener("load", digitar);
