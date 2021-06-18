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
console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

let myVariable1: unknown = 10;
//won't throw any error in the following statements:
console.log(myVariable1.name);
myVariable1();
(myVariable1 as string).toUpperCase();