/* === ANIMAÇÃO DE MÁQUINA DE ESCREVER === */
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
