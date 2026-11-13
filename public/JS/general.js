const toggleBtn = document.querySelector('.menu-toggle');
const closeBtn  = document.querySelector('.menu-close');
const menu      = document.querySelector('#site-menu');
const overlay   = document.querySelector('.menu-overlay');

function openMenu() {
  menu.classList.add('is-open');
  overlay.classList.add('is-open');
  toggleBtn.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  menu.classList.remove('is-open');
  overlay.classList.remove('is-open');
  toggleBtn.setAttribute('aria-expanded', 'false');
}

toggleBtn.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});