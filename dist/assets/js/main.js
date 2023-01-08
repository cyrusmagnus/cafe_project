/*  //= components/script2.js - это для подключение дргуих файлов js  */

const burger = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');
const body = document.querySelector.body;

if (burger && menu) {
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}
// -= components/slider.js
// -= components/dropdown.js
// -= components/gallery.js