const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});
menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
  menuButton?.setAttribute('aria-label','Abrir menu');
}));
const yearElement = document.querySelector('#ano');
if (yearElement) yearElement.textContent = new Date().getFullYear();
const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, {threshold:0.08});
  revealElements.forEach(element => observer.observe(element));
} else {
  revealElements.forEach(element => element.classList.add('visible'));
}