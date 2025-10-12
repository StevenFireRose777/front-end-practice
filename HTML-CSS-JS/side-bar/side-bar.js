const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const nav = document.querySelector('.nav');
const navLink = document.querySelectorAll('.nav-link');


menuOpen.addEventListener('click', menuTog);
menuClose.addEventListener('click', menuTog);

navLink.forEach((link) => {
  link.addEventListener('click', menuTog);
})

function menuTog(e){
  nav.classList.toggle('active');
}