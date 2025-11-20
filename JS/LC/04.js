//* Converting to "STRING"
let num = 123;
let strNum = String(num); //? "123"

let bool = true;
let strBool = String(bool); //? "true"

let value = null;
let strNull = String(value); //? "null"

let arr = [1, 2];
let strArr = String(arr); //? "1,2"

//* Converting to "NUMBER"
let str = "99.5";
let num1 = Number(str); //? 99.5

let strSpaces = "   100   ";
let numSpaces = Number(strSpaces); //? 100

let invalidStr = "apple";
let notANumber = Number(invalidStr); //? NaN

parseInt("100px"); //? 100 (it stops at 'p')
parseFloat("3.14em"); //? 3.14 (it stops at 'e')

parseInt("Chapter 2"); //? NaN (because it doesn't start with a number)

Number("100px"); //? NaN (because the whole string is not a valid number)

/**
 //TODO The Unary Plus + Operator (A common trick)
 //TODO Placing a + in front of a value is a concise way to convert it to a number, following the same rules as the Number() function.
 */
let str1 = "50";
let num2 = +str1; //? 50 (as a number)

//* Converting to "BOOLEAN"
Boolean(0); //? false
Boolean(""); //? false
Boolean(null); //? false
Boolean(undefined); //? false
Boolean(NaN); //? false
//? Everything else is truthy!
Boolean(100); //? true
Boolean("hello"); //? true
Boolean("false"); //? true (a non-empty string is truthy)
Boolean([]); //? true (an empty array is an object, and is truthy)
Boolean({}); //? true (an empty object is truthy)
