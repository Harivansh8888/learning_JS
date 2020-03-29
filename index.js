$("a").attr("href", "https://www.yahoo.com");

$("h1").addClass("big-title margin-50");


$("h1").click(function() {
    $("h1").css("color", "purple");
});


$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    $("h1").text(event.key);
});