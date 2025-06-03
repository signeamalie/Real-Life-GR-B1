'use strict'

// burgermenu toggle
const burger = document.getElementById('burger-menu');
const mainMenu = document.getElementById('main-menu');

burger.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
});