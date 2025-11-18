// TEXTOS
const mainText = "Bem-vindo ao meu site!";
const nameText = "por João Cleberson Caetano";
const sectionText = "Coisas Que Eu Gosto De Fazer";

// Função máquina de escrever
function typeText(text, id, speed = 70) {
  return new Promise(resolve => {
    const el = document.getElementById(id);
    el.textContent = "";
    let i = 0;

    function step() {
      el.textContent = text.slice(0, i);
      i++;
      if (i <= text.length) {
        setTimeout(step, speed);
      } else {
        resolve();
      }
    }
    step();
  });
}

// Executa na ordem
window.addEventListener("DOMContentLoaded", async () => {
  await typeText(mainText, "typewriter", 65);
  await new Promise(r => setTimeout(r, 200));
  await typeText(nameText, "subTypewriter", 60);
  await new Promise(r => setTimeout(r, 250));
  await typeText(sectionText, "typewriterSection", 75);
});

// Fade-in dos itens
(function () {
  const itens = document.querySelectorAll(".fade-item");

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("ativo");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  itens.forEach(i => obs.observe(i));
})();

// Fade-in da seção SOBRE MIM
const fadeSection = document.querySelector(".fade-section");

function checkFade() {
  const pos = fadeSection.getBoundingClientRect().top;
  const screen = window.innerHeight;

  if (pos < screen - 60) {
    fadeSection.classList.add("show");
  }
}

window.addEventListener("scroll", checkFade);
window.addEventListener("load", checkFade);
