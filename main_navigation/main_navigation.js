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


			if( $(".menu-nav-box").length != true ) {

					$(".header-bg").append("<div class='menu-nav-box'></div>");

					$(".menu-nav-box").css({"top": $(".header-bg").outerHeight(true) + "px" });

					$(".menu-nav-box").load("menu.html", function() {

						console.log("add");

						$(".catlistheight").css({"height": 0});


						for(var index = 0; index <= $(".catlistheight").length - 1; ++index) {

							$(".catlistheight:eq("+ index +")").attr("id","cat_"+ index);

							var childList = $(".catlistheight:eq("+ index +")").children(".catlist");

							childList.attr("id","listcat_"+ index);

						}
				

						$(".catname").click(function() {

							if( $(this).next(".catlistheight") ) {

								// $(this).offset().top;

								// $(document).offset().top = $(this).offset().top;

								// console.log($(this).offset().top);

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

		}



	$(".respmenubtn").click(function() {

		console.log( $(".menu").offset().left );

		var menuNav = document.getElementById("navmenu");

		var coorMenuNav = menuNav.getBoundingClientRect();

		// $('#navmenu').draggable();

		console.log( coorMenuNav.left + "  " + $(".menu").css("left"));

		// if( $(".menu").length > 0 ) {

		if ( $(".menu").css("left") == "0px" ) {

			$(".respmenubtn").removeClass("respmenubtn-active");

			// $(".menu-nav-box").remove();
			// $(".menu-nav-box").css({"display" : "none"});

			$(".menu").animate({"left": -1 * 101  + "%"}, 400);			

			var leftCoorMenu = $(".menu").offset().left;

			console.log(coorMenuNav.left);
			// console.log( $(".menu").offset().left );

			setTimeout(function() {

				$(".menu-nav-box").css({"display" : "none"});

			}, 400);

		} else {

			$(".respmenubtn").addClass("respmenubtn-active");

			$(".menu-nav-box").height($(window).outerHeight() - $(".header-bg").outerHeight());

			$(".menu-nav-box").css({"display":"block"});

			$(".menu").animate({"left": 0  + "%"}, 400);

			var leftCoorMenu = $(".menu").offset().left;

			// console.log(coorMenuNav.left);

			// console.log( $(".menu").offset().left );

		}

		// var leftCoorMenu = $(".menu").offset().left;

		// var menuNav = document.getElementsByClassName("menu")[0];

		


	});


});