$(function(){
  const closeClass = 'is-hidden';
  const noScrollClass = 'u-noScroll';

  var body = $('body');
  var close = $('.Overlay-close');
  var burger = $('.Nav-burger');
  var overlay = $('.Overlay');
  var navLinks = $('.Overlay-link');

  function toggleMenu() {
    body.toggleClass(noScrollClass);
    overlay.toggleClass(closeClass);

  }

  close.click(toggleMenu);
  burger.click(toggleMenu);
  navLinks.click(toggleMenu);
});
