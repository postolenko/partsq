$(document).ready(function() {

	$(".catheight").css({"height": 0});

	var categoryListHeight;
	var indexCategory;

	$(".catname").click(function() {

		indexCategory = $(".catname").index(this);

		categoryListHeight = $(".catlist:eq("+ indexCategory +")").height();

		// $(".arrowcat:eq("+ indexCategory +")").toggleClass("glyphicon-menu-down");

		if ( $(".catheight:eq("+ indexCategory +")").height() > 0 ) {

			$(".catheight:eq("+ indexCategory +")").animate({"height": 0}, 400);			

			if ($(".arrowcat:eq("+ indexCategory +")").hasClass("glyphicon-menu-up")) {

				$(".arrowcat:eq("+ indexCategory +")").removeClass("glyphicon-menu-up");

				$(".arrowcat:eq("+ indexCategory +")").addClass("glyphicon-menu-down");

			}			

		} else {

			$(".catheight:eq("+ indexCategory +")").animate({"height": categoryListHeight + "px"}, 400);

			if ($(".arrowcat:eq("+ indexCategory +")").hasClass("glyphicon-menu-down")) {

				$(".arrowcat:eq("+ indexCategory +")").removeClass("glyphicon-menu-down");

				$(".arrowcat:eq("+ indexCategory +")").addClass("glyphicon-menu-up");

			}		
		
		}

	});


});