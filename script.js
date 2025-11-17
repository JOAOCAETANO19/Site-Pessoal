// ANIMAÇÃO AO ROLAR
function revelarAoRolar() {
  const elementos = document.querySelectorAll('.foto, .item');

  elementos.forEach((el, index) => {
    const pos = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight - 100;

    if (pos < windowHeight) {
      setTimeout(() => {
        el.classList.add('ativo');
      }, index * 150);
    }
  });
}

window.addEventListener('scroll', revelarAoRolar);
window.addEventListener('load', revelarAoRolar);

// EFEITO DE DIGITAÇÃO
window.addEventListener("load", () => {
  const texto = "Bem-vindo ao meu site!";
  const elemento = document.getElementById("digitando");

  let i = 0;

  function digitar() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(digitar, 120);
    }
  }

  digitar();
});
