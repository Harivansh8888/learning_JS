<!DOCTYPE html>
<html>
<body>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
document.getElementById("demo1").innerHTML = 
"Screen width is " + screen.width;
document.getElementById("demo2").innerHTML = 
"Screen height is " + screen.height;

document.getElementById("demo1").innerHTML =
"Available screen width is " + screen.avail.Width;
document.getElementById("demo2").innerHTML = 
"Available screen height is " + screen.availHeight;
</script>

</body>
</html>
