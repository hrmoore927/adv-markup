var br = "<br>";

// if
var a = 20;
var b = 10;
if (a > b) {
    document.write(a + " is greater than " + b);
} // end if

// if-else
var c = 30;
var d = 40;
if (c > d) {
    document.write(br + c + " is greater than " + d);
} else {
    document.write(br + c + " is NOT greater than " + d);
} // end if-else

// multiple conditions
var e = 60;
var f = 70;
if (e >= 50 || f <= 90) {
    document.write(br + "Either one or both conditions are true");
}

// elseif
var g = 80;
var h = 80;
if (g > h) {
    document.write(br + g + " is greater than " + h);
} else if (g < h) {
    document.write(br + g + " is NOT greater than " + h);
} else if (g == h) {
    document.write(br + g + " is equal to " + h);
} else {
    document.write(br + "These must not be numbers.");
}

/********* LOOPS ***********/

// while loop
/*
while(condition){
    do this stuff;
}
*/

var num = 1;
while (num < 5) {
    document.write(br + num);
    num++;
}

var arrBeatles = [
    "John",
    "Paul",
    "George",
    "Ringo"
]

var beatlesCounter = 0;
while (beatlesCounter < arrBeatles.length) {
    document.write(br + "Beatle: " + arrBeatles[beatlesCounter]);
    beatlesCounter++;
}

// do-while
/*
do {
    do this stuff;
}
while(condition)
*/
var arrGrease = [
    "Danny",
    "Sandy",
    "Rizzo",
    "Kenickie"
]
var i = 0;
do {
    document.write(br + "Character: " + arrGrease[i]);
    i++;
} while (i < arrGrease.length);

// for
// combines the counter, condition, and increment into a single succient statement
// essentially a condensed WHILE loop

var arrKroft = [
    "HR",
    "Sigmund",
    "Benita",
    "Witchiepoo"
]

for (var ctr = 0; ctr < arrKroft.length; ctr++) {
    document.write(br + arrKroft[ctr]);
}

// Functions
function bePolite() {
    document.write(br + "Hello");
}
bePolite();

function bePolite2(greeting) {
    document.write(br + greeting);
}
bePolite2("How are you?");

function add(num1, num2) {
    var finalSum = num1 + num2;
    return finalSum;
}
document.write(br + add(5,6));

// variable scope
document.write("<hr>");

function addGlobal() {
    w = 5; // global is available outside the function
    x = 6; // global is available outside the function
    
    var globalAdded = w + x;
    
    document.write(br + "w INSIDE the function is " + w + " and the sum is " + globalAdded);
}

w = 100;
document.write("w OUTSIDE the function and BEFORE the function runs is " + w);

addGlobal();

document.write(br + "w OUTSIDE the function and AFTER the function runs is " + w);