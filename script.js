const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');
const year = document.querySelector('#year');
const form = document.querySelector('#booking-form');
const message = document.querySelector('#form-message');

if (year) year.textContent = new Date().getFullYear();

menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.primary-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }
  const name = new FormData(form).get('name');
  message.textContent = `Thanks, ${name}! Your appointment request has been received. We'll be in touch soon.`;
  form.reset();
});
