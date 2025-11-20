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
let name; //* Allowed. 'name' is now undefined.
name = "Alice";

//? Temporal Dead Zone
console.log(myLetVar); //! ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = "test";
