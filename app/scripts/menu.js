$(function(){
  const closeClass = 'Nav-overvlayHide';

  var close = $('.Nav-close');
  var burger = $('.Nav-burger');
  var overlay = $('.Nav-overlay');
  var navLinks = $('.Nav-overlayLink');

  function toggleMenu() {
    overlay.toggleClass(closeClass);
  }

  close.click(toggleMenu);
  burger.click(toggleMenu);
  navLinks.click(toggleMenu);
});
