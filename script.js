// Faz as imagens aparecerem com efeito suave ao rolar
const elementos = document.querySelectorAll('.foto, .item');

function animarScroll() {
  const topoPagina = window.scrollY + window.innerHeight;
  
  elementos.forEach(el => {
    const topoElemento = el.offsetTop;
    if (topoPagina > topoElemento + 100) {
      el.classList.add('ativo');
    }
  });
}

window.addEventListener('scroll', animarScroll);
animarScroll();
