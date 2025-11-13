// Seleciona os elementos que vão ganhar animação
const elementos = document.querySelectorAll('.foto, .item');

function revelarAoRolar() {
  elementos.forEach((el, index) => {
    const topo = el.getBoundingClientRect().top;
    if (topo < window.innerHeight - 100) {
      setTimeout(() => el.classList.add('ativo'), index * 150);
    }
  });
}

// Executa a função ao rolar a página e ao carregar
window.addEventListener('scroll', revelarAoRolar);
window.addEventListener('load', revelarAoRolar);
