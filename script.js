/* === MÁQUINA DE ESCREVER DO TÍTULO === */
const text = "Bem-vindo ao meu site!";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}

typeWriter();

/* === MÁQUINA DE ESCREVER DO NOME === */
const text2 = "por João Caetano";
let index2 = 0;

function typeWriter2() {
  if (index2 < text2.length) {
    document.getElementById("subTypewriter").textContent += text2.charAt(index2);
    index2++;
    setTimeout(typeWriter2, 70);
  }
}

setTimeout(typeWriter2, 1500);

/* === ANIMAÇÃO DE APARECER SUAVEMENTE === */
const items = document.querySelectorAll('.fade-item');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('ativo');
    }
  });
}, { threshold: 0.1 });

items.forEach(item => {
  observer.observe(item);
});
