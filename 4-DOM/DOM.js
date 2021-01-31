document.getElementsByTagName("h1");
document.getElementsByClassName("second")[0];
document.getElementById("first");[0]

document.querySelector("h1");
document.querySelector("li"); //only select the 1st item
document.querySelectorAll("li, h1");

// deal with attribute
document.querySelector("li").getAttribute("random");
document.querySelector("li").setAttribute("random", 1000);

// changing styles
document.querySelector("h1").style; //all elements have style properties
document.querySelector("h1").style.background = "yellow";
// Separations of Concerns - better way:
