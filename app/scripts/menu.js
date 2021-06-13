$(function(){
  var closeClass = 'is-hidden';
  var noScrollClass = 'u-noScroll';

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
