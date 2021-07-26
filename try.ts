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
// console.log(`add(1,2,3): ${add(1,2,3)}`);
// console.log(`add(1,2): ${add(1,2)}`);

interface Person {
    firstName: string;
    lastName?: string
}
function fullName(person: Person) : string {
    return `${person.firstName} ${person.lastName}`;
}

  
let p = {
firstName: 'Bruce'
};
// console.log(fullName(p));

// console.log(fullName({
//     firstName: "Sahil"
//     }));

function printCoord(pt: {x: number, y: number}) {
    console.log(`Point is (${pt.x}, ${pt.y})`);
}

//printCoord({x: 2, y: 4});


function welcomePeople(x: string[] | string) {
    if(Array.isArray(x)) {
        console.log(`Welcome ${x.join(', ')}`);
    } else {
        console.log(`Welcome lone wolf: ${x}`)
    }
}

//welcomePeople('Sahil');

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
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
      return animal.swim();
    }
  
    return animal.fly();
}

const nemo: Fish = {
    swim: function() {
        console.log("Fish swims");
    }
}

const nigel: Bird = {
    fly: function() {
        console.log("Bird flies");
    }
}

// move(nemo);
// move(nigel)


//When every type in a union contains a common property with literal types, TypeScript considers that to be a discriminated union, and can narrow out the members of the union.

interface Circle {
    kind: "circle"; //literal type
    radius: number;
}

interface Square {
    kind: "square";
    sideLength: number;
}

//type Shape = Circle | Square;

/* function getArea(shape: Shape) {
    if(shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.sideLength ** 2;
    }
} */

let cir: Circle = {
    kind: "circle",
    radius: 10
};
let sqr: Square = {
    kind: "square",
    sideLength: 10
};
// console.log(`Area of cir: ${getArea(cir)}`);
// console.log(`Area of sqr: ${getArea(sqr)}`);

type Greeter = (a: string) => void;
function greet(fn: Greeter) {
    fn("Hello World");
}

type DescribableFunction = {
    description: string; //means fn of Describable Type will have string property
    (a: string): void; //means fn of Describable Type accepts string arg and has return type void
    fnAddProperty: (x: number, y: number) => number;
}

function doSomething(fn: DescribableFunction) {
    fn("Do something");
    console.log(`fn.Add(2,3): ${fn.fnAddProperty(2,3)}`);
    console.log(`fn.desc: ${fn.description}`);
}

let fn: DescribableFunction = Object.assign(
    function(str: string) {
        console.log(str)
    }, {
        description: "desc",
        fnAddProperty: (x: number, y: number) => x+y
    }
);

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

function firstElement<T>(arr: T[]): T {
    return arr[0];
}
// console.log(firstElement([1,2,3,4]));
// console.log(firstElement(["a", "b"]));

/* ************************************* */
//Generic Types:
function map<Input, Output>(arr: Input[], fn: (arg: Input) => Output) : Output[] {
    return arr.map(fn);
}
let newArr = map(["1", "2", "3","4"], (str: string) => parseInt(str));
//console.log(newArr);
/* ************************************* */
function longest<Type extends {length: number}>(a: Type, b: Type) {
    if(a.length > b.length) {
        return a;
    } else {
        return b;
    }
}
// console.log(longest([1,2], [1,2,3]));
// console.log(longest("alice", "bob"));

/* ****************************** */

function combine<Type>(a: Type[], b: Type[]) {
    return a.concat(b);
}
//Would give error: let combinedArr = combine([1,2,3], ["hello"]);
//Solution: let combinedArr = combine<number | string>([1,2,3], ["hello"]);


class MyClass {
    name = "MyClass";
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

interface Home {
    readonly resident: {name: string, age: number}
}
function visitForBirthday(home: Home) {
    // We can read and update properties from 'home.resident'.
    //Is it because we are not changing referecne of object but just changing its properties
    console.log(`Happy birthday ${home.resident.name}!`);
    home.resident.age = 10;
  }
  
  function evict(home: Home) {
    // But we can't write to the 'resident' property itself on a 'Home'.
    /* home.resident = {
   // Cannot assign to 'resident' because it is a read-only property.
      name: "Victor the Evictor",
      age: 42,
    }; */

    //But can we do this? YES!
    home.resident.name = "Victor the Evictor",
    home.resident.age = 42
  }

//What about primitive readonly property of an object?
// https://mariusschulz.com/blog/read-only-properties-in-typescript
interface HomeCity {
    readonly city: string;
}

//This won't work:
function setCity(homeCity: HomeCity) {
    homeCity.city = "Chandigarh"
}

//But these will:
const home_city: HomeCity = { city: "Chandigarh"};
//And this will work too:
function printCity(homeCity: HomeCity = {city: "Mohali"}) {
    console.log(homeCity.city)
}