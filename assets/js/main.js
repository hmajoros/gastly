var menu = document.querySelector('nav'), 
    menuOpen = document.querySelector('.menu-open'),
    menuClose = document.querySelector('.menu-close');

menuOpen.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);

function openMenu(event) {
  event.stopPropagation();
  menu.classList.remove('offscreen');
  document.body.addEventListener('click', closeMenu);
}

function closeMenu() {
  menu.classList.add('offscreen');
}


