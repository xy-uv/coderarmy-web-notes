/* Reference: https://www.notion.so/shahriaar-ahmed/Lecture-02-Data-Type-2ade365a716c8088b276db6a5e32362e */

//* CONST as Variable

//? Block Scope
if (true) {
  const PI = 3.141569;
}
console.log(PI); //! ReferenceError: PI is not defined

//? Reassignment
const GREETING = "Hello";
GREETING = "Hi"; //! TypeError: Assignment to constant variable.

//? Mutability
const CONFIG = { port: 8080 };
CONFIG.port = 3000; //* This is allowed. CONFIG still points to the same object.

//? Temporal Dead Zone
console.log(MY_CONST); //! ReferenceError: Cannot access 'MY_CONST' before initialization
const MY_CONST = 100;

//* LET as Variable

//? Block Scope
for (let i = 0; i < 3; i++) {
  //* i is only visible here
}
console.log(i); //! ReferenceError: i is not defined

//? Reassignment
let counter = 0;
counter = 1; //* This is allowed.

//? Initialization
let nam; //* Allowed. 'name' is now undefined.
nam = "Alice";

//? Temporal Dead Zone
console.log(myLetVar); //! ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = "test";

//* VAR as Variable

//? Function Scope (not Block Scope)
if (true) {
  var leak = "I am visible outside the if-block";
}
console.log(leak); //* Outputs: "I am visible outside the if-block"

//? Hoisting Behavior
console.log(myVar); //* Outputs: undefined (no error)
var myVar = "Hello";
console.log(myVar); //* Outputs: "Hello"

//? Redeclaration
var x = 10;
var x = 20; //* Allowed. x is now 20.

//* STRING
let name = "Alice";
let greeting = "Hello, World!";
let template = `User: ${name}`; //? Template literals can embed expressions

//* NUMBER
let integerValue = 100;
let floatValue = 3.14;
let notANumber = NaN; //? Result of an invalid math operation like 0 / 0
let infinity = Infinity;

//* BOOLEAN
let isActive = true;
let isComplete = false;

//* UNDEFINED
let user;
console.log(user); //? Outputs: undefined

//* NULL
let data = null; //? Intentionally set to have no value

//* BIGINT
const veryLargeNumber = 9007199254740991n; //? The 'n' makes it a BigInt
const anotherBigInt = BigInt(90071992547409929n);

//* OBJECT Literal
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

//* ARRAY Literal
let numbers = [10, 20, 30, 40];

//* Functions
function greet() {
  console.log("Hello");
}
