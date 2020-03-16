$(function() {

    $('.reviews').slick({
        dots: true, 
        arrows: false, 
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        responsive: [
            {
              breakpoint: 920,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    
    let HeaderH = $('.header').innerHeight();
    let WindowH = $(window).scrollTop();

    let Home = $('#main').offset().top;
    let About= $('#about').offset().top;
    let Features = $('#features').offset().top;
    let Screenshots = $('#screenshots').offset().top;
    let Pricing = $('#pricing').offset().top;
    let Blog = $('#blog').offset().top;

    ScrollTop(WindowH);

    function ScrollTop(WinScroll) {
        WinScroll > HeaderH ? $('.header').addClass('fixed') : $('.header').removeClass('fixed');
    }
    function ScrollItem(Item) {
        if (WindowH >= Item && WindowH <= Item + $(Item).innerHeight()) {
            $('#nav a').removeClass('active');
            $(`[data-scroll = ${Item}]`).addClass('active'); 
        }
    }

    // smooth scroll 
    $('[data-scroll]').on('click',function() {
        event.preventDefault();

        let blockId = $(this).data('scroll');
        let blockOffset = $(blockId).offset().top + 1;
        $('#nav a').removeClass('active');
        $(this).addClass('active'); 
        
        $("html, body").animate({
            scrollTop: blockOffset
        },1000);
    })

    // questions
    $('.questions__item').on('click',function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    })

    //burger
    $('.nav__toggle').on('click',function() {
        event.preventDefault();

        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    })
    
    //header fixed
    $(window).on('scroll',function() {
        event.preventDefault();

        let WindowH = $(this).scrollTop();
        ScrollTop(WindowH);
        if (WindowH >= Home && WindowH <= About) {
            $('#nav a').removeClass('active');
            $('[data-scroll = "#main"]').addClass('active'); 
        } else if (WindowH >= About && WindowH <= Features) {
            $('#nav a').removeClass('active');
            $('[data-scroll = "#about"]').addClass('active');
        }  else if (WindowH >= Features && WindowH <= Screenshots) {
            $('#nav a').removeClass('active');
            $('[data-scroll = "#features"]').addClass('active');
        }  else if (WindowH >= Screenshots && WindowH <= Pricing) {
            $('#nav a').removeClass('active');
            $('[data-scroll = "#screenshots"]').addClass('active');
        }  else if (WindowH >= Pricing && WindowH <= Blog) {
            $('#nav a').removeClass('active');
            $('[data-scroll = "#pricing"]').addClass('active');
        }  else {
            $('#nav a').removeClass('active');
            $('[data-scroll = "#blog"]').addClass('active');
        }
    })
})