$(function() {
  const delta = 50;
  const navSelector = '.Nav';
  const onTopClassIndex = 'Nav--onTopIndex';
  const onTopClass = 'Nav--onTop';

  var nav = $(navSelector);
  var scrolled = false;
  var lastScrollTop = 0;
  var last_class = null;

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

    if (nav.hasClass(onTopClassIndex)) {
      last_class = onTopClassIndex;
    } else if (nav.hasClass(onTopClass)){
      last_class = onTopClass;
    }

    if (last_class == onTopClass) {

      if (isOnTop(currentScrollTop) && !nav.hasClass(onTopClass) ||
          (!isOnTop(currentScrollTop) && nav.hasClass(onTopClass)))
        toggleNavOnTop(onTopClass);

    } else if (last_class == onTopClassIndex) {

      if (isOnTop(currentScrollTop) && !nav.hasClass(onTopClassIndex) ||
          (!isOnTop(currentScrollTop) && nav.hasClass(onTopClassIndex)))
        toggleNavOnTop(onTopClassIndex);
    }

  }

  function isOnTop(currentScrollTop) {
    return currentScrollTop < delta;
  }

  function toggleNavOnTop(selected_class) {
    nav.toggleClass(selected_class);
  }

  function hasntScrolledEnough(lastScrollTop, currentScrollTop, delta) {
    return Math.abs(lastScrollTop - currentScrollTop) <= delta;
  }

  window.onscroll = onScroll;
  setTimeout(onScroll, delta);
});
