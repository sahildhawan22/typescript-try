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