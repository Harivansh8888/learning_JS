//Finding HTML Elements
document.getElementById(id) //Find an element by element id
document.getElementsByTagName(name) //Find an element by Tag name
document.getElementByClassName(name) //Find an element by Class Name


//Changing HTML ELements
element.innerHTML = new html content //Change the inner HTML of an element
element.attribute = new value	//Change the attribute value of an HTML element
element.style.property = new style //Change the style of an HTML element
element.setAttribute(attribute, value) //setAttribute is a method for changing attribute value of an HTML element


//Adding and Deleting Elements
document.createElement(element) //Create an HTML element
document.removeChild(element) //Remove an HTML element
document.appendChild(element) //Add and HTML element
document.replaceChild(new, old)	//Replace an HTML element
document.write(text) //Write into HTML output stream


//Adding Event handlers
document.getElementById(id).onclick = function(){ code } //Adding Event Handler code to an onclick event
