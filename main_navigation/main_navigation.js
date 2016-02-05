$(document).ready(function() {

    var mainLink;
    var categoryLink;


    $("body").css({"padding-top": $(".header-bg").outerHeight(true) + "px"});


	$(document).scroll(function() {

		$("body").css({"padding-top": $(".header-bg").outerHeight(true) + "px"});

	});


			if( $(".menu-nav-box").length != true ) {

					$(".header-bg").append("<div class='menu-nav-box'></div>");

					$(".menu-nav-box").load("menu.html", function() {

						if ( $(".menu-nav-box .good a").next(".catlistheight") ) {

							categoryLink = $(".menu-nav-box .good a").next(".catlistheight");

							categoryLink.prev("a").addClass("catname");

							categoryLink.prev("a").after( "<i class='arrowcat glyphicon glyphicon-menu-down'></i>" );

						}


						$(".catlistheight").css({"height": 0});


						for(var index = 0; index <= $(".catlistheight").length - 1; ++index) {

							$(".catlistheight:eq("+ index +")").attr("id","cat_"+ index);

							var childList = $(".catlistheight:eq("+ index +")").children(".catlist");

							childList.attr("id","listcat_"+ index);

						}
				

						$(".arrowcat").click(function() {

							if( $(this).next(".catlistheight") ) {

								// $(this).offset().top;

								// $(document).offset().top = $(this).offset().top;

								// console.log($(this).offset().top);

								var elhBlock = $(this).next(".catlistheight");

								var elhListBlock = elhBlock.children(".catlist");

								// var itemList = $(this).children(".arrowcat");

								var elAttr = elhBlock.attr("id");

								// var listHeight = $("#list"+elAttr).height();

								// console.log($(this).attr("class"))

								if( $("#" + elAttr).height() <= 0 ) {

									// elhListBlock.css({"height": "auto"});

									// $("#" + elAttr).animate({"height": elhListBlock.height() + "px"}, 300);

									$("#" + elAttr).css({"height":"auto"});

									// console.log(elhListBlock.height());

									if ( $(this).hasClass("glyphicon-menu-down") ) {

										$(this).removeClass("glyphicon-menu-down");

										$(this).addClass("glyphicon-menu-up");

									}

								} else {

									// $("#" + elAttr).css({"height": 0});

									// elhListBlock.css({"height": "0"});

									// $("#" + elAttr).animate({"height": 0}, 300);

									$("#" + elAttr).css({"height":"0"});

									// console.log(elhListBlock.height());

									if ( $(this).hasClass("glyphicon-menu-up") ) {

										$(this).removeClass("glyphicon-menu-up");

										$(this).addClass("glyphicon-menu-down");

									}

								}

							}


						});

					});

		}



	$(".respmenubtn").click(function() {

		// console.log( $(".menu").offset().left );

		var menuNav = document.getElementById("navmenu");

		var coorMenuNav = menuNav.getBoundingClientRect();

		// $('#navmenu').draggable();

		// console.log( coorMenuNav.left + "  " + $(".menu").css("left"));

		// if( $(".menu").length > 0 ) {

		$(".menu-nav-box").height($(window).outerHeight() - $(".header-bg").outerHeight());

		$(".menu-nav-box").css({"top": $(".header-bg").outerHeight(true) + "px" });

		if ( parseInt( $(".menu").css("left") ) >= 0 ) {

			$(".respmenubtn").removeClass("respmenubtn-active");

			// $(".menu-nav-box").remove();
			// $(".menu-nav-box").css({"display" : "none"});

			$(".menu").animate({"left": -1 * 101  + "%"}, 300);			

			var leftCoorMenu = $(".menu").offset().left;

			// console.log(parseInt( $(".menu").css("left")) );


			setTimeout(function() {

				$(".menu-nav-box").css({"display" : "none"});

			}, 350);

		} else {

			$(".respmenubtn").addClass("respmenubtn-active");

			$(".menu-nav-box").height($(window).outerHeight() - $(".header-bg").outerHeight());

			$(".menu-nav-box").css({"display":"block"});

			$(".menu").animate({"left": 0  + "%"}, 300);

			var leftCoorMenu = $(".menu").offset().left;

		}


	});


});