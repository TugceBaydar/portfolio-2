function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "classnav col-md-8") {
        x.className += " responsive";
    } else {
        x.className = "classnav col-md-8";
    }
}

// Preloader
$(window).on('load', function () {
    "use strict";

    $('.preloader').fadeOut('slow');

});

$(document).ready(function () {
    "use strict";
          var body = $('body, html'),
          toTop = $('.to_top')




// to top button (1- on click)
toTop.click(function () {
    body.animate({scrollTop : 0}, 500);
});

  });
