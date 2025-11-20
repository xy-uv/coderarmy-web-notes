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
