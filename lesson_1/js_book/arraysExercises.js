/* 1. In the following code, what are the final length values for array1, 
  array2, array3, array4, and array5? */

let array1 = [1, 2, undefined, 4]; // 4

let array2 = [1]; // 1
array2.length = 5; // 5

let array3 = []; // 0
array3[-1] = [1]; // 0 // Negative and non-integer indexes don't get taken into
                  // account when determining an array's length.

let array4 = [1, 2, 3, 4, 5]; // 5
array4.length = 3; // 3

let array5 = []; // 0 
array5[100] = 3; // 101

/* 2. Log all of the even values from myArray to the console. */

let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

myArray.forEach(function(number) {
  if (number % 2 === 0) {
    console.log(number);
  }
});

/* 3. Let's make the problem a little harder. In this problem, we're again 
  interested in even numbers, but this time the numbers are in nested arrays in 
  a single outer array. */

  let myNestedArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
  ];

myNestedArray.forEach(function(subarray) {
  subarray.forEach(function(number) {
    if (number % 2 === 0) {
      console.log(number);
    }
  });
});

/* Let's try another variation on the even-numbers theme.

We'll return to the simpler one-dimensional array. In this problem, we want to 
use the map function to create a new array that contains one element for each 
element in the original array. If the element is an even value, then the 
corresponding element in the new array should contain the string 'even'; 
otherwise, the element in the new array should contain 'odd'. */

let myArray3 = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];

console.log(myArray3.map(function(number) {
  if(number % 2 === 0) { 
    return 'even';
  } else { 
    return 'odd';
  }
}));

/* 5. Write a findIntegers function that takes an array argument and returns an 
  array that contains only the integers from the input array. Use the filter 
  method in your function. */

function findIntegers (array) {
  return array.filter(value => parseInt(value) === value);
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

/* Use map and filter to first determine the lengths of all the elements in an 
  array of string values, then discard the even values (keep the odd values). */

function oddLengths (array) {
  let arrayOfLengths = array.map(value => value.length);
  return arrayOfLengths.filter(value => (value % 2) !== 0);
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

/* 7. Use reduce to compute the sum of the squares of all of the numbers in an 
  array: */

function sumOfSquares (array) {
  return array.reduce((accumulator, number) => accumulator + number ** 2, 0);
}

let newArray = [3, 5, 7];
console.log(sumOfSquares(newArray)); // => 83

/* 8. Write a function similar to the oddLengths function from Exercise 6, but 
  don't use map or filter. Instead, try to use the reduce method */

function oddLengths2(strings) {
  return strings.reduce((filteredNumbersArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredNumbersArray.push(length);
    }

    return filteredNumbersArray;
  }, []);
}
  
let arr2 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths2(arr2)); // => [1, 5, 3]

/* 9. Without using a for, while, or do/while loop, write some code that checks 
  whether the number 3 appears inside these arrays: */

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = []; 
let numbers3 = [2, 4, 6, 8];

function containsThree (array) {
  let threes = array.filter(num => num === 3);
  return ((threes.length === 0) ? false : true);
}

console.log(containsThree(numbers1));
console.log(containsThree(numbers2));
console.log(containsThree(numbers3));

/* LS ANSWER (easy):
> numbers1.includes(3);
= true

> numbers2.includes(3);
= false

> numbers3.includes(3);
= false */

/* 10. Write some code to replace the value 6 in the following array with 606:
  You don't have to search the array.  Just write an assignment that replaces 
  the 6. */

  let arr = [
    ["hello", "world"],
    ["example", "mem", null, 6, 88],
    [4, 8, 12]
  ];

  arr[1][3] = 606;