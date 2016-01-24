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

			$(".menu-nav-box").remove();

			$(".respmenubtn").removeClass("glyphicon-remove");

		} else {

			$(".respmenubtn").addClass("glyphicon-remove");

			$(".header-bg").append("<div class='menu-nav-box'></div>");

			$(".menu-nav-box").css({"top": $(".header-bg").outerHeight() + "px" });

			// $(".menu").css({"padding-bottom": 100 + "px" });

			// $(".menu").css({"height": $(window).outerHeight() - $(".header-bg").outerHeight() + "px" });

			$(".menu").height($(window).outerHeight() - $(".header-bg").outerHeight());

			$(".menu-nav-box").load("menu.html", function() {



			});

		}





	});

	// $(".glyphicon-remove").click(function() {

	// 	$(".menu-nav-box").remove();

	// 	if( $(".respmenubtn").hasClass("glyphicon-remove") ) {

	// 		$(".respmenubtn").removeClass("glyphicon-remove");

	// 	}

	// });


});