// Statements
/*
alert("This is a test");
alert("This is another test");
*/
var br = "<br>";
// Variables
var msg;
msg = "Hello";
document.write(msg);

var msg2 = "Hello again";
document.write("<br>" + msg2);

var num = 5;
var num2 = 6;
var total = num + num2;
document.write(br + total);

var iseven = num2 % 2;
document.write(br + iseven);

// Escaping Strings
var quote = 'He said, "My name is O\'brien."';
document.write(br + quote);

// Arrays
var arrBeatles = [];
arrBeatles[0] = "John";
arrBeatles[1] = "Paul";
arrBeatles[2] = "George";
arrBeatles[3] = "Ringo";
document.write(br + arrBeatles);

var arrAbba = [
    "Agnatha",
    "Benny", 
    "Bjorn",
    "Anni"
];

arrBeatles[arrBeatles.length] = "GMartin";
document.write(br + arrBeatles);

arrBeatles[arrBeatles.length] = "BEpstein";
document.write(br + arrBeatles);

// Add multiple members to END of array with PUSH
arrBeatles.push("Linda","Yoko");
document.write(br + arrBeatles);

// Add multiple members to START of array with UNSHIFT
arrBeatles.unshift("Pete","Stu");
document.write(br + arrBeatles);

// Remove SINGLE member from START of array with SHIFT
arrBeatles.shift();
document.write(br + arrBeatles);

// Remove SINGLE member from END of array with POP
arrBeatles.pop();
document.write(br + arrBeatles);

/* 
Multi-Dimensional Arrays
*/
var arrVanHalen = ["Eddie", "Michael", "Alex", "David"];
var arrMusicians = [arrBeatles, arrVanHalen, arrAbba];
document.write(br + arrMusicians[1][1]);

/*
Associative Arrays
*/
var arrRush = [];
    arrRush['Geddy'] = "Bass and vocals";
    arrRush['Alex'] = "Guitar";
    arrRush['Neal'] = "Drums and lyricist";

document.write(br + arrRush['Alex']);

document.write('<hr>');

/*
Nicer Display
*/
var spacer = ' ';
for(var ctr = 0; ctr < arrBeatles.length; ctr++){
    if(ctr < arrBeatles.length - 1) {
        spacer += arrBeatles[ctr] + ', ';
    } else {
        spacer += arrBeatles[ctr];
    }
}

document.write(spacer);