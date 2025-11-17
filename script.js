// textos em sequência
const mainText = "Bem-vindo ao meu site!";
const nameText = "por João Caetano";
const sectionText = "Coisas Que Eu Gosto De Fazer";

// função genérica para digitar texto (retorna uma Promise)
function typeText(text, elId, speed = 70){
  return new Promise((resolve) => {
    const el = document.getElementById(elId);
    if(!el){ resolve(); return; }
    el.textContent = "";
    let i = 0;
    function step(){
      el.textContent = text.slice(0, i);
      i++;
      if(i <= text.length){
        setTimeout(step, speed);
      } else {
        resolve();
      }
    }
    step();
  });
}

// inicia a sequência quando DOM estiver pronto
window.addEventListener('DOMContentLoaded', async () => {
  await typeText(mainText, 'typewriter', 70);
  await new Promise(r=> setTimeout(r, 200)); // pequeno delay
  await typeText(nameText, 'subTypewriter', 60);
  await new Promise(r=> setTimeout(r, 250));
  await typeText(sectionText, 'typewriterSection', 75);

  // depois que os textinhos aparecerem, podemos garantir que o observer mostre os fade-item já visíveis
  // (o observer abaixo também cuida disso ao rolar)
});

// FADE-IN AO ROLAR com IntersectionObserver
(function(){
  const targets = document.querySelectorAll('.fade-item');
  if(!('IntersectionObserver' in window)){
    targets.forEach(t => t.classList.add('ativo'));
    return;
  }

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('ativo');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(t => obs.observe(t));
})();
