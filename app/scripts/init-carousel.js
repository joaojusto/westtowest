$(document).ready(function(){

  $('#slider').sliderPro({
    arrows: true,
    width: 1000,
    autoplay: false,
    fadeArrows: false,
    autoHeight: true,
    init: function() {  // Run sliderResize function on slider init
      sliderResizeToTallest();
    },
    sliderResize: function(){   // Run on sliderResize, this doesn't happen often enough that it would cause performance issues
      sliderResizeToTallest();
    }
  });

    // resize slider to tallest slide
  function sliderResizeToTallest() {
    var max = 0;

    $('.sp-slide').each(function(){
      var slideHeight = $(this).height();
      if( slideHeight > max )
        max = slideHeight;
    });

    $('#slider').css({'height' : max});
  }

});
