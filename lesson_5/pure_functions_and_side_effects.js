// What side effects are present in the foo function in the following code? 

const bar = 42;
let qux = [1, 2, 3];
let baz = 3;

function foo(arr) {
  let value = arr.pop(); // side effect: mutated array passed as arg
  console.log(`popped ${value} from the array`); //side effect: logged to console
  return value + bar + baz;
}

foo(qux);

// Which of the following functions are pure functions?
// 2, 3, 5

// Function 1: impure, has side effect
function sum(a, b) {
  console.log(a + b); // side effect
  return a + b;
}

// Function 2
function sum(a, b) {
  a + b;  // will aways return undefined since no explicit arg's, therefore pure
}

// Function 3
function sum(a, b) {
  return a + b;
}

// Function 4: impure, different results possible with same arg's
function sum(a, b) {
  return a + b + Math.random();  // random will generate different results
}

// Function 5
function sum(a, b) {
  return 3.1415;  
}

