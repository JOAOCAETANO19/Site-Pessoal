/* função genérica para digitar texto em um elemento e chamar callback quando terminar */
function typeText(text, elementId, speed = 80, callback) {
  const el = document.getElementById(elementId);
  if (!el) {
    if (callback) callback();
    return;
  }
  let i = 0;
  function step() {
    el.textContent = text.slice(0, i);
    i++;
    if (i <= text.length) {
      setTimeout(step, speed);
    } else {
      if (callback) callback();
    }
  }
  step();
}

/* função para iniciar tudo quando DOM estiver pronto */
window.addEventListener('DOMContentLoaded', () => {

  // textos
  const mainText = "Bem-vindo ao meu site!";
  const nameText = "por João Caetano";
  const sectionText = "Coisas Que Eu Gosto De Fazer";

  // 1) iniciar máquina de escrever principal -> nome -> seção (em sequência)
  typeText(mainText, 'typewriter', 80, () => {
    // mostrar o elemento do nome com fade (IntersectionObserver cuidará do .fade-item, mas vamos garantir)
    const subEl = document.getElementById('subTypewriter');
    if (subEl) subEl.classList.add('fade-item');
    typeText(nameText, 'subTypewriter', 70, () => {
      // após o nome terminar, digita o título da seção
      typeText(sectionText, 'typewriterSection', 75);
    });
  });

  /* === ANIMAÇÃO DE APARECER SUAVEMENTE (IntersectionObserver) === */
  const items = document.querySelectorAll('.fade-item');

  if (!('IntersectionObserver' in window)) {
    // fallback: mostra tudo
    items.forEach(el => el.classList.add('ativo'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('ativo');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach(item => observer.observe(item));
});
