export {}
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
function add(num1: number, num2: number, num3: number = 10) : number {
    return num1 + num2 + num3;
}
console.log(`add(1,2,3): ${add(1,2,3)}`);
console.log(`add(1,2): ${add(1,2)}`);

interface Person {
    firstName: string,
    lastName?: string
}
function fullName(person: Person) : string {
    return `${person.firstName} ${person.lastName}`;
}

  
let p = {
firstName: 'Bruce'
};
console.log(fullName(p));

console.log(fullName({
    firstName: "Sahil"
    }));

function printCoord(pt: {x: number, y: number}) {
    console.log(`Point is (${pt.x}, ${pt.y})`);
}

printCoord({x: 2, y: 4});


function welcomePeople(x: string[] | string) {
    if(Array.isArray(x)) {
        console.log(`Welcome ${x.join(', ')}`);
    } else {
        console.log(`Welcome lone wolf: ${x}`)
    }
}

welcomePeople('Sahil');

let sparseArr = new Array(3);
function padLeft(padding: number | string, input: string) {
    if(typeof padding === "number") {
        return new Array(padding + 1).join(" ") + input;
    } else {
        return padding + input;
    }
}

function printAll(strs: string | string[] | null) {
    //if(strs) {
        if(strs && typeof strs === "object") {
            for(const s of strs) {
                console.log(s + " ");
            }
        } else if(typeof strs === "string") {
            strs.toLowerCase();
            console.log("strs: ", strs);
        }
    //}
}

//printAll([null, null]);