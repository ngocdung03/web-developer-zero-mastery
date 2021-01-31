##### Selecting elements
```
document.getElementsByTagName("h1");
document.getElementsByClassName("second")[0];
document.getElementById("first");[0]

document.querySelector("h1");
document.querySelector("li"); //only select the 1st item
document.querySelectorAll("li, h1");
```

##### Deal with attribute
```
document.querySelector("li").getAttribute("random");
document.querySelector("li").setAttribute("random", 1000);
```

##### Changing styles `style.{property}`
```
document.querySelector("h1").style; //all elements have style properties
document.querySelector("h1").style.background = "yellow";
```
##### Separations of Concerns (HTML focused on the text, CSS focus on the styles, Javascript on the actions) 
- Better way: Assign a style named "coolTitle" from CSS in js file
- `document.querySelector.className = "coolTitle";` //best
- 
```
document.querySelector.classList.add("coolTitle");` //best
//can replace add with remove, toggle - switch the effect on/off
```
- Find more style: codepen.io
- Change the content of object - Dangerous
`document.querySelector("h1").innerHTML = "<strong>!!!</strong>";`

##### Getting parents/children of object
```
document.querySelectorAll("li")[1].parentElement;  //<ul>
document.querySelectorAll("li")[1].parentElement.parentElement;  //<body>  //<ul>
document.querySelectorAll("li")[1].parentElement.parentElement.children;  //all the chilren of the body
```
##### CACHE selectors in variables:
`var h1 = document.querySelector("h1");   //assigning a variable`
