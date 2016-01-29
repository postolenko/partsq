$(document).ready(function() {

	$(".catlistheight").css({"height": 0});

	// $(".catlist").css({"height": 0});

	var elparent;
	var categoryListHeight;
	var indexCategory;
	var elementsecond;
	var boxhidden;


	for(var index = 0; index <= $(".catlistheight").length - 1; ++index) {

		console.log(index);

		$(".catlistheight:eq("+ index +")").attr("id","cat_"+ index);

		var childList = $(".catlistheight:eq("+ index +")").children(".catlist");

		childList.attr("id","listcat_"+ index);

	}


	

	$(".catname").click(function() {

		if( $(this).next(".catlistheight") ) {

			var elhBlock = $(this).next(".catlistheight");

			var elhListBlock = elhBlock.children(".catlist");

			var itemList = $(this).children(".arrowcat");

			var elAttr = elhBlock.attr("id");

			// var listHeight = $("#list"+elAttr).height();

			console.log($(this).attr("class"))

			if( $("#" + elAttr).height() <= 0 ) {

				// elhListBlock.css({"height": "auto"});

				// $("#" + elAttr).animate({"height": elhListBlock.height() + "px"}, 300);

				$("#" + elAttr).css({"height":"auto"});

				console.log(elhListBlock.height());

				if ( itemList.hasClass("glyphicon-menu-down") ) {

					itemList.removeClass("glyphicon-menu-down");

					itemList.addClass("glyphicon-menu-up");

				}

			} else {

				// $("#" + elAttr).css({"height": 0});

				// elhListBlock.css({"height": "0"});

				// $("#" + elAttr).animate({"height": 0}, 300);

				$("#" + elAttr).css({"height":"0"});

				console.log(elhListBlock.height());

				if ( itemList.hasClass("glyphicon-menu-up") ) {

					itemList.removeClass("glyphicon-menu-up");

					itemList.addClass("glyphicon-menu-down");

				}

			}

				// if ( $(".blocklistactive").height() > 0 ) {

				// 	$(".blocklistactive").animate({"min-height": 0}, 400);

				// 	if ($(".catname:eq("+ indexCategory +") .arrowcat").hasClass("glyphicon-menu-up")) {

				// 		$(".catname:eq("+ indexCategory +") .arrowcat").removeClass("glyphicon-menu-up");

				// 		$(".catname:eq("+ indexCategory +") .arrowcat").addClass("glyphicon-menu-down");

				// 	}

				// } else {

				// 	$(".blocklistactive").animate({"min-height": categoryListHeight + "px"}, 400);			

				// 	if ($(".catname:eq("+ indexCategory +") .arrowcat").hasClass("glyphicon-menu-down")) {

				// 		$(".catname:eq("+ indexCategory +") .arrowcat").removeClass("glyphicon-menu-down");

				// 		$(".catname:eq("+ indexCategory +") .arrowcat").addClass("glyphicon-menu-up");

				// 	}

				// }


		}

		// $("#cat1").height($("#list1").height());

		// for(var index = 0; index <= $(".catlistheight").length - 1; index++) {

		// 	console.log($(".catlistheight").index());

		// }



		// $(".good").removeClass("categorylistactive");
		// $(".catlistheight").removeClass("blocklistactive");
		// $(".catlist").removeClass("listHeight");

		// indexCategory = $(".catname").index(this);
		// console.log(indexCategory);
		// elparent = $(".catname:eq("+ indexCategory +")").parent(".good");

		// elparent.addClass("categorylistactive");

		// elementsecond = $(".catname:eq("+ indexCategory +")").next(".catlistheight");

		// elementsecond.addClass("blocklistactive");

		// boxhidden = $(".blocklistactive").find(".catlist:first");

		// boxhidden.addClass("listHeight");

		// console.log( boxhidden.height() );


		// categoryListHeight = $(".listHeight").height();


		// if ( $(".blocklistactive").height() > 0 ) {

		// 	$(".blocklistactive").animate({"min-height": 0}, 400);

		// 	if ($(".catname:eq("+ indexCategory +") .arrowcat").hasClass("glyphicon-menu-up")) {

		// 		$(".catname:eq("+ indexCategory +") .arrowcat").removeClass("glyphicon-menu-up");

		// 		$(".catname:eq("+ indexCategory +") .arrowcat").addClass("glyphicon-menu-down");

		// 	}

		// } else {

		// 	$(".blocklistactive").animate({"min-height": categoryListHeight + "px"}, 400);			

		// 	if ($(".catname:eq("+ indexCategory +") .arrowcat").hasClass("glyphicon-menu-down")) {

		// 		$(".catname:eq("+ indexCategory +") .arrowcat").removeClass("glyphicon-menu-down");

		// 		$(".catname:eq("+ indexCategory +") .arrowcat").addClass("glyphicon-menu-up");

		// 	}
		
		// }


	});


});