document.addEventListener('DOMContentLoaded', () => {
  const layers = document.querySelectorAll('.layer');

  function parallax() {
    const y = window.scrollY;

    for (let i = 0; i < layers.length; i++) {
      const speed = (i + 1) * 0.1;
      layers[i].style.transform = `translateY(${y * speed}px)`;
    }
  }

  window.addEventListener('scroll', parallax);
});