/* ---------- TYPING (máquina de escrever) ---------- */
(function(){
  const texto = "Bem-vindo ao meu site!";
  const el = document.getElementById('typing');
  if(!el) return;
  let i = 0;
  const vel = 60; // ms por letra

  function digitar(){
    el.textContent = texto.slice(0, i);
    i++;
    if(i <= texto.length) setTimeout(digitar, vel);
  }

  window.addEventListener('DOMContentLoaded', () => {
    // pequeno atraso visual
    setTimeout(digitar, 200);
  });
})();

/* ---------- FADE-IN ON SCROLL com IntersectionObserver ---------- */
(function(){
  const itens = document.querySelectorAll('.fade-item');
  if(!('IntersectionObserver' in window)){
    // fallback: mostra tudo
    itens.forEach(el => el.classList.add('ativo'));
    return;
  }

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if(entry.isIntersecting){
        entry.target.classList.add('ativo');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.15});

  itens.forEach(el => obs.observe(el));
})();
