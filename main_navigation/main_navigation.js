$(document).ready(function() {

	var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;


    $("body").css({"padding-top": $(".header-bg").outerHeight(true) + "px"});




	$(document).scroll(function() {


		$("body").css({"padding-top": $(".header-bg").outerHeight(true) + "px"});


	});


	$(".respmenubtn").click(function() {


		if( $(".menu-nav-box").length > 0 ) {

			// $(".menu-nav-box").animate({"left": -100 + "%"}, 300);

			$(".respmenubtn").removeClass("respmenubtn-active");

			// setInterval(function() {

				$(".menu-nav-box").remove();

			// }, 700);

		} else {

			$(".respmenubtn").addClass("respmenubtn-active");

			$(".header-bg").append("<div class='menu-nav-box'></div>");

			$(".menu-nav-box").css({"top": $(".header-bg").outerHeight() + "px" });

			// $(".menu").css({"padding-bottom": 100 + "px" });

			// $(".menu").css({"height": $(window).outerHeight() - $(".header-bg").outerHeight() + "px" });

			$(".menu-nav-box").load("menu.html", function() {



			});

			$(".menu-nav-box").height($(window).outerHeight() - $(".header-bg").outerHeight());

			$(".menu-nav-box").animate({"left": 0  + "%"}, 200);

		}





	});

	// $(".glyphicon-remove").click(function() {

	// 	$(".menu-nav-box").remove();

	// 	if( $(".respmenubtn").hasClass("glyphicon-remove") ) {

	// 		$(".respmenubtn").removeClass("glyphicon-remove");

	// 	}

	// });


});