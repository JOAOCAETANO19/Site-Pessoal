// Faz os elementos aparecerem suavemente ao rolar a página
function revelarAoRolar() {
  const elementos = document.querySelectorAll('.foto, .item');

  elementos.forEach((el, index) => {
    const posicao = el.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight - 100;

    if (posicao < alturaJanela) {
      // Adiciona a classe com delay suave para efeito em sequência
      setTimeout(() => {
        el.classList.add('ativo');
      }, index * 150);
    }
  });
}

// Executa ao carregar e ao rolar
window.addEventListener('scroll', revelarAoRolar);
window.addEventListener('load', revelarAoRolar);

