$(function() {
  const delta = 50;
  const navSelector = '.Nav';
  const onTopClassIndex = 'Nav--onTopIndex';
  const onTopClass = 'Nav--onTop';

  var nav = $(navSelector);
  var scrolled = false;
  var lastScrollTop = 0;
  var lastClass = getLastClass();

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

    if (lastClass === onTopClass || lastClass === onTopClassIndex) {
      toggleNavOnTop(lastClass, currentScrollTop);
    }

  }

  function isOnTop(currentScrollTop) {
    return currentScrollTop < delta;
  }

  function getLastClass() {
    if (nav.hasClass(onTopClassIndex)) {
      return onTopClassIndex;
    } else if (nav.hasClass(onTopClass)){
      return onTopClass;
    }
  }

  function toggleNavOnTop(selectedClass, currentScrollTop) {
    if (isOnTop(currentScrollTop) && !nav.hasClass(selectedClass) ||
        (!isOnTop(currentScrollTop) && nav.hasClass(selectedClass))) {
      nav.toggleClass(selectedClass);
    }
  }

  function hasntScrolledEnough(lastScrollTop, currentScrollTop, delta) {
    return Math.abs(lastScrollTop - currentScrollTop) <= delta;
  }

  window.onscroll = onScroll;
  setTimeout(onScroll, delta);
});
