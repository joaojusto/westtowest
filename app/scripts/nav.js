$(function() {
  const delta = 50;
  const navSelector = '.Nav';
  const onTopClass = 'Nav--onTop';

  var nav = $(navSelector);
  var scrolled = false;
  var lastScrollTop = 0;

  function onScroll() {
    scrolled = true;
  }

  setInterval(updateNav, 300);

  function updateNav() {
    if (!scrolled) {
      return;
    }

    var currentScrollTop = $(document).scrollTop();

    scrolled = false;
    if (hasntScrolledEnough(lastScrollTop, currentScrollTop, delta)) {
      return;
    }

    lastScrollTop = currentScrollTop;

    if (isOnTop(currentScrollTop) && !nav.hasClass(onTopClass) ||
        (!isOnTop(currentScrollTop) && nav.hasClass(onTopClass)))
      toggleNavOnTop();

  }

  function isOnTop(currentScrollTop) {
    return currentScrollTop < delta;
  }

  function toggleNavOnTop() {
    nav.toggleClass(onTopClass);
  }

  function hasntScrolledEnough(lastScrollTop, currentScrollTop, delta) {
    return Math.abs(lastScrollTop - currentScrollTop) <= delta;
  }

  window.onscroll = onScroll;
  setTimeout(onScroll, delta);
});
