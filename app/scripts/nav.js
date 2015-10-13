$(function() {
  const delta = 50;
  const navSelector = '.Nav';
  const onTopClass = 'Nav--onTop';

  let $nav = $(navSelector);
  let lastScrollTop = 0;

  function onScroll() {
    var currentScrollTop = $(document).scrollTop();

    setTimeout(updateNav(currentScrollTop, lastScrollTop), 250);

    lastScrollTop = currentScrollTop;
  }

  function updateNav(currentScrollTop, lastScrollTop) {
    var update = function() {
      if (isOnTop(currentScrollTop) && !$nav.hasClass(onTopClass))
        toggleNavOnTop();
      else if (!isOnTop(currentScrollTop) && $nav.hasClass(onTopClass))
        toggleNavOnTop();
    };

    return update;
  }

  function isOnTop(currentScrollTop) {
    return currentScrollTop < delta;
  }

  function toggleNavOnTop() {
    $nav.toggleClass(onTopClass);
  }

  window.onscroll = onScroll;
  setTimeout(onScroll, delta);
});
