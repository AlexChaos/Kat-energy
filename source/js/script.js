var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navClosed = document.querySelector('.main-nav__toggle--closed');
var navOpened = document.querySelector('.main-nav__toggle--opened');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (navToggle.classList.contains('main-nav__toggle--closed')) {
      navToggle.classList.remove('main-nav__toggle--closed');
      navToggle.classList.add('main-nav__toggle--opened');
    } else {
      navToggle.classList.add('main-nav__toggle--closed');
      navToggle.classList.remove('main-nav__toggle--opened');
    }
  });

  navToggle.addEventListener('click', function(evt) {
    evt.preventDefault();
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });
