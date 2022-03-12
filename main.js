const burger = document.querySelector('.menu-burger__header');
const menu = document.querySelector('.menu-burger__header ul');
var content = window.getComputedStyle(document.querySelector('#tool'),':before')

burger.onclick = function() {
    menu.classList.toggle('display');
    content.classList.toggle('display')
};