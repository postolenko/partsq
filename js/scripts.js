$(document).ready(function() {

    $("body").css({"padding-top": $(".header-bg").outerHeight(true) + "px"});

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    getScrollToTopBtn();

    $(document).scroll(function() {

        getScrollToTopBtn();

    });


    $(window).resize(function() {

        $("body").css({"padding-top": $(".header-bg").height() + "px"});

    });


    $(".icon-plus").click(function(){

        index = $( ".icon-plus" ).index( this );
        // function getCountCustomers(1);
        countCustomers = parseFloat($(".count-inpt:eq("+index+")").val());

        if( countCustomers <= 0 || !$.isNumeric(countCustomers) ) {
    
            countCustomers = 1;
        
        } else {

            ++countCustomers;

        }
        $(".count-inpt:eq("+index+")").val(countCustomers);
    });

    $(".icon-minus").click(function(){

        index = $( ".icon-minus" ).index( this );
        // function getCountCustomers(-1);
        countCustomers = parseFloat($(".count-inpt:eq("+index+")").val());

        if( countCustomers <= 0 || !$.isNumeric(countCustomers) ) {
            
            countCustomers = 0;
            
        } else {

            --countCustomers;

        }
        $(".count-inpt:eq("+index+")").val(countCustomers);

    });


    $(".list-btn").click(function() {

        $(".good-cart-img").css({"width": 100 + "%"});
        $(".goodcart-dec").css({"width": 100 + "%"});
        $(".goodcart-dec h3").css({"font-size": 14 + "px"});

    });



    $(".cart-btn").click(function() {

        $(".good-cart-img").css({"width": 50 + "%"});
        $(".goodcart-dec").css({"width": 50 + "%"});        
        $(".goodcart-dec h3").css({"font-size": 11 + "px"});

    });





    // Navigation scroll

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {

                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 700);
                    return false;
                }
            }
        });
    });


    



    // Show or hide ".scroll-to-top" button 
    function getScrollToTopBtn() {

        if ($(window).scrollTop() > $('.head-section').height() ) {

            $('.scroll-to-top').fadeIn();

        } else {

            $('.scroll-to-top').fadeOut();

        }

    }


    $('.scroll-to-top').click(function () {

        $('body,html').animate({

            scrollTop: 0

        }, 1000);

        return false;

    });


    


});