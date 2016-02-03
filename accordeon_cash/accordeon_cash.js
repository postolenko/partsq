$(document).ready(function() {

    var indexStep;

    var shoppingStepIndex;

    // $(".shopping-step").css({"display":"none"});

    $(".shopping-step-content").css({"display":"none"});

    $(".shopping-step-item").click(function() {

        shoppingStepIndex = $(".shopping-step-item").index(this);

        $(".shopping-step-content").css({"display":"none"});

        $(".shopping-step-content:eq("+ shoppingStepIndex +")").css({"display":"block"});

    });







    $(".step-one-content").css({"display":"none"});

    $(".step-one-h h3:eq(0)").addClass("active");

    $(".step-one-content:eq(0)").css({"display":"block"});

    $(".step-one-h h3").click(function() {

        indexStep = $(".step-one-h h3").index(this);

        if ($(".step-one-h h3").hasClass("active")) {

                $(".step-one-h h3").removeClass("active");

        }

        $(".step-one-content").css({"display":"none"});

        $(".step-one-h h3:eq("+indexStep+")").addClass("active");

        $(".step-one-content:eq(" + indexStep + ")").fadeIn(300);

    });

});