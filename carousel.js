document.addEventListener("DOMContentLoaded", () => {
  const marquee = document.querySelector(".icon-marquee");
  const icons = marquee.querySelectorAll(".icon");

  // Calcula a largura total dos ícones
  const totalIconsWidth = Array.from(icons).reduce(
    (width, icon) => width + icon.offsetWidth,
    0
  );

  // Duplica os ícones para criar um loop contínuo
  icons.forEach((icon) => {
    const clone = icon.cloneNode(true);
    marquee.appendChild(clone);
  });

  let scrollPosition = 0;
  const scrollSpeed = 0.5; // Ajuste este valor para controlar a velocidade

  function marqueeAnimation() {
    scrollPosition += scrollSpeed;
    if (scrollPosition >= totalIconsWidth) {
      scrollPosition = 0;
    }
    marquee.scrollLeft = scrollPosition;
    requestAnimationFrame(marqueeAnimation);
  }

  marqueeAnimation();

  // Pausa a animação quando o mouse está sobre o carrossel
  marquee.addEventListener("mouseenter", () => {
    cancelAnimationFrame(marqueeAnimation);
  });

  // Retoma a animação quando o mouse sai do carrossel
  marquee.addEventListener("mouseleave", () => {
    requestAnimationFrame(marqueeAnimation);
  });
});
