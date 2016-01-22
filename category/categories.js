$(document).ready(function() {

	$(".catheight").css({"height": 0});

	var categoryListHeight;
	var indexCategory;

	$(".arrowcat").click(function() {

		indexCategory = $(".arrowcat").index(this);

		categoryListHeight = $(".catlist:eq("+ indexCategory +")").height();

		$(".arrowcat:eq("+ indexCategory +")").toggleClass("glyphicon-menu-up");

		if ( $(".catheight:eq("+ indexCategory +")").height() > 0 ) {

			$(".catheight:eq("+ indexCategory +")").animate({"height": 0}, 400);

		} else {

			$(".catheight:eq("+ indexCategory +")").animate({"height": categoryListHeight + "px"}, 400);

		}

	});


});