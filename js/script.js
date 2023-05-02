// menu-burger
let menuBtn = document.querySelector('.header-burger__btn');
let menu = document.querySelector('.header-menu');
menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
})
// menu-burger