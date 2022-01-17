/* 1. The result of the following calculation is a string. Using type coercion, 
  correct the calculation to produce the numeric result instead.*/

let x = '13';
let y = 9;
  
console.log(parseInt(x, 10) + y);

/* 2. Using the same block of JavaScript, change the addition operator to a 
  multiplication operator and leave x as a string. Will the result be a string 
  or a number?*/

console.log(x * y);

  // Number
  /* Official answer:
    Unlike the addition symbol, which both adds numbers and concatenates 
    strings, the other mathematical symbols all try to convert any strings to 
    numbers before performing the calculation. If any string cannot be converted 
    to a number, the calculation will result in NaN. */

/* 3. Convert the three parts of this telephone number to strings to produce a 
  valid phone number. */

let npa = 212;
let nxx = 555;
let num = 1212;

console.log(String(npa) + String(nxx) + String(num));

/* 4. You can also use the String constructor to create Strings from numbers. 
  This is a function that takes an argument and converts it to a string. Try it 
  using the previous block of code; wrap each number in a call to String. */

/* This is what I did in the above answer.  The official answer to question 3 
  above was not what LS advises doing. */


/* 5. The toString method is yet another way to convert values to strings. Try 
  using toString to convert a boolean and an array to a String. Did you get the 
  result you expected? */

  let bool = true;
  let arr = [1, 2, 3];

  console.log(bool.toString());
  console.log(arr.toString());