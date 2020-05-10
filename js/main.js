$(document).ready(function () {


    // let $btns = $('.project-area .button-group button');


    // $btns.click(function (e) {

    //     $('.project-area .button-group button').removeClass('active');
    //     e.target.classList.add('active');

    //     let selector = $(e.target).attr('data-filter');
    //     $('.project-area .grid').isotope({
    //         filter: selector
    //     });

    //     return false;
    // })

    // $('.project-area .button-group #btn1').trigger('click');

    // $('.project-area .grid .test-popup-link').magnificPopup({
    //     type: 'image',
    //     gallery: { enabled: true }
    // });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 10;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();


let headerHeight = $('.header_area').height();

      // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;


    var scrollToPosition = $(hash).offset().top - headerHeight;

       $('html').animate({ 'scrollTop': scrollToPosition }, 600, function(){
        window.location.hash = "" + hash;
        // This hash change will jump the page to the top of the div with the same id
        // so we need to force the page to back to the end of the animation
        $('html').animate({ 'scrollTop': scrollToPosition }, 0);
    });

    } // End if
  });
let headerWidth = $('.header_area').width();

 $("nav").find("li").on("click", "a", function () {
    // console.log($('#navbarNav.navbar-collapse'))
    if(headerWidth <977){
         $('#navbarNav.navbar-collapse').collapse('hide');
    }
    });

 $(".navbar-nav li").on("click",function(){
    console.log($(this));
  $(".navbar-nav li").removeClass("active");
  $(this).addClass("active");
});

});