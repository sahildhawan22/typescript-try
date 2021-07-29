"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pageInit = void 0;
// let name = "Kartik Dhawan";
// let sentence = `My name is ${name}. I'm beginner in TS`;
// console.log(sentence);
// let isBeginner: boolean = true;
// let total: number = 0;
// let bro: string = "";
// let list1: number[] = [1,2,3,4,5];
// let list2: Array<number> = [1,2,3,4,5];
// let person1: [string, number] = ["Sahil", 26];
// enum Color {Red=2, Green, Blue};
// let c: Color = Color.Red;
// console.log(`c: ${c}`);
// let myVar: any;
// myVar = 
// // myVar.call;
// // myVar();
// // (myVar as number).toString();
// // myVar = true;
// function add(num1: number, num2: number, num3?: number) : number {
//     return num1 + num2 + num3;
// }
//But this will work:
function add(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
}
function fullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
let p = {
    firstName: 'Bruce'
};
// console.log(fullName(p));
// console.log(fullName({
//     firstName: "Sahil"
//     }));
function printCoord(pt) {
    console.log(`Point is (${pt.x}, ${pt.y})`);
}
//printCoord({x: 2, y: 4});
function welcomePeople(x) {
    if (Array.isArray(x)) {
        console.log(`Welcome ${x.join(', ')}`);
    }
    else {
        console.log(`Welcome lone wolf: ${x}`);
    }
}
//welcomePeople('Sahil');
let sparseArr = new Array(3);
function padLeft(padding, input) {
    if (typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    }
    else {
        return padding + input;
    }
}
function printAll(strs) {
    //if(strs) {
    if (strs && typeof strs === "object") {
        for (const s of strs) {
            console.log(s + " ");
        }
    }
    else if (typeof strs === "string") {
        strs.toLowerCase();
        console.log("strs: ", strs);
    }
    //}
}
function move(animal) {
    if ("swim" in animal) {
        return animal.swim();
    }
    return animal.fly();
}
const nemo = {
    swim: function () {
        console.log("Fish swims");
    }
};
const nigel = {
    fly: function () {
        console.log("Bird flies");
    }
};
//type Shape = Circle | Square;
/* function getArea(shape: Shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.sideLength ** 2;
    }
} */
let cir = {
    kind: "circle",
    radius: 10
};
let sqr = {
    kind: "square",
    sideLength: 10
};
function greet(fn) {
    fn("Hello World");
}
function doSomething(fn) {
    fn("Do something");
    console.log(`fn.Add(2,3): ${fn.fnAddProperty(2, 3)}`);
    console.log(`fn.desc: ${fn.description}`);
}
let fn = Object.assign(function (str) {
    console.log(str);
}, {
    description: "desc",
    fnAddProperty: (x, y) => x + y
});
//doSomething(fn);
/***************************************/
/* interface SomeConstructor  {
    new (s: string): string[];
}
type SomeConstructorType = {
    new (s: string): string[]
}

function pataNahi(ctor: SomeConstructorType) {
    return new SomeConstructorType("hello");
}
let someConstructorTypeArr =  */
/***************************************/
function firstElement(arr) {
    return arr[0];
}
// console.log(firstElement([1,2,3,4]));
// console.log(firstElement(["a", "b"]));
/* ************************************* */
//Generic Types:
function map(arr, fn) {
    return arr.map(fn);
}
let newArr = map(["1", "2", "3", "4"], (str) => parseInt(str));
//console.log(newArr);
/* ************************************* */
function longest(a, b) {
    if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
}
// console.log(longest([1,2], [1,2,3]));
// console.log(longest("alice", "bob"));
/* ****************************** */
function combine(a, b) {
    return a.concat(b);
}
//Would give error: let combinedArr = combine([1,2,3], ["hello"]);
//Solution: let combinedArr = combine<number | string>([1,2,3], ["hello"]);
class MyClass {
    constructor() {
        this.name = "MyClass";
    }
    getName() {
        return this.name;
    }
}
const c = new MyClass();
const obj = {
    name: "obj",
    getName: c.getName,
};
// Prints "obj", not "MyClass"
console.log(obj.getName());
function visitForBirthday(home) {
    // We can read and update properties from 'home.resident'.
    //Is it because we are not changing referecne of object but just changing its properties
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age = 10;
}
function evict(home) {
    // But we can't write to the 'resident' property itself on a 'Home'.
    /* home.resident = {
   // Cannot assign to 'resident' because it is a read-only property.
      name: "Victor the Evictor",
      age: 42,
    }; */
    //But can we do this? YES!
    home.resident.name = "Victor the Evictor",
        home.resident.age = 42;
}
//This won't work:
// function setCity(homeCity: HomeCity) {
//     homeCity.city = "Chandigarh"
// }
//But these will:
const home_city = { city: "Chandigarh" };
//And this will work too:
function printCity(homeCity = { city: "Mohali" }) {
    console.log(homeCity.city);
}
let stringBox = { contents: "This box has string" };
let point = [3, 4];
function distanceFromOrigin([x, y]) {
    return Math.sqrt(x ** 2 + y ** 2);
}
distanceFromOrigin(point);
/* ******************************************************** */
function identity(arg) {
    return arg;
}
let myIdentity = identity;
let myGenericIdentity = identity;
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
loggingIdentity({ length: 5 });
/* ************************************************************* */
class PointClass {
    //Constructor with default values
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
}
class PointClassOverload {
    constructor(xs, y) {
        //Write your implementation here
        //CONFIRM: Whether in function overload or in class overload, we implement the overload in the most 'general' method?
    }
}
const N_1 = require("N");
function pageInit(context) {
    let customer = context.currentRecord;
    /**
     * TODO
     */
    let applyCouponField = customer.getValue({
        fieldId: "custentity_sdr_apply_coupon"
    });
    N_1.log.debug("Title: ", applyCouponField);
    alert(applyCouponField);
}
exports.pageInit = pageInit;
