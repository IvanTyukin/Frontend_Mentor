'use strict'

let burger = document.querySelector('.burger'),
    header = document.querySelector('.header'),
    logo = document.querySelector('.logo'),
    explore = document.querySelector('.explore');

burger.addEventListener('click', function() {
    header.classList.toggle('open')
    let open = document.querySelector('.open')

    if (open) {
        burger.style.cssText += `background-image: url('./assets/shared/icon-close.svg')`
    } else {
        burger.style.cssText += `background-image: url('./assets/shared/icon-hamburger.svg')`
    }
});

logo.addEventListener('click', function () {
    document.location.href = './index.html';
});

if (explore) {
    explore.addEventListener('click', function () {
        document.location.href = './destination-moon.html'
    })
}