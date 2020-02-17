<!DOCTYPE html>
<html>
<body>

<h2>The Navigator Object</h2>

<p>The cookieEnabled property returns true if cookies are enabled:</p>

<p id="demo"></p>

<p>The appName property returns the application name of the browser:</p>

<p id="demo1"></p>

<p>The appCodeName property returns the code name of the browser.</p>

<p id="demo2"></p>

<p>The product property returns the product name of the browser.</p>

<p id="demo3"></p>
<script>
document.getElementById("demo").innerHTML =
"navigator.cookieEnabled is " + navigator.cookieEnabled;
document.getElementById("demo1").innerHTML = 
"navigator.appName is " + navigator.appName;
document.getElementById("demo2").innerHTML = 
"navigator.appCodeName is " + navigator.appCodeName;
document.getElementById("demo3").innerHTML =
"navigator.product is " + navigator.product;
</script>

</body>
</html>
