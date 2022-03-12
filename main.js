const burger = document.querySelector('.menu-burger__header');
const menu = document.querySelector('.menu-burger__header ul');

burger.onclick = function() {
    menu.classList.toggle('display');
};