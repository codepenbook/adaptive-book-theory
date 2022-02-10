'use strict'

// Бургер
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const bodyEl = document.body;
burger.addEventListener('click', function() {
    if (!burger.classList.contains('active')) {
        burger.classList.add('active');
    } else {
        burger.classList.remove('active');
    }

    if (!menu.classList.contains('active')) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }

    if (!bodyEl.classList.contains('lock')) {
        bodyEl.classList.add('lock');
    } else {
        bodyEl.classList.remove('lock');
    }
})

menu.addEventListener('click', function() {
    burger.classList.remove('active');
    menu.classList.remove('active');
    bodyEl.classList.remove('lock');
})