// textos
const mainText = "Bem-vindo ao meu site!";
const nameText = "por João Cleberson Caetano";
const sectionText = "Coisas Que Eu Gosto De Fazer";

// função genérica
function typeText(text, elId, speed = 70){
  return new Promise((resolve) => {
    const el = document.getElementById(elId);
    if(!el) return resolve();

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

// sequência de digitação
window.addEventListener('DOMContentLoaded', async () => {
  await typeText(mainText, 'typewriter', 70);
  await new Promise(r=> setTimeout(r, 200));
  await typeText(nameText, 'subTypewriter', 60);
  await new Promise(r=> setTimeout(r, 250));
  await typeText(sectionText, 'typewriterSection', 75);
});

// fade-in ao rolar
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
