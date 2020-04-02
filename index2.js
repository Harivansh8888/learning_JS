$("button").click(function(){
    $("p").slideToggle("slow", function() {
        alert("The slide toggle effect has completed.");
    });
});
