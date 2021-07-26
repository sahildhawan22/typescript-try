"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Hi TS 👋";
console.log(message);
let isBeginner = true;
let total = 0;
let name = "Sahil";
let list1 = [1, 2, 3, 4];
let list2 = [1, 2, 3, 4, 5];
let person1 = ["Sahil", 26];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Green;
console.log(`c: ${c}`); //logs c: 6
let randomValue = 10;
randomValue = true;
randomValue = "Sahil";
let myVariable = 10;
//won't throw any "COMPILATION" error in the following statements:
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();
let myVariable1 = 10;
//won't throw any error in the following statements:
// console.log(myVariable1.name);
// myVariable1();
// (myVariable1 as string).toUpperCase();
//User-defined typeguard:
//hasName returns an object which contains the attribute  'name' of type string
function hasName(obj) {
    return !!obj && typeof obj === "object" && "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
//Union types:
//1. Supports narrowing down of static type check.
//2. Support intellisense.
let multiType;
multiType = 10;
multiType = true;
//We could have also used any type, but it won't support intellisense.
let anyType;
anyType = 10;
anyType = true;
function fullName(person) {
    console.log(`${person.firstName} ${person.lastName}`);
}
fullName({ firstName: "Pepper", lastName: "Pots" });
