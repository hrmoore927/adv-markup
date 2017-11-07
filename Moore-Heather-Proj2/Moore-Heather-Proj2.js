//Create variables
var br = "<br>";
var int = 47;
document.write(int);
var text = "JavaScript is fun!";
document.write(br + text);

//Perform operations
var int2 = 8356;
var decimal = 3.14;
document.write(br + (int2 + decimal));
document.write(br + (int2 - decimal));
document.write(br + (int2 * decimal));
document.write(br + (int2 / decimal));
document.write(br + (int2 % decimal));

//Concatenation and escaping
var string = 'Tom "Alley Cat" O\'Mally';
var num = "64";
var num2 = 1;
document.write(br + string + " is " + num + " years old.")
document.write(br + (num + num2));

//Create indexed arrays
var arrFoods = ["sushi", 
                "tacos", 
                "pizza", 
                "pho"];
document.write(br + arrFoods[1]);
document.write(br + arrFoods.length); //fix this part

//Add a single element to the end of the array
arrFoods[arrFoods.length] = "curry";
document.write(br + arrFoods);

//Add multiple elements to the end of the array
arrFoods.push("burgers", "burritos");
document.write(br + arrFoods);

//Add multiple elements to the beginning of the array
arrFoods.unshift("waffles", "masala");
document.write(br + arrFoods);

//Remove a single element from the beginning of the array
arrFoods.shift();
document.write(br + arrFoods);

//Remove a single element from the end of the array
arrFoods.pop();
document.write(br + arrFoods);

//Create a multi-dimensional array
var arrFruits = ["apples", 
                 "bananas", 
                 "grapes"];
var arrVeg = ["tomatoes", 
              "okra", 
              "turnips", 
              "eggplant"];
var arrProduce = [arrFruits, arrVeg];
document.write(br + arrProduce[1][0]);