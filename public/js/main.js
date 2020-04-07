const toggler = document.querySelector('.nav-menu__toggler')
const menu = document.querySelector(toggler.dataset.target);

// TODO menu close if clicked outside
toggler.addEventListener('click', (evt) => {
  menu.classList.toggle('expanded');
});
