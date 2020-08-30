$(window).on('load', function() {

    $(".loading-overlay img").fadeOut(500,
        function() {
            $(this).parent().fadeOut(500);
            $("body").removeClass("overflow")
        });
})

var wow = new WOW({
    boxClass: 'wow', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true, // act on asynchronously loaded content (default is true)
    callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
    },
    scrollContainer: null, // optional scroll container selector, otherwise use window,
    resetAnimation: true, // reset animation on end (default is true)
});
wow.init();

$(window).scroll(function() {
    if (($(this).scrollTop() >= 30) && ($(window).width() >= 992)) {
        // $(".page-language").slideUp(300);
        $(".header").css("top", "-36px");
        $(".header").css("position", "fixed");
        $(".header").css("z-index", "99999");
        $(".header").css("box-shadow", "10px 0 10px #0000001c");
    } else if (($(window).width() <= 991) && ($(this).scrollTop() >= 50)) {
        // $(".header").css("top", "0");
        $(".header").css("position", "fixed");
        $(".header").css("z-index", "99999");
        $(".header").css("box-shadow", "10px 0 10px #0000001c");
        $(".page-language").css("display", "none");
    } else {
        // $(".page-language").slideDown(300);
        $(".header").css("top", "0");
        $(".header").css("position", "relative");
        $(".header").css("box-shadow", "none");
        $(".header").css("z-index", "auto");
    }
});


$(document).ready(function() {

    // This is to Open Language menu in large Screens
    $(".page-language .lang .lang-name").click(function() {
        $(".lang-back").fadeIn(300);
    });

    $(".page-language .lang .lang-name").click(function() {
        $(".lang .lang-list").slideDown(300);
    });

    $(".lang-back").click(function() {
        $(".lang-back").fadeOut(300);
    });

    $(".lang-back").click(function() {
        $(".lang .lang-list").slideUp(300);
    });



    // This is to Open Configuration menu in 
    $(".user-terms .config .config-link").click(function() {
        $(".config .config-link span").removeClass("open-config")
        $(".config .config-link span").addClass("close-config")
        $(".overlay-box").fadeIn(300);
    });

    $(".user-terms .config .config-link").click(function() {
        $(".config .config-box").slideDown(300);
    });

    $(".overlay-box").click(function() {
        $(".overlay-box").fadeOut(300);
    });

    $(".overlay-box").click(function() {
        $(".config .config-link span").addClass("open-config")
        $(".config .config-link span").removeClass("close-config")
        $(".config .config-box").slideUp(300);
    });


    //This is to Open Search Box in small screens
    $(".user-terms .search .search-link").click(function() {
        $("body").addClass("overflow")
        $(".overlay-box2").fadeIn(300);
    });

    $(".user-terms .search .search-link").click(function() {
        $(".search .search-link .search-icon").removeClass("open-search")
        $(".search .search-link .search-icon").addClass("close-search")
        $(".config").hide();
        $(".shopping").hide();
        $(".search-name").hide();
        if ($(window).width() <= 991) {
            $(".menu-button").hide();
        }
        $(".search-icon").addClass("style");
        $(".box").fadeIn(600);
    });

    $(".search-close,.overlay-box2").click(function() {
        $("body").removeClass("overflow")
        $(".overlay-box2").fadeOut(300);
    });

    $(".search-close,.overlay-box2").click(function() {
        $(".search .search-link .search-icon").addClass("open-search")
        $(".search .search-link .search-icon").removeClass("close-search")
        $(".config").show();
        $(".shopping").show();
        $(".search-name").show();
        if ($(window).width() <= 991) {
            $(".menu-button").show();
            $(".search-name").hide();
        }
        $(".search-icon").removeClass("style");
        $(".box").fadeOut(300);
    });



    $('.main-slider .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 50,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            768: {
                items: 1,
                nav: false,
                dots: true,
                loop: true
            },
            992: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            },
            1200: {
                items: 1,
                nav: true,
                dots: true,
                loop: true
            }
        }
    })


    $('.customers .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        margin: 30,
        rtl: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            480: {
                items: 1,
                dots: true,
                nav: false,
                loop: true
            },
            720: {
                items: 2,
                dots: true,
                nav: false,
                loop: true
            },
            992: {
                items: 2,
                nav: true,
                dots: false,
                loop: true
            },
            1200: {
                items: 2,
                nav: true,
                dots: false,
                loop: true
            }
        }
    });


    if ($(window).width() <= 991) {
        $(".products-box").addClass("owl-carousel owl-theme");
        $(".products-box .product").removeClass("owl-carousel");
        $('.offers .owl-carousel').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 4000,
            margin: 30,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: true
                },
                500: {
                    items: 2,
                    nav: false,
                    loop: true
                }
            }
        })
    } else {
        $(".products-box").removeClass("owl-carousel");
        $(".products-box .product").removeClass("owl-carousel");
    };


    if ($(window).width() <= 991) {
        $(".features-box").addClass("owl-carousel owl-theme");
        $(".features-box .feature").removeClass("owl-carousel");
        $('.features .owl-carousel').owlCarousel({
            loop: false,
            margin: 30,
            rtl: true,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    loop: false
                },
                480: {
                    items: 2,
                    nav: false,
                    loop: false
                }
            }
        })
    } else {
        $(".features-box").removeClass("owl-carousel");
        $(".features-box .feature").removeClass("owl-carousel");
    };


    if ($(window).width() <= 991) {
        $('.collapse[data-parent="#parent"]').on('show.bs.collapse', function() {
            $('.collapse[data-parent="#parent"]').not(this).collapse('hide');
        });
    } else {
        $(".slide-list").addClass("in")
    }

    //This is to Open Side Menu in Small Screens
    $(".menu-button .menu-link").click(function() {
        $("body").addClass("overflow")
        $(".side-menu").addClass("overflow");
        $(".overlay-box3").fadeIn(500);
    });

    $(".menu-button .menu-link").click(function() {
        $(".side-menu").addClass("overflow");
        $(".side-menu").addClass("menu-open");
        $(".overlay-box3").fadeIn(500);
    });

    $(".close,.overlay-box3").click(function() {
        $("body").removeClass("overflow")
        $(".side-menu").removeClass("overflow");
        $(".overlay-box3").fadeOut(500);
    });

    $(".close,.overlay-box3").click(function() {
        $(".side-menu").removeClass("overflow");
        $(".side-menu").removeClass("menu-open");
        $(".back-overlay").fadeOut(500);
    });


    //This is to Open user-config & language Menus in Small Screens Side Menu
    $(".account p").click(function() {
        $(".account ul").slideToggle(600);
    });

    $(".language p").click(function() {
        $(".language ul").slideToggle(600);
    });
});