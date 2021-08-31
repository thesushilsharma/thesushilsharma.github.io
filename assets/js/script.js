// repeated variables
var $window = $(window);
var $root = $("html, body");

$(document).ready(function () {
  "use strict";
  typedJS();
});

function menuToggler() {
  "use strict";

}
/*-------------------------
        TYPED JS 
    www.mattboldt.com
-------------------------*/
function typedJS() {
  "use strict";

  var options = {
    strings: $(".element").attr("data-elements").split(","),
    typeSpeed: 30,
    loop: true,
    backDelay: 3000,
    backSpeed: 30,
    smartBackspace: true,
    showCursor: true,
    cursorChar: '#',
    shuffle: true,
    autoInsertCss: true,
    fadeOut: true,
    fadeOutClass: 'typed-fade-out',
    fadeOutDelay: 500
  };
  var typed = new Typed(".element", options);
}


/*------------------------
      Scroll to Top
--------------------------*/
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.back-to-top').fadeIn('slow');
  } else {
    $('.back-to-top').fadeOut('slow');
  }
});

$('.back-to-top').click(function () {
  $('html, body').animate({
    scrollTop: 0
  }, 1500, 'easeInOutExpo');
  return false;
});
