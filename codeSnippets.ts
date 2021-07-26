/*  1. Weird code. Doesn't throw error for num: */
let message: string = 'Hello World';
console.log(message);
let test : any = {x:0};
test = "hello";
let num : number = test;
console.log(num);

/* 2. Type narrowing and 'is' example: */
function isString(test: any): test is string{
    return typeof test === "string";
}

function example(foo: any){
    if(isString(foo)){
        console.log("it is a string" + foo);
        console.log(foo.length); // string function
    }
}
example("hello world");

// Using the type predicate test is string in the above format (instead of just using boolean for the return type), after isString() is called, if the function returns true, TypeScript will narrow the type to string in any block guarded by a call to the function. The compiler will think that foo is string in the below-guarded block (and ONLY in the below-guarded block)

// {
//     console.log("it is a string" + foo);
//     console.log(foo.length); // string function
// }
// A type predicate is just used in compile time. The resulting .js file (runtime) will have no difference because it does not consider the TYPE.

/* 3. Optional and default param: */

// function add(num1: number, num2: number, num3?: number) : number {
//     return num1 + num2 + num3;
// }
//But this will work:
function add(num1: number, num2: number, num3: number = 10) : number {
    return num1 + num2 + num3;
}
console.log(`add(1,2,3): ${add(1,2,3)}`);
console.log(`add(1,2): ${add(1,2)}`);

/* 4. null is Object */
function printAll(strs: string | string[] | null) {
    if (typeof strs === "object") {
      for (const s of strs) {
  //Object is possibly 'null'.
        console.log(s);
      }
    } else if (typeof strs === "string") {
      console.log(strs);
    } else {
      // do nothing
    }
  }

/* ************************************** */

/* Narrowing: In operator usage try */
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
move(nemo);
move(nigel);

/* ************************************** */

//When every type in a union contains a common property with literal types, TypeScript considers that to be a discriminated union, and can narrow out the members of the union.

interface Circle {
  kind: "circle"; //literal type
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape) {
  if(shape.kind === "circle") {
      return Math.PI * shape.radius ** 2;
  } else {
      return shape.sideLength ** 2;
  }
}

let cir: Circle = {
  kind: "circle",
  radius: 10
};
let sqr: Square = {
  kind: "square",
  sideLength: 10
};
console.log(`Area of cir: ${getArea(cir)}`);
console.log(`Area of sqr: ${getArea(sqr)}`);

/* ************************************** */
//Shape will have never type if other types in Union are not possible due to if or switch condns.

function getArea1(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
        const _exhaustiveCheck = shape;
        return _exhaustiveCheck;
  }
}

/* ************************************** */
//Adding a new 'shape', for eg Triangle, to type Shape and not handling it in switch-case will give error.

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape2 = Circle | Square | Triangle;

function getArea3(shape: Shape2) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck2: never = shape;
      //Type 'Triangle' is not assignable to type 'never'.
      return _exhaustiveCheck2;
  }
}
/* ************************************** */

//Function type expressions:
type Greeter = (a: string) => void;
function greet(fn: Greeter) {
    fn("Hello World");
}
/* ************************************** */
//Call Signatures:
//https://stackoverflow.com/questions/48967142/typescript-what-are-call-signature-of-an-object-literal-and-how-can-they-be-use 

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

doSomething(fn);

/* ************************************** */

//Construct Signatures with Call Signatures: https://stackoverflow.com/questions/66874130/how-to-properly-use-functions-construct-signatures-in-typescript

/****************************************************/
//Generic Functions:
function firstElement<T>(arr: T[]): T {
  return arr[0];
}
console.log(firstElement([1,2,3,4]));
console.log(firstElement(["a", "b"]));

/****************************************************/

//Generic Functions:

function map<Input, Output>(arr: Input[], fn: (str: Input) => Output) : Output[] {
  return arr.map(fn);
}

let newArr = map(["1", "2", "3","4"], (str: string) => parseInt(str));

/****************************************************/
/* Rule: When possible, use the type parameter itself rather than constraining it. */
//Constraints:
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
//See Word for 'Working with constrained values' doubt.
/* ****************************** */

//Specifying Type Arguments:

function combine<Type>(a: Type[], b: Type[]) {
  return a.concat(b);
}
//Would give error: let combinedArr = combine([1,2,3], ["hello"]);
//Solution: let combinedArr = combine<number | string>([1,2,3], ["hello"]);

/* ********************************************************************* */
//Important: When writing a function type for a callback, never write an optional parameter unless you intend to call the function without passing that argument. https://www.typescriptlang.org/docs/handbook/2/functions.html#optional-parameters-in-callbacks 
/* ********************************************************************* */

//Function overloading:
function overfn(x: string): string;
function overfn(x: number): boolean;
function overfn(x: string | number, y?: boolean): boolean|string {
  return "oops";
}

//See in implementation we created union of  types so that compiler doesn't complain.

/* ********************************************************************* */

//CONFIRM:
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

len(""); // OK
len([0]); // OK
//len(Math.random() > 0.5 ? "hello" : [0]);

// For 3rd invocation, it didn't run because we have either string or any[] as argument.
//It might have worked with string | any[]. And in that case, we won't even require overloading.
/* ********************************************************************* */

//readonly properties in Object type:
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

/* ********************************************************************* */
//Kya motive tha yeh example ka? 

// It’s important to manage expectations of what readonly implies. It’s useful to signal intent during development time for TypeScript on how an object should be used. TypeScript doesn’t factor in whether properties on two types are readonly when checking whether those types are compatible, so readonly properties can also change via aliasing.

interface Person {
  name: string;
  age: number;
}

interface ReadonlyPerson {
  readonly name: string;
  readonly age: number;
}

let writablePerson: Person = {
  name: "Person McPersonface",
  age: 42,
};

// works
let readonlyPerson: ReadonlyPerson = writablePerson;

console.log(readonlyPerson.age); // prints '42'
writablePerson.age++;
console.log(readonlyPerson.age); // prints '43'



