$(function() {
  const delta = 50;
  const navSelector = '.Nav';
  const onTopClass = 'Nav--onTop';

  var nav = $(navSelector);

  function onScroll() {
    var currentScrollTop = $(document).scrollTop();

    setTimeout(updateNav(currentScrollTop), 250);
  }

  function updateNav(currentScrollTop) {
    var update = function() {
      if (isOnTop(currentScrollTop) && !nav.hasClass(onTopClass))
        toggleNavOnTop();
      else if (!isOnTop(currentScrollTop) && nav.hasClass(onTopClass))
        toggleNavOnTop();
    };

    return update;
  }

  function isOnTop(currentScrollTop) {
    return currentScrollTop < delta;
  }

  function toggleNavOnTop() {
    nav.toggleClass(onTopClass);
  }

  window.onscroll = onScroll;
  setTimeout(onScroll, delta);
});
