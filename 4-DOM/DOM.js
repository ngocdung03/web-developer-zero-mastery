// var button = document.getElementsByTagName("button")[0]; 
// // NOTE: Rememer to include [index] otherwise return array -> error

// button.addEventListener("mouseenter", function() {
//     console.log("CLICK!!!!");
// })

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = ""; //clear the string after entering
}

function addListAfterClick() {
    if (inputLength() > 0) {  //avoid adding blank
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {  //can be event.which; refer keycode in https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);

    