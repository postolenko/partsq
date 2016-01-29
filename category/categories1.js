$(document).ready(function() {

	$(".catlistheight").css({"height": 0});

	// $(".catlist").css({"height": 0});

	var elparent;
	var categoryListHeight;
	var indexCategory;
	var elementsecond;
	var boxhidden;


	for(var index = 0; index <= $(".catlistheight").length - 1; ++index) {

		$(".catlistheight:eq("+ index +")").attr("id","cat_"+ index);

		var childList = $(".catlistheight:eq("+ index +")").children(".catlist");

		childList.attr("id","listcat_"+ index);

	}


	

	$(".catname").click(function() {

		if( $(this).next(".catlistheight") ) {

			$(this).offset().top;

			$(document).offset().top = $(this).offset().top;

			console.log($(this).offset().top);

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

		}


	});


});