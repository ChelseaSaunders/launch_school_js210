// 1. What values do the following expressions evaluate to?

false || (true && false); // false
true || (1 + 2); // true
(1 + 2) || true; // 3
true && (1 + 2); // 3
false && (1 + 2); // false
(1 + 2) && true; // true
(32 * 4) >= 129; // false
false !== !true; // false
true === 4; // false
false === (847 === '847'); // true
false === (847 == '847');  // false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; // true

/* 2. Write a function, evenOrOdd, that determines whether its argument is an 
even number. If it is, the function should log 'even' to the console; otherwise, 
it should log 'odd'. For now, assume that the argument is always an integer. */

function evenOrOdd(integer) {
  (integer % 2) === 0 ? console.log('even') : console.log('odd');
}
evenOrOdd(2);
evenOrOdd(3);

/* 3. Let's improve our previous implementation of evenOrOdd. Add a validation 
    check to ensure that the argument is an integer. If it isn't, the function 
    should issue an error message and return. */

function evenOrOddWithValidation(input) {
  if (parseInt(input) !== input) {
    console.log('error, value was not an integer.');
    return;
  }
(input % 2) === 0 ? console.log('even') : console.log('odd');
}
evenOrOddWithValidation(2);
evenOrOddWithValidation(3);
evenOrOddWithValidation('4');
evenOrOddWithValidation('5');
evenOrOddWithValidation(2.2);

// 4. What does the following code log to the console, and why?

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');
// Product2, Product3, Product not found; no break statement

// 5. Refactor this statement to use an if statement instead.
// return foo() ? 'bar' : qux();

// if(foo()) {
//   return 'bar';
// } else {
//   return qux();
// }

// 6. What does this code output to the console?
function isArrayEmpty(arr) {
  if (arr) {
    console.log('Not Empty');
  } else {
    console.log('Empty');
  }
}

isArrayEmpty([]);
// Not empty; empty arrays are not one of the falsey values

/* 7. Write a function that takes a string as an argument and returns an 
    all-caps version of the string when the string is longer than 10 characters. 
    Otherwise, it should return the original string. Example: change 'hello 
    world' to 'HELLO WORLD', but don't change 'goodbye'. */

function allCapsForLongStrings(string) {
  return ((string.length > 10) ? string.toUpperCase() : string);
}

console.log(allCapsForLongStrings('Oh Hi Mark!'));
console.log(allCapsForLongStrings('Oh hi doggy!!'));
console.log(allCapsForLongStrings('Oh hi.'));

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
 }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
