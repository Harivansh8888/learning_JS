$(".firstname").click(function() {
    $(".firstname").animate({opacity: 0.4 , fontSize: "9rem"});
    $(".firstname").animate({opacity: 1 , fontSize: "5rem"});
});

$(".lastname").click(function() {
    $(".lastname").hide();
    
});


$(".box").click(function() {
    $(".box").animate({height: "100px"});
    $(".box").delay(800).animate({width: "100px"});
    $(".box").delay(800).animate({height: "150px"});
    $(".box").delay(800).animate({width: "150px"});
});