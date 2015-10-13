$(function() {
  const closeClass = 'Nav-overvlayHide';

  let close = $('.Nav-close');
  let burger = $('.Nav-burger');
  let overlay = $('.Nav-overlay');
  let navLinks = $('.Nav-overlayLink');

  function toggleMenu() {
    overlay.toggleClass(closeClass);
  }

  close.click(toggleMenu);
  burger.click(toggleMenu);
  navLinks.click(toggleMenu);
});
