var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat healthy"
];

for (var i=0; i < todos.length; i++) { //i++ means i plus 1
    todos[i] = todos[i] + "!";
}

// todos.forEach(function(todo, i) {
    // console.log(todo, i);         //display "clean room" etc and index bcs forEach takes an array and asks for a function as an argument
// })

function logTodos(todo, i) {
    console.log(todo,i);
}

todos.forEach(logTodos);


// var todosLength = todos.length;
// for (var i=0; i < todosLength; i++) {  //must use constant because length may changes between loops
    // todos.pop();
// }

// var counterOne = 0
// while (counterOne < 10) {
    // console.log(counterOne);
    // counterOne++
// }

var counterTwo = 10
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo >0);

//Difference bwt while loop and do loop: do loop execute first then check the condition
//Most of the time using for loop