const hb = document.querySelector('#hamburgerBtn');
const pn = document.querySelector('#primaryNav');

hb.addEventListener('click', () => {
  hb.classList.toggle('open');
  pn.classList.toggle('open');
});

// inject current year in footer
const numberOne = new Date();
document.querySelector('#year').textContent = numberOne.getFullYear();