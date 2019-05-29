// Connect Button
var calcButton = document.getElementById("calcButton");

// Animation Function
function animate(id, v) {
	// Connect Parameters
	var element = document.getElementById(id);
	var currentOpacity = parseFloat(element.style.opacity);

	// Check for true & false
	if (v) {
		// Fade In
		if (currentOpacity < 1) {
		    element.style.opacity = currentOpacity + 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}	    
	} else {
		// Fade Out
		if (currentOpacity > 0) {
		    element.style.opacity = currentOpacity - 0.1;   
		    currentOpacity = parseFloat(element.style.opacity);
		} else {
		    window.clearInterval(fade);
		}
	}
};

// Declare onButtonClick Function
function onButtonClick() {
	// Connect Parameters
	var width = parseFloat(document.getElementById("width").value);
	var length = parseFloat(document.getElementById("length").value);
	var unit = parseFloat(document.getElementById("unit").value);
	var meter = parseFloat(document.getElementById("meter").value);
	var type = document.getElementById("type").value;
	var result = [];

	// Check for invalid parameters
	if (!width) {
		document.getElementById("eText").textContent = "Please insert value on width"; 
		return null;
	} else if (!length) {
		document.getElementById("eText").textContent = "Please insert value on length"; 
		return null;
	} else if (!unit) {
		document.getElementById("eText").textContent = "Please insert value on scale unit"; 
		return null;
	} else if (!meter) {
		document.getElementById("eText").textContent = "Please insert value on scale meter"; 
		return null;
	} else if (!type) {
		document.getElementById("eText").textContent = "Please insert value on type"; 
		return null;
	} else {
		// Check for invalid type
		if (type === "unit") {
			// Unit
			document.getElementById("rText").innerHTML = "Question : " + "(" + width + " Unit Width x (" + unit + " Unit / " + meter + " Meter))" + " x " + "(" + length + " Unit Length x (" + unit + " Unit / " + meter + " Meter))" + " = ? Meter Width x ? Meter Length" + "<br>";  
		    result.push((width * (meter / unit)));
		    result.push((length * (meter / unit)));
		    // Display Result
			document.getElementById("rText").innerHTML += "Result : " + result[0] + " Meter Width x " + result[1] + " Unit Length";  
		} else {
			// Meter
			document.getElementById("rText").innerHTML = "Question : " + "(" + width + " Meter Width x (" + unit + " Unit / " + meter + " Meter))" + " x " + "(" + length + " Meter Length x (" + unit + " Unit / " + meter + " Meter))" + " = ? Unit Width x ? Unit Length" + "<br>";  
		    result.push((width * (unit / meter)));
		    result.push((length * (meter / unit)));
		    // Display Result
			document.getElementById("rText").innerHTML += "Result : " + result[0] + " Unit Width x " + result[1] + " Unit Length";  
		}
	}
}

// Declare Animation Variable
var fade;

// Add Event Listener on Button
calcButton.addEventListener("click", onButtonClick);

// On Start Up

// Hide Body
document.getElementById("body").style.opacity = 0;

// Set Scrollbar to top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}

// Display Version
var d = new Date();
document.getElementById("version").innerHTML = "<strong>Version 1.0.2019529.122301.LM</strong><br>© " + d.getFullYear() + " KingKingGreat";

// Fade in page
fade = window.setInterval(function() {animate("body", true)}, 100);