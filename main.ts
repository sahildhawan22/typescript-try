export {}
let message = "Hi TS 👋";
console.log(message);

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Sahil";

let list1: number[] = [1,2,3,4];
let list2: Array<number> = [1,2,3,4,5];

let person1: [string, number] = ["Sahil", 26];

enum Color {Red = 5, Green, Blue};
let c: Color = Color.Green;
console.log(`c: ${c}`); //logs c: 6

let randomValue: any = 10;
randomValue = true;
randomValue = "Sahil";

let myVariable: any = 10;
//won't throw any "COMPILATION" error in the following statements:
// console.log(myVariable.name);
// myVariable();
// myVariable.toUpperCase();

let myVariable1: unknown = 10;
//won't throw any error in the following statements:
// console.log(myVariable1.name);
// myVariable1();
// (myVariable1 as string).toUpperCase();

//User-defined typeguard:
//hasName returns an object which contains the attribute  'name' of type string
function hasName(obj: any): obj is {name: string} {
    return !!obj && typeof obj === "object" && "name" in obj
}

if(hasName(myVariable)) {
    console.log(myVariable.name)
}

//Union types:
//1. Supports narrowing down of static type check.
//2. Support intellisense.
let multiType: number | boolean;
multiType = 10;
multiType = true;

//We could have also used any type, but it won't support intellisense.
let anyType: any;
anyType = 10;
anyType = true;

// Type of object:
/* function fullName(person: {firstName: string, lastName: string}) {
    console.log(`${person.firstName} ${person.lastName}`);
}

fullName({firstName:"Tony", lastName: "Stark"}); */

//USE AN INTERFACE to prevent declaring object type everywhere you need to use that object:
interface Person {
    firstName: string;
    lastName: string;
}

function fullName(person: Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

fullName({firstName:"Pepper", lastName: "Pots"}); 