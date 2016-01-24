$(document).ready(function() {

	$(".catlistheight").css({"height": 0});


	var elparent;
	var categoryListHeight;
	var indexCategory;
	var elementsecond;
	

	

	$(".catname").click(function() {		

		$(".good").removeClass("categorylistactive");
		$(".catlistheight").removeClass("blocklistactive");
		$(".catlist").removeClass("listHeight");

		indexCategory = $(".catname").index(this);
		console.log(indexCategory);
		elparent = $(".catname:eq("+ indexCategory +")").parent(".good");

		elparent.addClass("categorylistactive");

		elementsecond = $(".catname:eq("+ indexCategory +")").next(".catlistheight");

		elementsecond.addClass("blocklistactive");

		var boxhidden = $(".blocklistactive").find(".catlist:first");

		boxhidden.addClass("listHeight");

		// console.log( boxhidden.height() );


		categoryListHeight = $(".listHeight").height();


		if ( $(".blocklistactive").height() > 0 ) {

			$(".blocklistactive").animate({"height": 0}, 400);

			if ($(".catname:eq("+ indexCategory +") .arrowcat").hasClass("glyphicon-menu-up")) {

				$(".catname:eq("+ indexCategory +") .arrowcat").removeClass("glyphicon-menu-up");

				$(".catname:eq("+ indexCategory +") .arrowcat").addClass("glyphicon-menu-down");

			}

		} else {

			$(".blocklistactive").animate({"height": categoryListHeight + "px"}, 400);			

			if ($(".catname:eq("+ indexCategory +") .arrowcat").hasClass("glyphicon-menu-down")) {

				$(".catname:eq("+ indexCategory +") .arrowcat").removeClass("glyphicon-menu-down");

				$(".catname:eq("+ indexCategory +") .arrowcat").addClass("glyphicon-menu-up");

			}
		
		}


	});


});