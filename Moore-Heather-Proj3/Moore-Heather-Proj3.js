var br = "<br>";

// Conditionals
// if
document.write("<p>-----------------------------------</p>");

var stock = 100;
var sold = 20;
if(sold < stock) {
    var remaining = stock - sold;
    document.write("There are " + remaining + " items left.");
}

// if-else
document.write("<p>-----------------------------------</p>");

var expression = 5 + 2;
var solution = 7;
if(expression == solution) {
    document.write("Congratulations");
} else {
    document.write("Incorrect");
}

var expression = 5 + 2;
var solution = 99;
if(expression == solution) {
    document.write(br + "Congratulations");
} else {
    document.write(br + "Incorrect");
}

// else-if
document.write("<p>-----------------------------------</p>");

var total = 76;
if(total > 100) {
    document.write(total + " is more than 100");
} else if(total > 50) {
    document.write(total + " is greater than 50 but not more than 100");
} else {
    document.write(total + " is too small");
}

var total = 125;
if(total > 100) {
    document.write(br + total + " is more than 100");
} else if(total > 50) {
    document.write(br + total + " is greater than 50 but not more than 100");
} else {
    document.write(br + total + " is too small");
}

var total = 31;
if(total > 100) {
    document.write(br + total + " is more than 100");
} else if(total > 50) {
    document.write(br + total + " is greater than 50 but not more than 100");
} else {
    document.write(br + total + " is too small");
}

// multiple conditions
document.write("<p>-----------------------------------</p>");

var salary = 80000;
if(salary > 70000 && salary < 1000000) {
    document.write("Good salary");
} else {
    document.write("Keep saving");
}

var salary = 30000;
if(salary > 70000 && salary < 1000000) {
    document.write(br + "Good salary");
} else {
    document.write(br + "Keep saving");
}

// Loops
// while
document.write("<p>-----------------------------------</p>");

var num = 1;
while(num < 6) {
    document.write(num + br);
    num++;
}

// do-while
document.write("<p>-----------------------------------</p>");

var num = 1;
do {
    document.write(num + br);
    num++;
} while(num < 6);

// for
document.write("<p>-----------------------------------</p>");

var arrPlanets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto"
];
for(var ctr = 0; ctr < arrPlanets.length; ctr++) {
    document.write(arrPlanets[ctr] + br);
}

// Functions
// functions and arguements
document.write("<p>-----------------------------------</p>");

function bestPython(name) {
    document.write(name + " was the best Monty Python member");
}
bestPython("John Cleese");

// multiple arguements
document.write("<p>-----------------------------------</p>");

function multiply(num1,num2) {
    var finalProduct = num1 * num2;
    return finalProduct;
}
multiply(465838,5837685);