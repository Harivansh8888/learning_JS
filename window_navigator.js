<!DOCTYPE html>
<html>
<body>

<h2>The Navigator Object</h2>

<p>The cookieEnabled property returns true if cookies are enabled:</p>

<p id="demo"></p>

<p>The appName property returns the application name of the browser:</p>

<p id="demo1"></p>
<script>
document.getElementById("demo").innerHTML =
"navigator.cookieEnabled is " + navigator.cookieEnabled;
document.getElementById("demo1").innerHTML = 
"navigator.appName is " + navigator.appName;
</script>

</body>
</html>
