// Point 9

$(document).ready(function () {
    $('.menu-item').click(function () {
        // toggleClass use to add remove active class
        $(this).toggleClass('active');
    });

    $(".menu-main-head h1").animate({fontSize: "3em",});

    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
});