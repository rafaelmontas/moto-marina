window.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  const burgerMenu = document.getElementById('mobile-menu')
  burgerMenu.addEventListener('click', () => {
    const drawer = document.getElementById('mobile-drawer').classList.toggle('open')
    const body = document.body.classList.toggle('noscroll')
    const header = document.getElementById('header')
    const headerAction = header.classList.toggle('no-after')
  })
});