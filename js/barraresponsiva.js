const barra = document.getElementById('barra');
const fechar = document.getElementById('fechar');
const nav = document.getElementById('navbar');

if (barra) {
  barra.addEventListener('click', () =>  {
    nav.classList.add('active');
  })
}

if (fechar) {
  fechar.addEventListener('click', () =>  {
    nav.classList.remove('active');
  })
}