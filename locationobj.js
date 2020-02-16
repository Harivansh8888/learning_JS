<!DOCTYPE html>
<html>
<body>

<h2>JavaScript</h2>

<h3>The window.location object</h3>

<p id="demo"></p>
<p id="demo1"></p>
<p id="demo2"></p>

<script>
document.getElementById("demo").innerHTML = 
"The full URL of this page is:<br>" + window.location.href;
document.getElementById("demo1").innerHTML = 
"Page hostname is: " + window.location.hostname;
document.getElementById("demo2").innerHTML = 
"Page protocol is: " + window.location.protocol;
</script>

</body>
</html>
