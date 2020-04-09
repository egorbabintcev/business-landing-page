const toggler = document.querySelector('.nav-menu__toggler')
const menu = document.querySelector(toggler.dataset.target);

toggler.addEventListener('click', (evt) => {
  menu.classList.toggle('expanded');
});

menu.parentNode.addEventListener('click', (evt) => {
  evt.stopPropagation();
})

document.addEventListener('click', (evt) => {
  menu.classList.remove('expanded');
})
