/* TYPING EFFECT */
(function typingEffect(){
  const texto = "Bem-vindo ao meu site!";
  const el = document.getElementById('digitar');
  if(!el) return;
  let i = 0;
  const velocidade = 70; // ms por letra

  function digitar(){
    el.textContent = texto.slice(0, i);
    i++;
    if(i <= texto.length) setTimeout(digitar, velocidade);
  }
  // start after DOM loaded
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(digitar, 200); // pequeno atraso visual
  });
})();

/* FADE-IN ON SCROLL (IntersectionObserver) */
(function revealOnScroll(){
  const itens = document.querySelectorAll('.fade-item');
  if(!('IntersectionObserver' in window)){
    // fallback: show all
    itens.forEach(el => el.classList.add('ativo'));
    return;
  }

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('ativo');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15});

  itens.forEach(el => obs.observe(el));
})();
