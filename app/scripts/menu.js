$(function(){
  const closeClass = 'is-hidden';

  var close = $('.Overlay-close');
  var burger = $('.Nav-burger');
  var overlay = $('.Overlay');
  var navLinks = $('.Overlay-link');

  function toggleMenu() {
    overlay.toggleClass(closeClass);
  }

  close.click(toggleMenu);
  burger.click(toggleMenu);
  navLinks.click(toggleMenu);
});
