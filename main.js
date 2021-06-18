"use strict";
exports.__esModule = true;
var message = "Hi TS 👋";
console.log(message);
var isBeginner = true;
var total = 0;
var name = "Sahil";
var list1 = [1, 2, 3, 4];
var list2 = [1, 2, 3, 4, 5];
var person1 = ["Sahil", 26];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log("c: " + c); //logs c: 6
var randomValue = 10;
randomValue = true;
randomValue = "Sahil";
var myVariable = 10;
//won't throw any COMPILATION error in the following statements:
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();
var myVariable1 = 10;
//won't throw any error in the following statements:
console.log(myVariable1.name);
myVariable1();
myVariable1.toUpperCase();
