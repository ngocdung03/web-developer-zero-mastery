var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
// Create body variable to change background style later
var body  = document.getElementById("gradient");

//console.log(body);
// console.log(css);
// console.log(color1);
// console.log(color2);

function setGradient() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    +")";
    // display color codes
    css.textContent = body.style.background + ";";
}

// This time event name is "input"
// We don't need to call the function betcause input event is triggered automatically, the 2nd parameter gets ran with the event
// Therefore, setGradient instead of setGradient()
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// If "oninput" added to HTML, don't need the above codes
