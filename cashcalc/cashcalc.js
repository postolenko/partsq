$(document).ready(function() {

	var countPrices = $(".cash-good-middle-col .priceval").length - 1;
	var indexPrice;
	var priceVal = 0;

	var indexDel;

	getTotalPrice();

	$(".plusmincount").click(function() {

		getTotalPrice();

	});

	function getTotalPrice() {

		priceVal = 0;

		for ( indexPrice = 0; indexPrice <= countPrices; ++indexPrice ) {

			priceVal += parseInt( $(".cash-good-middle-col .priceval:eq("+ indexPrice +")").text() * parseInt( $(".count-inpt:eq("+ indexPrice +")").val() )  );

		}

		$(".tl-price-val").attr("value", priceVal);

	}


	$(".cash-good-right-col button").click(function() {

		indexDel = $(".cash-good-right-col button").index(this);

		// $(".cash-good:eq("+ indexDel +")").fadeOut(150);

		$(".cash-good:eq("+ indexDel +")").remove();

		setTimeout(function() {

			// $(".cash-good:eq("+ indexDel +")").remove();

			countPrices = $(".cash-good-middle-col .priceval").length - 1;

			getTotalPrice();

		}, 600);


	});

	


});