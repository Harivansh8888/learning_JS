$(".b").click(function(){
    $(".p1").animate({width: "100%"}).animate({fontSize: "50px"}).animate({borderWidth: 20});
});


$(".r").click(function(){
    $(".p1").removeAttr("style");
});