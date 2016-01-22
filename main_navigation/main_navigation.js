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


});