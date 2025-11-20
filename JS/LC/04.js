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
